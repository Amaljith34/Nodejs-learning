const EventEmitter=require('events')
const eventEmitter=new EventEmitter();
eventEmitter.on('fn',(name,age)=>{
    console.log(`hello my name is ${name} ${age}`);
    
})
eventEmitter.emit('fn','amaljith k',22)