// const fs=require('fs');
// const { Duplex } = require('stream');
// const duplex=new Duplex({
//     write(chunk,encoding,callback){
//         console.log(chunk.toString());
        
//     },
//     read(size){
//         this.push(`hi ${size}`)
//         this.push(null)
//     }
// })
// duplex.on('data',(chunk)=>{
//     console.log(chunk.toString());
    
// })
// duplex.write(`hellooooooo`)
// duplex.end()

const fs=require('fs')
const { Duplex } = require('stream')
const duplex=new Duplex({
    write(chunk){
        console.log(chunk.toString());
    },
    read(size){
        this.push(`hi ${size}`)
        this.push(null)
    }
})
duplex.on('data',(chunk)=>{
    console.log(chunk.toString());
    
})
duplex.write(`heloook`)
duplex.end()