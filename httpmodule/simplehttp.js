// const http=require('http');
// const server=http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type': 'text/txt'});
//     res.write('helloo world')

//     res.end('hello world  \n')
// })
// const PORT=3050;
// server.listen(PORT,()=>{
//     console.log(`server run at ${PORT}`);
    
// })

const fs = require('fs');
const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('base.txt');

readableStream.pipe(writableStream);
readableStream.on('data',()=>{
    console.log('sucess');
    
})
