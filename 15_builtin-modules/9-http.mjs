// It deals with stream handling and message parsing only. It parses a message into headers and body but it does not parse the actual headers or the body.

import { error } from 'console';
import http from 'http';


// createSever method is used to create a http server in node.js that 
//! listens/handles incoming client requests . 

//!clientRequest represents outgoing http request made by client to server.

//! REMEMBER: server => something handles client request(s)


// creating a http server instance which we will make to listen on a specific port.
const server = http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method);
    console.log("headers" , req.headers);
    
   // request also emit 
    req.addListener('end',()=>{
        console.log("thx for coming");
    })

    res.write('this is this ');
    res.write('kad;lsfksjd',(err)=>{
        
    })
    res.end();

  
})



server.listen(3002,()=>{
    console.log("hi on 3002");  
})




//! search for http request and response methods on cgpt

