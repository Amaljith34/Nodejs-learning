const fs=require('fs');
//(oldname,newname)
fs.rename('sample.txt','test.txt',(err)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log('rename successful');
        
    }
})