const http = require('http');
const url = require('url');
// 寻找一个字符串某个字符第n次出现的位置
const find = function(str, cha, num){
    let x = str.indexOf(cha);
    for(let i = 1; i < num; i++){
        x = str.indexOf(cha, x+1);
    }
    return x;
}
const server = http.createServer(function(req, res){
    const userurl = req.url;
    const second = userurl.charAt(1);
    const start = find(userurl, '/', 1)
    const end = find(userurl, '/', 2)
    const pathFirst = userurl.slice(start+1, end);
    const pathSecond = userurl.slice(end+1);
    if (second === '/'){
        res.writeHead(404, {'Content-type': 'text/html;charset=utf-8'});
        res.end('地址输入错误');
    } else {
        if (pathFirst === 'student') {
            res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
            res.write('学生id: ' + pathSecond);
            res.end();
        } else if (pathFirst === 'teacher') {
            res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
            res.write('教师id: ' + pathSecond);
            res.end();
        }else{
            res.writeHead(404, {'Content-type': 'text/html;charset=utf-8'});
            res.end('地址输入错误');
        }
    }
})

server.listen(8080, 'localhost')