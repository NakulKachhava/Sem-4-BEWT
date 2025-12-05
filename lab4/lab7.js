const os = require('os')

console.log(os.totalmem()); // in Bytes
console.log(os.freemem()); // in Bytes

console.log(os.totalmem()/Math.pow(10,9)); // in GB
console.log(os.freemem()/Math.pow(10,9)); // in GB
