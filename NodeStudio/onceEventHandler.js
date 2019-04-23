var events = require('events')

var eventEmitter = new events.EventEmitter()
eventEmitter.once('Data_Recieved', function () {
    console.log('Data recieved Successfully')
});
eventEmitter.emit('Data_Recieved');
eventEmitter.emit('Data_Recieved');
eventEmitter.emit('Data_Recieved');
