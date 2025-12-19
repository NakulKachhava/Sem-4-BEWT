const fs = require('fs')

fs.appendFile('output.txt',"Appending from node file",(err)=>{
    if(err){
        console.log("Error: "+err);
        return;
    }
    console.log("Appended Successfully.");  
})