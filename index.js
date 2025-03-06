
const express= require('express');

const index= express();

server.get('/',(req,res)=>{
    res.send("Welcome to My Application")
})

server.get('/users',(req,res)=>{
    res.send([{id:1,name:"Uzma"},{id:2,name:"Uzma"},{id:3,name:"Uzma"}])
})

server.listen(3000,()=>console.log("Server Started"))