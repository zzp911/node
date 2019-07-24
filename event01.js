var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2){
	console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2, arg3){
	console.log('listener2', arg1, arg2, arg3);
});
emitter.emit('someEvent', '参数1', '参数2', '参数3')