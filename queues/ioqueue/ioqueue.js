const fs=require('fs');
// const { setTimeout } = require('timers/promises');
// fs.writeFile('sample.txt','hello world',(err)=>{
//     if(err){
//         console.log(err);
        
//     }
//     else{
//         console.log('sucess');
//     }
    
// })
fs.readFile('./sample.txt',()=>{
    console.log('this is readfile');
    // console.log(data);
})
 process.nextTick(()=>console.log('heloo'))
 Promise.resolve().then(()=>console.log('this is promise .resolve')
 )
 setTimeout(()=>console.log('this isn set time out'),0);

