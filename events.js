// 引入events模块
var events = require('events');
// 创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function(){
	console.log('连接成功。');
	// 触发data_receives事件
	eventEmitter.emit('data_received');
}
// 绑定connection事件处理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定data_received事件
eventEmitter.on('data_received', function(){
	console.log('数据接收成功。');
})

// 触发connection事件
eventEmitter.emit('connection');

console.log('程序执行完毕')