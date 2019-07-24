var http = require('http')
var express = require('express')
http.createServer(function(request, response){
	response.writeHead(200, {'Content-type': 'text/plain'});
	response.end('Hello World');
}).listen(8888);
console.log('Server at http://127.0.0.1:8888/')

