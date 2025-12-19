const fs = require('fs')

fs.readdir('.',(err,data)=>{
    if(err){
        console.log("Error: "+err);
        return;
    }
    data.forEach((i) => {
        console.log(i);
    });
})