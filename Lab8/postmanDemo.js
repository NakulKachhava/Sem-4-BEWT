const express = require("express");

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("<h1>Home Page.</h1>");
})

app.post("/register",(req,res)=>{
    const {name,email,password} = req.body;
    res.status(200).send(`Name: ${name}, Email: ${email}, Password: ${password}`);
})

app.get("/user/:id",(req,res)=>{
    res.status(200).send(req.params.id);
})

app.get("/login",(req,res)=>{
    res.status(200).send(req.query);
})

app.listen(3000,()=>{
    console.log("Server Started At 3000.");
})