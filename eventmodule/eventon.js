// const EventEmitter=require('events')
// const eventEmitter=new EventEmitter();
// eventEmitter.once('fn',(name,age)=>{
//     console.log(`hello my name is ${name} ${age}`);
    
// })
// eventEmitter.emit('fn','amaljith k',22)

const EventEmitter=require('events')
const eventEmitter=new EventEmitter();
eventEmitter.once('fn',(name,age)=>{
    console.log(`my name is ${name} and ${age} old`);
    
})
eventEmitter.emit('fn','amaljith','21')
eventEmitter.emit('fn','amaljith','21')
