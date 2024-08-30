const fs=require('fs');
const readable=fs.createReadStream('./test.txt');
readable.on('data',(chunk)=>{
    console.log(`recive ${chunk.length} byteof data`);
    
})
readable.on('end',()=>{
    console.log('there is no more data');
    
})