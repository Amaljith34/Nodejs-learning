const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
function onConnectA() {
    console.log('Connected A!');
  }
  
  function onConnectB() {
    console.log('Connected B!');
  }
  
  eventEmitter.on('connect', onConnectA);
  eventEmitter.on('connect', onConnectB);
  
  // Emit 'connect' event - both listeners are called
  eventEmitter.emit('connect'); 
  // Output:
  // Connected A!
  // Connected B!
  
  // Remove one listener
  eventEmitter.removeAllListener('connect', onConnectA);
  
  // Emit 'connect' event again - only the remaining listener is called
  eventEmitter.emit('connect'); 
  // Output:
  // Connected B!
  