const http = require("http");

const fs = require("fs");

const server = http.createServer((req,res)=>{
    res.setHeader("Content-type","text/html");
    if(req.url === "/"){
        res.statusCode = 200;
        fs.readFile("home.txt",(err,data)=>{
            if(err){
                res.end(err);
            }
            else{
                res.end(data);
            }
        }); 
    }
    else if(req.url === "/login"){
        res.statusCode = 200;
        fs.readFile("login.txt",(err,data)=>{
            if(err){
                res.end(err);
            }
            else{
                res.end(data);
            }
        });
    }
    else if(req.url === "/profile"){
        res.statusCode = 200;
        res.end("<h1>Profile Page.</h1>");
    }
    else if(req.url === "/contactus"){
        res.statusCode = 200;
        res.end("Contact Us Page.");
    }
    else if(req.url === "/about"){
        res.statusCode = 200;
        fs.readFile("about.txt",(err,data)=>{
            if(err){
                res.end(err);
            }
            else{
                res.end(data);
            }
        });
    }
    else{
        res.statusCode = 404;
        res.end("Page Not Found.");
    }
})

server.listen(3000,()=>{
    console.log("Server running at 3000");
})