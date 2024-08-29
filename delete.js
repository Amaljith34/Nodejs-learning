const fs=require('fs');
fs.unlink('./sample.js',(err)=>{
    if(err){
        console.log(err);
        
    }
    console.log('succesfuly delete');
    
})