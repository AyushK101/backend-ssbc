// provides information about, and control over, the current Node.js process.
// instance of eventEmitter , i.e, can emit event , and can listen to them.
//! has in-built events like `disconnect` , `exit`.

//! signal events : `SIGINT` => ctrl+C

//? process.arch : os's architecture
console.log(process.arch);


//? process.argv : returns an array containing command line arguments.
// 1st element : executable path that started the node.js process.
// 2nd element : path of js file to being executed.
console.log(process.argv[1]);


//? current working directory
console.log(process.cwd()); 

// return object of user's environment
console.log(process.env);

// process.exit() : tells node.js to exit current node.js process

console.log(process.permission);

//!

// process.stderr : returns a stream connected to stderr

// process.stdin :  returns a stream connected to stdin

// process.stdout : returns a stream connected to stdout
