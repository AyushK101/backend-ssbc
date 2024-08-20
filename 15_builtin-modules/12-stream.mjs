// abstract interface for working with streaming data in Node.js

// Streams can be readable, writable, or both.

//  All streams are instances of EventEmitter.

/** TYPES OF STREAM : 
 * 1. writable
 * 2. readable
 * 3. duplex
 * 4. transform 
 * 
 */

//! without stream , first whole file will have to be loaded into ram and then write/send.

import stream from 'node:stream';
import fs from 'fs';

let readStream = fs.createReadStream('/home/ayush10nov/Desktop/backend/15_builtin-modules/bFile.txt',{encoding:'utf8'});

readStream.on('data',(chunk)=>{
    console.log(chunk); 
})

let writeStream = fs.createWriteStream('/home/ayush10nov/Desktop/backend/15_builtin-modules/aFile.txt',);
readStream.pipe(writeStream);


writeStream.on('finish',()=>{
    console.log("writing finished");
})


readStream.on('end',()=>{
    console.log("stream ended");    
})

