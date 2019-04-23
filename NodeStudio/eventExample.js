var events = require('events')

var eventEmitter = new events.EventEmitter()
eventEmitter.on('Data_Recieved', function () {
    console.log('Data recieved Successfully')
});
eventEmitter.emit('Data_Recieved');
