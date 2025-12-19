const fs = require('fs')

fs.unlink('temp.txt',(err)=>{
    if(err){
        console.log("Error: "+err);
    }
    console.log("Deletion was Successful");
})