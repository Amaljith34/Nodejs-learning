const fs=require('fs');
fs.unlink('../index.js',(err)=>{
    if(err){
        console.log(err);
        
    }
    console.log('succesfuly delete');
    
})