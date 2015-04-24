'use strict';

var gulp = require('gulp');

var pkg = require('./../package.json');

var banner = [
  '/**',
  ' ** <%= pkg.name %> - <%= pkg.description %>',
  ' ** (c) 2015 payworks GmbH',
  ' ** @author <%= pkg.author %>',
  ' ** @version v<%= pkg.version %>',
  ' **/',
  ''
].join('\n');


var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

module.exports = function(options) {
  gulp.task('compress', ['clean'], function() {
    return gulp.src([options.src + '/**/*.js', '!' + options.src + '/**/*.spec.js'])
      .pipe($.uglify())
      .pipe($.rename({
        extname: '.min.js'
      }))
      .pipe($.header(banner, {pkg: pkg}))
      .pipe(gulp.dest(options.dist + '/'));
  });

  gulp.task('clean', function (done) {
    $.del([options.dist + '/', options.tmp + '/'], done);
  });

  gulp.task('build', ['compress']);
};
