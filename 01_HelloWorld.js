const http = require('http');
const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
    res.end("node页面")
})
server.listen(8080, '108.88.0.228')
console.log('服务器启动')