const express = require("express");

const fs = require("fs");

const app = express();

app.get("/",(req,res)=>{
    res.status(200).send("<h1>Home Page.</h1>");
})

app.get("/login",(req,res)=>{
    res.status(200).send("Login Page.");
})

app.get("/profile",(req,res)=>{
    res.status(200).send("Profile Page.");
})

app.get("/contactUs",(req,res)=>{
    fs.readFile("contactUs.txt",(err,data)=>{
        if(err){
            res.send(err);
        }
        else{
            res.status(200).send(data.toString());
        }
    })
})

app.get("/about",(req,res)=>{
    fs.readFile("about.txt",(err,data)=>{
        if(err){
            res.send(err);
        }
        else{
            res.status(200).send(data.toString());
        }
    })
})

app.use((req,res)=>{
    res.status(404).send("Page Not Found.");
})

app.listen(3000,()=>{
    console.log("Server Started At 3000.");
})