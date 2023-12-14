// allow DNS lookup and name resolution

const dns = require('node:dns');

dns.lookup('localhost.com', (err, address, family) => {
  console.log(`address:  ${address} , family: ${family}`);
});

// ip's associated with host
dns.resolve('www.google.com',(err,records)=>{
    console.log(`records of ip : ${records}`);
})

