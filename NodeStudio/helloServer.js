var http = require('http')
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end("Hello To Node Server")
}).listen(8080, '127.0.0.1');