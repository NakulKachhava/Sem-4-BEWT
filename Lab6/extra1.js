const fs = require('fs')

fs.readFile('dest.txt',(err,data)=>{
    if(err){
        console.log("Error: "+err);
        return;
    }
    fs.appendFile('copy.txt',`${data}`,(err)=>{
        if(err){
            console.log("Error: "+err);
            return;
        }
        console.log("copied Successfully.");  
    })
})