const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/txt'})
    res.end('hello world \n')
})
const PORT=3030;
server.listen(PORT,()=>{
    console.log(`server run at ${PORT}`);
    
})