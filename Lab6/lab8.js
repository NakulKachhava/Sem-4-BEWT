const fs = require('fs')

fs.copyFile("source.txt","backup.txt",(err)=>{
    if(err){
        console.log("Error: "+err);
        return;
    }
    console.log("File Copied Successfully.");
})