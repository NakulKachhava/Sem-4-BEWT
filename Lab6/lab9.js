const fs = require('fs')

if(fs.existsSync('config.txt',)){
    console.log("File exist.");
}
else{
    console.log("File does not exist.");
}