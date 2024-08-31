Promise.resolve()
.then(()=>{
    console.log('amal');
})
console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 1000); // Executes after 1000 ms

setTimeout(() => {
  console.log('Timeout 2');
}, 500); // Executes after 500 ms

setInterval(() => {
  console.log('Interval 1');
}, 2000); // Executes every 2000 ms

setImmediate(() => {
  console.log('Immediate 1');
}); // Executes immediately after the current poll phase

process.nextTick(() => {
  console.log('Next Tick 1');
}); // Executes at the end of the current operation

console.log('End');


