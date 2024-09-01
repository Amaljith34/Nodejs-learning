const http=require('http')
const server=http.createServer((req,res)=>{
    
    if(req.method==='GET'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end('this is a get method')
    }
    else if(req.method==='POST'){
        let body='';
        req.on('data',(chunk)=>{
            body+=chunk.toString()
        })
        req.on('end',()=>{
            res.writeHead(200,{'Conttent-Type':'application/json'})
            res.end(`recieved post data : ${body}`)
        })
    }
    else{
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
})
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});