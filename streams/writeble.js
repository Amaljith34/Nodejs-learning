const fs=require('fs');
// fs.writeFile('test.txt','hello world',(err)=>{
//     if(err){
//         console.log(err);
        
//     }
//     else{
//         console.log('adding sucessful');
        
//     }
// });

const writable=fs.createWriteStream('./test.txt')
writable.write('1234567890')
writable.end('end',()=>{
    console.log('sucess');
    
})

