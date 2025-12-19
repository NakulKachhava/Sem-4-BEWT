const fs = require('fs')

fs.copyFile("yt-logo.png","copy-logo.png",(err)=>{
    if(err){
        console.log("Error: "+err);
        return;
    }
    console.log("png file Copied Successfully.");
})