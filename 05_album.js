const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
    if (req.url === '/favicon.ico') return;
    fs.readdir('./album', function(err, files){
        const images = [];
        if (err) throw err;
        (function dirFile(i){
            if (i === files.length) {
                console.log(images);
                return;
            }
            fs.stat('./album/' + files[i], function(err, file){
                if(!file.isDirectory()){
                    images.push('./album/' + files[i])
                }
                dirFile(i + 1);
            })
        }(0))
    })
    res.end();
})

server.listen(8080, 'localhost')

console.log('服务器启动完毕')