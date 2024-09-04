// const http=require('http')
// // const {Worker}=require('node:worker_threads')
// const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.writeHead(200,{'Content-Type':'text/plain'})
//         res.end("home page")
//     }
//     else if(req.url==='/about'){
//         let j=0;
//         for(let i=0;i<6000000000;i++){
//             j++;
//         }

//         res.writeHead(200,{'Content-Type':'text/plain'})
//         res.end(`slow page ${j}`)
//     }
    
// })
// const PORT=8000;
// server.listen(PORT,()=>{
//     console.log(`SERVER RUNNING`);
    
// })




const http=require('http')
const {Worker}=require('node:worker_threads')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end("home page")
    }
    else if(req.url==='/about'){
        const worker=new Worker('./workthread.js')
        worker.on('message',(j)=>{
            res.writeHead(200,{'Content-Type':'text/plain'})
            res.end(`slow page ${j}`)
        })
    }  
})
const PORT=8000;
server.listen(PORT,()=>{
    console.log(`SERVER RUNNING`);
    
})