var resolve = require('path').resolve;
var fs = require('fs');
var ejs = require('ejs');
var pkg = require('../package.json');
var template = resolve(__dirname, './template.ejs');
var defaultOptions = {
  title: pkg.name,
  version: pkg.version,
  description: pkg.description,
  css: [],
  js: []
};

template = fs.readFileSync(template, 'utf-8');
template = ejs.compile(template);

module.exports = function (options) {
  options = Object.assign({}, defaultOptions, options);

  return template(options);
};
