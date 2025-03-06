
const express= require('express');

const server= express();

const PORT = process.env.PORT || 5000;

server.get('/',(req,res)=>{
    res.send("Welcome to My Application")
})

server.get('/users',(req,res)=>{
    res.send([{id:1,name:"Uzma"},{id:2,name:"Uzma"},{id:3,name:"Uzma"}])
})

server.listen(PORT,'0.0.0.0',()=> {console.log("Server Started")})