const fs=require('fs');
fs.writeFile('sample.txt','hello world this is testing for fs modules methods',(err)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log('file created');
        
    }
})