const path = require('path')

console.log(path.isAbsolute("//folder//subfolder////file.txt"));
console.log(path.isAbsolute("./folder//subfolder////file.txt"));
console.log(path.isAbsolute("C:/Users/student/Desktop/4B 366/npm-lab-1"));
console.log(path.isAbsolute("./Desktop/4B 366/npm-lab-1"));
