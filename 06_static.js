const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const fileMime = function(tar){
    switch (tar) {
        case '.html' || '.htm' :
            return 'text/html';
            break;
        case '.css' :
            return 'text/css';
            break;
        case '.jpg' :
            return 'image/jpg';
            break;
    }
}

const server = http.createServer(function(req, res){
    let pathname = url.parse(req.url).pathname;
    if(pathname === '/' || pathname === '/index.htm'){
        pathname = 'index.html'
    }
    const extname = path.extname(pathname)
    fs.readFile('./static/' + pathname, function(err, data){
        if(err){
            fs.readFile('./static/404.html', function(err, data){
                res.writeHead(404, {'Content-type': fileMime('.html')});
                res.write(data);
                res.end();
            })
            return;
        }
        res.writeHead(200, {'Content-type': fileMime(extname)});
        res.write(data);
        res.end();
    })
})

server.listen(8080, 'localhost');

console.log('服务器启动完毕')