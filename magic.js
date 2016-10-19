var postcss = require('postcss');
var svg = require('postcss-svg');
var fs = require('fs')
fs.readFile('./src/stylesheets/magic.css', (err, css) =>
  postcss([ svg({ paths: ['dist/assets'] }) ])
    .process(css)
    .then((result) =>
      fs.writeFileSync('./dist/stylesheets/magic.css', result.css)
    )
)
