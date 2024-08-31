// setTimeout(() => {
//     console.log('setTimeout'); 
//   }, 0);
  
//   setImmediate(() => {
//     console.log('setImmediate'); 
//   });
  
//   process.nextTick(() => {
//     console.log('process.nextTick'); 
//   });
  
//   Promise.resolve().then(() => {
//     console.log('Promise.resolve');
//   });
  console.log('Start');
  setInterval(() => {
    console.log('Interval 1');
  },500); // Executes every 500 ms
  

setTimeout(() => {
  console.log('Timeout 1');
},500); // Executes after 1000 ms


setTimeout(() => {
  console.log('Timeout 2');
}, 2000); // Executes after 2000 ms

console.log('End');