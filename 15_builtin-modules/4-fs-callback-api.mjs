// perform all operations asynchronously , then invoke a callback function upon completion/error.
import { log } from 'console';
import * as fs from 'fs';


// fs.mkdir('/home/ayush10nov/Desktop/backend/clbck',err=> console.log(err));

//read content
fs.readdir('/home/ayush10nov/Desktop/backend/14_node-MODULES-',{recursive:true},(err,files)=>{
    for(let file of files) {
        console.log(file);
    }
})

// fs.rmdir('/home/ayush10nov/Desktop/backend/test1',(err)=>{
//      if(err) {
//         console.log(err);
//      }
// })

fs.writeFile('/home/ayush10nov/Desktop/backend/practice.js',"hello world",{encoding:"utf8",flag:"a"},(err)=>{
    if(err) throw err;
})

fs.readFile('/home/ayush10nov/Desktop/backend/practice.js',{encoding:'utf8'},(err,data)=>{
    console.log(data);
    if(err) throw err;
})

fs.readFile('15_builtin-modules/5-http.js','utf8',(err,data)=>{
    console.log("file read-ed successfully ");
    console.log(`this is data;${data}`);    
    if(err){
        console.log(err);
    }
})

fs.appendFile('/home/ayush10nov/Desktop/backend/practice.js',"dsfjad;l",{encoding:"utf8",},(err)=>{
    if(err) throw err;
})

fs.copyFile('/home/ayush10nov/Desktop/backend/practice.js','/home/ayush10nov/Desktop/backend/hero.txt',(err)=>{
    if(err) throw err;
})



// fs.stat('')

        