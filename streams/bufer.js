// const buf = Buffer.alloc(10); // Allocates a buffer of 10 bytes initialized to zero
// console.log(buf); // <Buffer 00 00 00 00 00 00 00 00 00 00>
// const bufi=Buffer.from('amaljith anjali')
// console.log(bufi);

// console.log(bufi.toString('utf-8'));

const buf = Buffer.alloc(15);
buf.write('Node.js', 3, );
console.log(buf); // <Buffer 4e 6f 64 65 2e 6a 73 00 00 00 00 00 00 00 00>




// const bufFromArray = Buffer.from([1, 2, 3, 4, 5]);
// console.log(bufFromArray); // <Buffer 01 02 03 04 05>


// const bufFromString = Buffer.from('Hello, World!', 'utf8');
// console.log(bufFromString); // <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21>


// const buf = Buffer.from('Hello, World!');
// console.log(buf.toString('utf8')); // 'Hello, World!'



// const buf = Buffer.alloc(15);
// buf.write('Node.js', 0, 'utf8');
// console.log(buf); // <Buffer 4e 6f 64 65 2e 6a 73 00 00 00 00 00 00 00 00>



// const buf1 = Buffer.from('Hello, ');
// const buf2 = Buffer.from('World!');
// const buf3 = Buffer.concat([buf1, buf2]);
// console.log(buf3.toString()); // 'Hello, World!'
