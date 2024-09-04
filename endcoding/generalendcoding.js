const buffer=Buffer.from('hello world')
console.log(buffer);

const base64=buffer.toString('base64')
console.log(base64);
const normal=Buffer.from(base64,'base64')
const orginal=normal.toString('utf8')
console.log(normal);
console.log(orginal);



const strings=Buffer.from('heloooo goodmorning')
console.log(strings);
console.log(strings.toString());




