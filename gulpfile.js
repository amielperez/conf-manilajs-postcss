var gulp = require("gulp")
var postcss = require("gulp-postcss")
var gray = require("postcss-color-gray")
var each = require("postcss-each")
var not = require("postcss-selector-not")
var zindex = require("postcss-zindex")


gulp.task('demo', () => {
  var processors = [
    gray,
    each,
    not,
    zindex
  ]
  return gulp.src('./src/stylesheets/demo.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/stylesheets'))
})
