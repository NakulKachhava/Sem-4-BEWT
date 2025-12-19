const fs = require('fs')

fs.writeFile('output.txt',"Hello World Write",(err)=>{
    if(err){
        console.log("Error: "+err);
        return;
    }
    console.log("Written Successfully.");
})