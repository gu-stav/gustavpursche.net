var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css');

gulp.task('minify-css', function() {
  gulp.src(['./static/css/font-awesome.min.css',
            './static/css/normalize.css',
            './static/css/main.css'])
    .pipe( concat("all.min.css") )
    .pipe( minifyCSS() )
    .pipe( gulp.dest("./static/dist/") )
});

gulp.task('default', function() {
  gulp.run('minify-css');

  gulp.watch('./static/css/**', function() {
    gulp.run('minify-css');
  });
});