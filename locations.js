'use strict';

const path = require('path');


const relative = {
  appletvos: path.join('build', 'Release-appletvos', 'TVMLCatalog-appletvos.app'),
  appletvsimulator: path.join('build', 'Release-appletvsimulator', 'TVMLCatalog-appletvsimulator.app'),
};

const absolute = {
  appletvos: path.resolve(__dirname, 'build', 'Release-appletvos', 'TVMLCatalog-appletvos.app'),
  appletvsimulator: path.resolve(__dirname, 'build', 'Release-appletvsimulator', 'TVMLCatalog-appletvsimulator.app'),
};

module.exports = {
  relative,
  absolute,
};
