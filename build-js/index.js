"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startServer = startServer;
exports.stopServer = stopServer;
Object.defineProperty(exports, "relative", {
  enumerable: true,
  get: function () {
    return _locations.relative;
  }
});
Object.defineProperty(exports, "absolute", {
  enumerable: true,
  get: function () {
    return _locations.absolute;
  }
});

require("source-map-support/register");

var _staticServer = _interopRequireDefault(require("static-server"));

var _bluebird = _interopRequireDefault(require("bluebird"));

var _appiumSupport = require("appium-support");

var _locations = require("./locations");

const log = _appiumSupport.logger.getLogger('tvos-uicatalog');

let server;

async function startServer() {
  server = new _staticServer.default({
    rootPath: './Server',
    port: 9001,
    name: 'appium-tvml-uicatalog'
  });
  return await new _bluebird.default(function (resolve) {
    server.start(function () {
      log.debug(`Server listening on '${server.port}'`);
      resolve();
    });
  });
}

async function stopServer() {
  server.stop();
  server = undefined;
}require('source-map-support').install();


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImxvZyIsImxvZ2dlciIsImdldExvZ2dlciIsInNlcnZlciIsInN0YXJ0U2VydmVyIiwiU3RhdGljU2VydmVyIiwicm9vdFBhdGgiLCJwb3J0IiwibmFtZSIsIkIiLCJyZXNvbHZlIiwic3RhcnQiLCJkZWJ1ZyIsInN0b3BTZXJ2ZXIiLCJzdG9wIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQSxNQUFNQSxHQUFHLEdBQUdDLHNCQUFPQyxTQUFQLENBQWlCLGdCQUFqQixDQUFaOztBQUVBLElBQUlDLE1BQUo7O0FBRUEsZUFBZUMsV0FBZixHQUE4QjtBQUM1QkQsRUFBQUEsTUFBTSxHQUFHLElBQUlFLHFCQUFKLENBQWlCO0FBQ3hCQyxJQUFBQSxRQUFRLEVBQUUsVUFEYztBQUV4QkMsSUFBQUEsSUFBSSxFQUFFLElBRmtCO0FBR3hCQyxJQUFBQSxJQUFJLEVBQUU7QUFIa0IsR0FBakIsQ0FBVDtBQU1BLFNBQU8sTUFBTSxJQUFJQyxpQkFBSixDQUFNLFVBQVVDLE9BQVYsRUFBbUI7QUFDcENQLElBQUFBLE1BQU0sQ0FBQ1EsS0FBUCxDQUFhLFlBQVk7QUFDdkJYLE1BQUFBLEdBQUcsQ0FBQ1ksS0FBSixDQUFXLHdCQUF1QlQsTUFBTSxDQUFDSSxJQUFLLEdBQTlDO0FBQ0FHLE1BQUFBLE9BQU87QUFDUixLQUhEO0FBSUQsR0FMWSxDQUFiO0FBTUQ7O0FBRUQsZUFBZUcsVUFBZixHQUE2QjtBQUMzQlYsRUFBQUEsTUFBTSxDQUFDVyxJQUFQO0FBQ0FYLEVBQUFBLE1BQU0sR0FBR1ksU0FBVDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0YXRpY1NlcnZlciBmcm9tICdzdGF0aWMtc2VydmVyJztcbmltcG9ydCBCIGZyb20gJ2JsdWViaXJkJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ2FwcGl1bS1zdXBwb3J0JztcbmltcG9ydCB7IHJlbGF0aXZlLCBhYnNvbHV0ZSB9IGZyb20gJy4vbG9jYXRpb25zJztcblxuXG5jb25zdCBsb2cgPSBsb2dnZXIuZ2V0TG9nZ2VyKCd0dm9zLXVpY2F0YWxvZycpO1xuXG5sZXQgc2VydmVyO1xuXG5hc3luYyBmdW5jdGlvbiBzdGFydFNlcnZlciAoKSB7XG4gIHNlcnZlciA9IG5ldyBTdGF0aWNTZXJ2ZXIoe1xuICAgIHJvb3RQYXRoOiAnLi9TZXJ2ZXInLFxuICAgIHBvcnQ6IDkwMDEsXG4gICAgbmFtZTogJ2FwcGl1bS10dm1sLXVpY2F0YWxvZycsXG4gIH0pO1xuXG4gIHJldHVybiBhd2FpdCBuZXcgQihmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIHNlcnZlci5zdGFydChmdW5jdGlvbiAoKSB7XG4gICAgICBsb2cuZGVidWcoYFNlcnZlciBsaXN0ZW5pbmcgb24gJyR7c2VydmVyLnBvcnR9J2ApO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3RvcFNlcnZlciAoKSB7XG4gIHNlcnZlci5zdG9wKCk7XG4gIHNlcnZlciA9IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IHsgc3RhcnRTZXJ2ZXIsIHN0b3BTZXJ2ZXIsIHJlbGF0aXZlLCBhYnNvbHV0ZSB9O1xuIl0sImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIuLiJ9
