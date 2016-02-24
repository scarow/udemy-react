var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');

gulp.task('default', function(){
  // load everything within src
  return gulp.src('src/**')
    // convert jsx to js
    .pipe(react())
    // concat all files to application.js
    .pipe(concat('application.js'))
    // save application.js to current project directory
    .pipe(gulp.dest('./'))
})