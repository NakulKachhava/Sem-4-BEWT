const path = require('path')

const os = require('os')

console.log(path.basename(__dirname)) 
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(__dirname) // same as console.log(path.dirname(__filename)).provides absolute path till directory
console.log(__filename) // full path
