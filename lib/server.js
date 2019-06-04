import http from 'http';
import path from 'path';
const log = require('fancy-log');
const fs = require('fs');


function getContentType (extName) {
  let contentType = 'text/html';
  switch (extName) {
    case '.js':
        contentType = 'text/javascript';
        break;
    case '.css':
        contentType = 'text/css';
        break;
    case '.json':
        contentType = 'application/json';
        break;
    case '.png':
        contentType = 'image/png';
        break;
    case '.jpg':
        contentType = 'image/jpg';
        break;
    case '.wav':
        contentType = 'audio/wav';
        break;
  }
  return contentType;
}

http.createServer(function (request, response) {
  log(`Request starting: ${request.url}`);

  const filePath = `./Server/${request.url ? request.url : 'index.html'}`;

  const contentType = getContentType(path.extname(filePath));

  log(`Getting file '${filePath}' with content type '${contentType}'`);

  fs.readFile(filePath, function (err, content) {
    if (err) {
      log.error(`Error serving file: ${err}`);
      if (err.code === 'ENOENT'){
        fs.readFile('./404.html', function (err, content) {
          response.writeHead(404, {'Content-Type': 'text/html'});
          response.end(content, 'utf-8');
        });
      } else {
        response.writeHead(500);
        response.end(`Sorry, check with the site admin for error: ${error.code} ..\n`);
        response.end();
      }
    } else {
      response.writeHead(200, {'Content-Type': contentType});
      response.end(content, 'utf-8');
    }
  });

}).listen(9001);
log('Server running at http://127.0.0.1:9001/');

gulp.task('server:start', function () {

});
