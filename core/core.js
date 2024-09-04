// const express=require('express');
// const cors=require('cors')

// const app=express();

// //Enable core for all routes
// app.use(cors())

// //Example route
// app.get('/',(req,res)=>{
//   res.send(`CORS-enable route`)
// })
// app.get('/about',(req,res)=>{
//   res.send(`CORS-enable route in about`)
// })

// const PORT=3020;
// app.listen(PORT,()=>{
//   console.log(`server is runing at ${PORT}`);
  
// })

const express=require('express');
const cors=require('cors')

const app=express();
app.use(cors())

app.get('/',(req,res)=>{
  res.send(`the cors is enable to route`)
  
})
app.get('/aboute',(req,res)=>{
  res.send(`this is aboute page`)
})
const PORT=3005;
app.listen(PORT,(req,res)=>{
  console.log(` running`);
  
})
