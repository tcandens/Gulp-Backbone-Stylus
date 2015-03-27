(function() {
  'use strict';
  var gulp = require('gulp'),
      usemin = require('gulp-usemin');

  gulp.task("usemin", function() {
    gulp.src('app/index.html')
      .pipe(usemin())
      .pipe(gulp.dest('build'))
  });


})();
