const http = require('http');
const url = require('url');

const server = http.createServer(function(req, res){
    const queryObj = url.parse(req.url, true).query;
    const {name, age, sex} = queryObj;
    res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
    res.write('用户信息： ' + name + ' ' + age + ' ' + sex);
    res.end();
})
server.listen(8080, 'localhost')