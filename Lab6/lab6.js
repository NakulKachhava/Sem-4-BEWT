const fs = require('fs')

fs.mkdir('my-data',(err)=>{
    if(err){
        if(err.code === "EEXIST"){
            console.log("Directory Already Exists."+err);
        }
        else{
            console.error("Error: "+err);   
        }
    }
    else{
        console.log("Directory created Successfully.");
    }
})