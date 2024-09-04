const http=require('http');
const server=http.createServer((req,res)=>{
    
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end('welcom to home page')
    }
    else if(req.url==='/about'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end('this is about page')
    }
    else if(req.url==='/contact'){
        res.writeHead(200,{'Conent-Type':'text/plain'})
        res.end('tjis is contact page')
    }
    res.end()
})
const PORT=3035;
server.listen(PORT,()=>{
    console.log('sucess');
    
})