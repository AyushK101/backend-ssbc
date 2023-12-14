/**  
*  The key difference between a library and a framework is "Inversion of Control". 
* When calling a method from a library, the developer is in control. 
*  With a framework, the control is inverted: the framework calls the developer's code.
*
 *   1. process:The process object provides information about, and control over, the current Node.js process.
 */
//node.js globals are :

//* globals : these are objects which are predefined/ implemented by js,access everywhere in the JS code.
/**
 * __dirname : not always accessible
 * __filename
 * require : function to use modules(common JS)
 * module : info-control about current module(file)
 * process : 
 * 
 * 
 */


//! in node's env , node's global = browser's window


//*1. `process GLOBAL`:  The process object provides information and control over the current Node.js process. You can access environment variables, command line arguments, and interact with the process itself through properties and methods of this object.

console.log(process);
var process = 3; //can change like a normal object

 __dirname = "this is new dir";
console.log(__dirname);

//! first js is going to execute the file and then get exported

/** MODULE PATTERN:-
 * 
 * nodejs introduced a new pattern of programming/of structuring your code called MODULES.
 * *a module is nothing more than a js file that exports its code. 
 * 
 * There are two types of modules in js:-
 * *1. commonJS modules (cjs) ( module.exports or exports & require ) : by default all files are modules.
 * *2. ECMAScript Module (ESM) (export and import)
 * NOTE:- by default cjs is enabled.
 * 
 */

/** TO ENABLE ES MODULES : two ways-
 * * 1. set `.mjs` extensions on the files of export and import to make them ES/JS modules.
 * { .mjs tells node environment that this file is compatible for ES module-ling}
 *  
 * *2. PACKAGE METHOD
 * NOTE: package => it is a folder which contains `package.json` file.
 * prepare a package.json with `{ "type" : "module"}
 * 
 */

//* 3. module GLOBAL:-
// It is a object , which has a lot of properties.
// console.log(module);
// module global has a property called exports which is a JS object , which can be used to
// export code from that module to other module.

//* 4. require GLOBAL: helps you to consume some module 
 
