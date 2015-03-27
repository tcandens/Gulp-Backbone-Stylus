(function() {
  'use strict';
  var gulp = require('gulp'),
      usemin = require('gulp-usemin'),
      stylus = require('gulp-stylus'),
      bs = require('browser-sync'),
      del = require('del');

  // Replace development versions of assets and move into build directory
  gulp.task("usemin", function() {
    return gulp.src('app/index.html')
      .pipe(usemin())
      .pipe(gulp.dest('build'))
  });

  // Deletes entire build directory
  gulp.task('clean:build', function() {
    return del('build');
  });

  // Compiles stylus stylesheets into app/css/main.css
  gulp.task('stylus:dev', function() {
    return gulp.src('app/stylus/main.styl')
      .pipe(stylus())
      .pipe(gulp.dest('app/css/'));
  });

  

})();
