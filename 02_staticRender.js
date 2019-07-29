const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
    if (req.url === '/yuan'){
        fs.readFile('./test1.html', function(err, data){
            res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
            res.write(data);
            res.end();
        })
    } else if (req.url === '/fang') {
        fs.readFile('./test2.html', function(err, data){
            res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
            res.write(data);
            res.end();
        })
    } else if (req.url === '/0.jpg') {
        fs.readFile('./0.jpg', function(err, data){
            res.writeHead(200, {'Content-type': 'image/jpg'});
            res.write(data);
            res.end();
        })
    } else if (req.url === '/themes.css') {
        fs.readFile('./themes.css', function(err, data){
            res.writeHead(200, {'Content-type': 'text/css'});
            res.write(data);
            res.end();
        })
    } else {
        res.writeHead(404, {'Content-type': 'text/html;charset=utf-8'});
        res.write('页面没找到');
        res.end();
    }
})
server.listen(8080, 'localhost')
console.log('读取完毕')