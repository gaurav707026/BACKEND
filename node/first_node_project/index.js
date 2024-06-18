// using http module (inbuilt given by the node) we can setup a basic server
const http = require('http');
const PORT = 3000;

/*
Http module contain a fnction called createServer
this createServer function takes a callback as the input

now inside the callback, we get two arguments
-request -> this argument contain all the details about the incoming request
-respond -> this argument contain functions using which we can prepare the response

the createServer function returns us the server object
 */

const server  = http.createServer(function exec(request, response){
    // response.end("hello world");
    // console.log(request.url);
    if(request.url === '/home'){
        response.end("welcome to home");
    }
    else if(request.url === '/faq'){
        response.end("list of FAQs");
    }
    else{
        response.end("hello");
    }
});

server.listen(PORT, function process(){
    // once the server has started then this callback will be executed
    console.log("server started on ", PORT);
});



