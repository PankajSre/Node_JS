var event = require('events');
var emitter = new event.EventEmitter();
emitter.on('Sum', function (a, b) {
    console.log('Sum of Numbers : ' + (Number(a) + Number(b)));
});
emitter.emit('Sum', 3, 5);
