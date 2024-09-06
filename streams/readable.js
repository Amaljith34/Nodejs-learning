// const fs=require('fs');
// const readable=fs.createReadStream('./test.txt');
// readable.on('data',(chunk)=>{
//     console.log(`recive ${chunk.length} byteof data`);
    
// })
// readable.on('end',()=>{
//     console.log('there is no more data');
    
// })

const fs=require('fs')
const readable=fs.createReadStream('./test.txt');
// readable.on('data',(chunk)=>{
//     console.log(`${chunk.length}and `);
    
// })
// readable.on('end',()=>{
//     console.log(`ther is no more data`);
    
// })

readable.on('data',(chunk)=>{
    console.log(chunk.length); 
})
readable.on('end',()=>{
    console.log('no more data');
})