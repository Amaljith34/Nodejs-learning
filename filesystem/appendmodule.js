// const fs=require('fs');
// fs.appendFile('./sample.txt','\nand this text is appended',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('append succesful');
        
//     }
    
// })


const fs=require('fs');
fs.appendFile('testingfile','good morning ',(err)=>{
    if(err){
        console.log(err);
        
    }
    console.log('sucess');
    
})