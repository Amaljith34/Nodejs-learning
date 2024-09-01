console.log('Start');

setImmediate(() => {
  console.log('Executing after I/O events');
});

console.log('End');
