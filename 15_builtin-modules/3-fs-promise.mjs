// fs module enables interacting with file system 
/**
 * 1. promise api 
 * 2. callback api {async}
 * 3. sync api 
 */

//! promise api : provide async fs methods that returns promises

// const fs = require('fs/promises');
import { log } from 'console';
import * as fs from 'fs/promises';
import path from 'path';


//!making dir
try {
  await fs.mkdir('',);
   console.log("director created successfully");
} catch (err) {
    console.log("hello");   
    console.log(err);   
}


// ! read content of directory 
try {
    let content = await fs.readdir('a',{recursive:true}); //using option object
    console.log(content);
} catch (err) {
    
}

//! remove directory 

try {
    await fs.rmdir(`/home/ayush10nov/Desktop/backend/test`,{});
    console.log("removed");
} catch (err) {
    console.log(err);
}

//! write and read file 
try {
    await fs.writeFile('/home/ayush10nov/Desktop/backend/15_builtin-modules/bFile.txt',"--hello world--",{"flag":"a"});
    console.log("written successfully"); 
} catch (err) {
    console.log(err);
}

try {   //by default it return buffer
   let data =  await fs.readFile('/home/ayush10nov/Desktop/backend/15_builtin-modules/bFile.txt',{encoding:"utf8"})
    console.log(data);
} catch (err) {
    
}

//! appendData into file 

try {
    await fs.appendFile('/home/ayush10nov/Desktop/backend/15_builtin-modules/aFile.txt',)
} catch (err) {
    console.log(err);
}

//! copy file 
try {
    await fs.copyFile('/home/ayush10nov/Desktop/backend/15_builtin-modules/aFile.txt','/home/ayush10nov/Desktop/backend/15_builtin-modules/bFile.txt');
    console.log("copied successfully");

} catch (err) {
    console.log(err);
}

//! get file information
try { 
    let x = await fs.stat('/home/ayush10nov/Desktop/backend/15_builtin-modules/5-http.js',);
    console.log(x);
    console.log(x.isFile());
} catch(err) {
    console.log();
} 

