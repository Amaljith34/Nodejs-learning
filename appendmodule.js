const fs=require('fs');
fs.appendFile('./sample.txt','\nand this text is appended',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('append succesful');
        
    }
    
})