const http = require("http");

const server = http.createServer((req,res)=>{
    res.setHeader("Content-type","text/html");
    if(req.url === "/"){
        res.statusCode = 200;
        res.end("<h1>Home Page.</h1>");
    }
    else if(req.url === "/login"){
        res.statusCode = 200;
        res.end("Login Page.");
    }
    else if(req.url === "/profile"){
        res.statusCode = 200;
        res.end("Profile Page.");
    }
    else if(req.url === "/contactus"){
        res.statusCode = 200;
        res.end("Contact Us Page.");
    }
    else if(req.url === "/about"){
        res.statusCode = 200;
        res.end("About Page.");
    }
    else{
        res.statusCode = 404;
        res.end("Page Not Found.");
    }
})

server.listen(3000,()=>{
    console.log("Server running at 3000");
})