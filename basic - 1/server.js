// step -1 create a folder
// open that file into vs code
// run npm init -y into the terminal 
// run npm i express to use express
// create a file server.js

// to initialise a server
const express = require('express');
const app = express();

// use to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');

// specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

// starting our server at port 3000
app.listen(3000, ()=>{
    console.log("server started at port 3000...")
})
// to start the server at given terminal we need to run command 'node server.js'

app.get('/', (request, response)=>{
    response.send("kaise ho saare!!");
})

app.post('/api/cars', (request, response)=>{
    const {name, brand} = request.body;
    console.log(name)
    console.log(brand);
    response.send("car submitted successfully!!");

})

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("connection successfull")})
.catch((error)=>{console.log(error)})