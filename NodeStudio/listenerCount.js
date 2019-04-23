var events = require('events')

var eventEmitter = new events.EventEmitter();
var emitter = new eventEmitter();

emitter.on('Data_Recieved', function () { });
emitter.on('Data_Recieved', function () { });
console.log(eventEmitter.listenerCount(emitter, 'Data_Recieved'))
