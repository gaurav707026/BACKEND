const express = require("express");
// import ToDo model
const ToDo = require("../models/ToDo");

// define route handler
exports.createTodo = async (req, res) => {
    try{
        // extract title and description from request body
        const {title, description} = req.body;

        // creata a new todo object and insert it into the todo database
        const response = await ToDo.create({title, description});

        // send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry created successfully!",
            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json(
            {
                success:false,
                data:"internal server error!!",
                message: err.message
            }
        )

    }
}