const express = require("express");

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
    res.status(200).send("Contact Us Page.");
})

app.get("/about",(req,res)=>{
    res.status(200).send("About Page.");
})

app.use((req,res)=>{
    res.status(404).send("Page Not Found.");
})

app.listen(3000,()=>{
    console.log("Server Started At 3000.");
})