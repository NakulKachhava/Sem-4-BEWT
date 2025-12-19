const fs = require('fs')

fs.watch('.',(eventType,fileName)=>{
    if(fileName == 'watchme.txt'){
        console.log("EventType: "+eventType+",FileName: "+fileName+" changed");
    }
})