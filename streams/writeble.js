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
writable.write('helooooo how are you')
writable.end()

