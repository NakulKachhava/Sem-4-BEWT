const fs = require('fs')

fs.readFile('hello.txt',(err,data)=>{
    if(err){
        console.log("Error: "+err);
        return;
    }
    console.log("Output: "+data);
    //    -----  OR -----
    console.log(data.toString());
    
})

