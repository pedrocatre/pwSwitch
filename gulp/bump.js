'use strict';

var gulp = require('gulp');
var args = require('yargs').argv;
var packages = [
  './package.json',
  './bower.json'
];


var $ = require('gulp-load-plugins')();

module.exports = function(options) {
  /**
   * Bump the version
   * --type=pre will bump the prerelease version *.*.*-x
   * --type=patch or no flag will bump the patch version *.*.x
   * --type=minor will bump the minor version *.x.*
   * --type=major will bump the major version x.*.*
   * --version=1.2.3 will bump to a specific version and ignore other flags
   */
  gulp.task('bump', function() {
    var msg = 'Bumping versions';
    var type = args.type;
    var version = args.ver;
    var options = {};
    if (version) {
      options.version = version;
      msg += ' to ' + version;
    } else {
      options.type = type;
      msg += ' for a ' + type;
    }

    return gulp
      .src(packages)
      .pipe($.print())
      .pipe($.bump(options))
      .pipe(gulp.dest('./'));
  });
};
