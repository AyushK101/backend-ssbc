//provides OS-related utility method & properties

// const os = require('os');
import os from 'os';

 

console.log(os.arch());
console.log(process.arch);  
console.log(os.constants); // os specific constant : https://nodejs.org/api/os.html#os-constants  

console.log(os.cpus()); // number of cores

console.log(os.devNull); 

console.log(os.endianness());

console.log(os.machine());

console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.release());
console.log(os.type());
console.log(os.uptime()/3600);
console.log(os.userInfo());
console.log(os.version());
console.log(os.totalmem());