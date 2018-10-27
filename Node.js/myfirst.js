var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World! Welcome to learning Node.js');
}).listen(8090);