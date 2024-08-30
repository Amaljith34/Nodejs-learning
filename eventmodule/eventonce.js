const EventEmitter=require('events');
const eventEmitter=new EventEmitter();
 eventEmitter.once('connect',()=>{
    console.log('connecct for the first time');
    
})
eventEmitter.emit('connect');
eventEmitter.emit('connect');