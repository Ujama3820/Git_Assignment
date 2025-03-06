
const express= require('express');

const server= express();

server.get('/',(req,res)=>{
    res.send("Welcome to My Application")
})

const PORT = process.env.PORT ||3000;

server.get('/users',(req,res)=>{
    res.send([{id:1,name:"Uzma"},{id:2,name:"Uzma"},{id:3,name:"Uzma"}])
})

server.listen(PORT,'0.0.0.0',()=>{console.log("Server Started")})