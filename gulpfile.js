'use strict';

const gulp = require('gulp');
const boilerplate = require('appium-gulp-plugins').boilerplate.use(gulp);
const { relative } = require('./locations');


boilerplate({
  build: 'tvos-uicatalog',
  projectRoot: __dirname,
  transpileOut: 'build-js',
  iosApps: {
    relativeLocations: {
      appletvos: relative.appletvos,
      appletvsimulator: relative.appletvsimulator,
    },
    appName: 'TVMLCatalog.app',
  },
});

gulp.task('server:start', function () {
  const { startServer } = require('./build');
  return startServer();
});
