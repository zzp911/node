var fs = require('fs');
// 非阻塞
fs.readFile('input.txt', function(err, data) {
	if(err){
		console.log(err);
		return;
	}
	console.log(data.toString())
})

console.log('执行完毕')