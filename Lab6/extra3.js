const fs = require('fs')
let data = ""
obj = {
    name: "Het Zalavadiya",
    address: "New York,USA",
    phone: 9876543210
}

Object.keys(obj).forEach((keys)=>{
    value = obj[keys]
    data += `${keys} : ${value}\n`
})

fs.writeFile('object.txt',`${data}`,(err)=>{
    if(err){
        console.log("Error: "+err);
        return;
    }
    console.log("Written Successfully.");
})
