var gulp = require("gulp")
var postcss = require("gulp-postcss")
var svg = require("postcss-svg")


gulp.task('css', () => {
  var processors = [
    svg({
      paths: ['./src/assets']
    })
  ]
  return gulp.src('./src/stylesheets/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest/stylesheets'))
})

gulp.task('assets', () => {
  return gulp.src('./src/assets').pipe(gulp.dest('./dest/assets'))
})

gulp.task('index', () => {
  return gulp.src('./src/index.html').pipe(gulp.dest('./dest'))
})

gulp.task('magic', ['css', 'assets', 'index'])
