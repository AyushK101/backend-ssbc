// Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.
// objects fire events like stream fire `data` when one packet is transferred , `end` signals no more packet is to be send.

//! Pre defined objects/entities can emit pre-defined events {by developers} like stream has `data`,`end` etc on particular moment/state/event.

//! events in Node.js often carry data or information that is passed along with the event itself. This additional data can be accessed by event listeners when they are triggered. 

// https://chat.openai.com/share/0ebc1f76-e526-4e9d-8365-dad25b0f0d13

// ex: { fs-> open , close} , { http clientRequest -> response } , { eventEmitter -> newListener , removeListener} , 
// { process -> exit , unCaughtExpression } etc
//! some events don't need listeners , they have pre-defined listeners like `exit` of process , when emitter , listened by some internal thing automatically.

// They use eventEmitter class internally to do this.


//! Reacting to events in Node.js involves attaching event listeners to specific objects or instances.
//ex: <emitter>.on('event', <callback>) , <emitter>.addListener('event' , <callback>) , .once() , prependListener() etc 


// THIS IS NODE'S EVENT DRIVEN ARCHITECTURE  
// SEE IMAGE 


// gist : know about predefined events which different modules emit in node , what data they bring.



import EventEmitter from "events";  

// `on.()` method is used to register listeners on named events.
// syntax: on(namedEvent,callback)

//`emit.()` method is used to trigger the event.
 

//creating class
class myEmitter extends EventEmitter{};

//creating object
const emitter = new myEmitter();

// register eventListener 
emitter.once('hello',()=>{
    console.log("hi , how are you?");
})

emitter.addListener('hi',()=>{
    console.log("hmmm");
    
})


//trigger event
emitter.emit('hi');
emitter.emit('hello');
emitter.emit('hello');


