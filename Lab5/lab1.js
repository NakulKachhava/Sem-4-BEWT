const {exec} = require('child_process');
const { error } = require('console');

// exec("node --version",(err,stdout,stderr)=>{
//     if(err){
//         console.log("Error: "+err);
//     }
//     else if(stderr){
//         console.log("StdError: "+stderr);
//     }
//     else{
//         console.log("Output: "+stdout);
//     }
// })

exec("python p1.py",(err,stdout,stderr)=>{
    if(err){
        console.log("Error: "+err);
    }
    if(stderr){
        console.log("StdError: "+stderr);   
    }
    else{
        console.log("Output: "+stdout);
    }
})