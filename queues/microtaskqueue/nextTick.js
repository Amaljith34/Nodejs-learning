// // process.nextTick(()=>{
// //     console.log('hellooo');
    
// // })
// console.log('Start');

// process.nextTick(() => {
//   console.log('process.nextTick 1');
//   process.nextTick(() => {
//     console.log('process.nextTick 2');
//   });
// });
// process.nextTick(() => {
//     console.log('process.nextTick 3');
// })
// process.nextTick(() => {
//     console.log('process.nextTick 4');
// })

// Promise.resolve().then(() => {
//     process.nextTick(() => {
//             console.log('process.nextTick 10');
//         })
//   console.log('Promise.then 1');
// });

// console.log('End');

// const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log('I/O task: File reading completed');
// });

// // console.log('I/O Queue example');



// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// setImmediate(() => {
//   console.log('setImmediate');
// });


const bufferAlloc = Buffer.alloc(5); 
bufferAlloc.write('helloo world')// Creates a Buffer of size 10 bytes
console.log(bufferAlloc.toString());




