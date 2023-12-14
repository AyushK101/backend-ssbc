// provides utilities for working with file and directory paths. 
const { log } = require('console');
const { globalAgent } = require('http');
const path = require('path');

console.log(path.basename('index.js','x.js'));  
console.log(path.basename('http://google.com:3000?a=12')); // last portion

console.log(path.dirname('/home/ayush10nov/Desktop/backend/15_builtin-modules/1-os-module.js'));
console.log(path.dirname(__filename));      

console.log(path.extname(__filename));  // extension of file

console.log(path.join('home','ayush10nov','desktop','..',)); //.. one directory back

//! to make path 
console.log(path.join(__dirname,__filename));

//! normalize
console.log(path.normalize('//15_builtin-modules///2-path-module.js//'));
console.log(path.normalize('\\\home/\\'));

//! parse : give object 

console.log(path.parse(__filename));    

//! isabsolute 
console.log(path.isAbsolute('5-http.js'));    
console.log(path.isAbsolute('//5-http.js'));    




