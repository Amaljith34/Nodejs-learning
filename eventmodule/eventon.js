const EventEmitter=require('events')
const eventEmitter=new EventEmitter();
eventEmitter.once('fn',(name,age)=>{
    console.log(`hello my name is ${name} ${age}`);
    
})
eventEmitter.emit('fn','amaljith k',22)