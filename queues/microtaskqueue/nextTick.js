// process.nextTick(()=>{
//     console.log('hellooo');
    
// })
console.log('Start');

process.nextTick(() => {
  console.log('process.nextTick 1');
  process.nextTick(() => {
    console.log('process.nextTick 2');
  });
});
process.nextTick(() => {
    console.log('process.nextTick 3');
})
process.nextTick(() => {
    console.log('process.nextTick 4');
})

Promise.resolve().then(() => {
    process.nextTick(() => {
            console.log('process.nextTick 10');
        })
  console.log('Promise.then 1');
});

console.log('End');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

setImmediate(() => {
  console.log('setImmediate');
});
