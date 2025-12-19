const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello World.</h1>"); // no need to specify setHeader. Send will do it internally.
})

app.listen(3000,()=>{
    console.log("Server Started At 3000.");
})