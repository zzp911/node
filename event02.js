var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function(){
	console.log('执行 listener1 监听器');
}
var listener2 = function(){
	console.log('执行 listener2 监听器');
}


eventEmitter.addListener('connection', listener1)
eventEmitter.on('connection', listener2)

var eventListeners = eventEmitter.listenerCount('connection');
console.log('目前有' + eventListeners + '个监听器事件连接');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log('listener1 监听器事件不再受监听');

eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');	
console.log('目前有' + eventListeners + '个监听器事件连接');

console.log('程序执行完毕')
