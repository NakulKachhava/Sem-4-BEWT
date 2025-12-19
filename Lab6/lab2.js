const fs = require('fs')

fs.readFile('info.txt',(err,data)=>{
    if(err){
        console.log("Error: "+err);
        return;
    }
    console.log("Output from async: "+data.toString());
})


try{
    data = fs.readFileSync("info.txt","utf-8")
    console.log("Output from sync: "+data);
    
}
catch(err){
    console.log("Error: "+err);
}