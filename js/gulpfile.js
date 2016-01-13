var gulp = require('gulp'),
  jasmine = require('gulp-jasmine');

gulp.task('specs', function() {
  return gulp.src('tests/spec/*.js')
    .pipe(jasmine());
});

gulp.task('default', function() {
  return "default task ran.";
});

gulp.task('default', ['specs']);
