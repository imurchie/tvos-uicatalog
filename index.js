import StaticServer from 'static-server';
import B from 'bluebird';
import { logger } from 'appium-support';
import { relative, absolute } from './locations';


const log = logger.getLogger('tvos-uicatalog');

let server;

async function startServer () {
  server = new StaticServer({
    rootPath: './Server',
    port: 9001,
    name: 'appium-tvml-uicatalog',
  });

  return await new B(function (resolve) {
    server.start(function () {
      log.debug(`Server listening on '${server.port}'`);
      resolve();
    });
  });
}

async function stopServer () {
  server.stop();
  server = undefined;
}

export { startServer, stopServer, relative, absolute };
