const express = require("express");

const app = express();

// load config from env file to import PORT
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to pares json request body
app.use(express.json());

// import routes for todo api
const todoRoutes = require("./Routes/todos");

// mount the todo api routes fro version control
app.use("./api/v1", todoRoutes);

// start server
app.listen(PORT, ()=>{
    console.log(`server started successfully at ${PORT}`)
})

// connect to te data base
const dbconnect = require("./config/database");
dbconnect();

// default Route
app.get("/", (req, res) =>{
    res.send(`<h1>this is homepage baby</h1>`)
})