# Express
// mount => attaching or associating   

// parsing =>  parsing often refers to extracting meaningful information   
 

```
//app -> JS function : designed to pass to node's http server as a callback to handle requests. 
```

// its' like when request come its content is populated into like : req {
    header : "dsf",
    body : "sdafa",
    parameters : "sdf",
    query params  : "sd",

    //methods 
}

//body-parser : Data sent in the body of a request, commonly in POST or PUT requests, can be accessed using middleware like body-parser. It parses the request body and makes it available in req.body.  

-> app object/function has methods for  
1. routing http requests  { give direction }
2. Routing HTTP requests ,ex: app.METHOD and app.param.
3. Configuring middleware; see app.route.
4. Rendering HTML views; see app.render.
5. Registering a template engine; see app.engine.

# app object/function : request handler 

1. `app.all()` : capture all http methods for a specified route.  
routes are : get , post , put , patch , delete , options , 
ex: `app.get() -> routes HTTP GET requests to specified path , with specific callback fun.`


3. `app.set()` : used to config application settings. | can we accessed through app.get()
4. `app.disable()` : like app.set(<setting>, false);  
OTHER ALIKE app.disabled() , app.enable() , app.enabled()


5. 1. `app.listen(path,callback)` : listen for connections on specified path on same machine using UNIX socket.
5. 2. `app.listen(PORT , callback)` :  bind and listen for connections from specified PORT or HOST .
> the request and response object is created by underlying framework. 
>Request object    
>Response object is used to `construct` and send `send` http response back to client.


6. `app.param()` : add callback trigger to route parameters.



9. `app.route()` : way to group multiple route handlers to a single route

10. `app.use()` : mount middleware(s)  with specified path. { order is important}
>  `error handling middleware`  




7. `app.path()` : returns path of `app`{express's app}.
8. `app.render()` : return rendered HTML of a view.

# request object : 
represent http request. contain information about client request and properties & methods for request's body , headers , params , query etc.

1. `properties` : req.body , baseUrl{of router} , cookies , fresh , host , hostname  , ip , ips , method , origin , params , path , protocol , query , res , route , secure etc.

# response object : 
represents the HTTP response that an Express app sends when it gets an HTTP request.

methods : append , end , json , render , send , set , status 

# router : 
Top level express object has a router() method. Behave like a middleware. 
can add middleware , http method routes to it just like an application.


methods : router.all() , .METHOD , .param , route , use 