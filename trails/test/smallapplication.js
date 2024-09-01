const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/txt'})
    res.end('helloo world this isss')
})
const PORT=3030;
server.listen(PORT,()=>{
    console.log('server renning')
    
})