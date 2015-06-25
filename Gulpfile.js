(function() {
  'use strict';
  var gulp = require('gulp'),
      webpack = require('webpack-stream'),
      stylus = require('gulp-stylus'),
      bs = require('browser-sync'),
      del = require('del'),
      browserSync = require('browser-sync'),
      reload = browserSync.reload;

  // Webpack module build
  gulp.task('webpack:dev', function() {
    return gulp.src('src/js/master.js')
      .pipe(webpack({
        output: {
          filename: 'bundle.js'
        }
      }))
      .pipe(gulp.dest('dev/js'))
  });

  // Deletes entire build directory
  gulp.task('clean:dev', function() {
    return del('dev');
  });

  // Compiles stylus stylesheets into app/css/main.css
  gulp.task('stylus:dev', function() {
    return gulp.src('src/stylus/main.styl')
      .pipe(stylus())
      .pipe(gulp.dest('dev/css'));
  });

  gulp.task('watch', function() {
    gulp.watch([ 'src/js/**/*.js' ], [ 'webpack:dev', reload ]);
    gulp.watch([ 'src/**/*.html' ], [ 'copy:dev', reload ]);
    gulp.watch([ 'src/stylus/**/*.styl' ], [ 'stylus:dev', reload ]);
  });

  gulp.task('copy:dev', function() {
    return gulp.src('src/**/*.html')
      .pipe(gulp.dest('dev'));
  });

  gulp.task('serve:dev', function() {
    browserSync.init({
      serve: {
        port: 8000
      }
    });
  });

  gulp.task('build:dev', [ 'webpack:dev', 'stylus:dev', 'copy:dev', 'serve:dev' ]);

  gulp.task('default', [ 'build:dev', 'watch:dev' ]);

})();
