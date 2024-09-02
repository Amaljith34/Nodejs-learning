
const http=require('http');
const PORT=process.env.PORT || 5000;
const server=http.createServer((req,res)=>{
    if(req.url==='/' && req.method==='GET'){
        res.writeHead(200,{'Content-type':'application/json'});
        res.write("hello from vanialla.js")
        res.end()
    }
    else{
        res.writeHead(404,{"Content-Type":"application/json"})
        res.end(JSON.stringify({message:"route not found"}))
    }
})
server.listen(PORT,()=>{
    console.log('sucess');
    
})