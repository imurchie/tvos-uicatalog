'use strict';

const gulp = require('gulp');
const boilerplate = require('appium-gulp-plugins').boilerplate.use(gulp);


boilerplate({
  build: 'tvos-uicatalog',
  projectRoot: __dirname,
});

gulp.task('server:start', function () {
  const { startServer } from './build';
  return startServer();
});
