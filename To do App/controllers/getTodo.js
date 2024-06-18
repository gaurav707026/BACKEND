const express = require("express");
// import ToDo model
const ToDo = require("../models/ToDo");

// define route handler
exports.getTodo = async (req, res) => {
    try{
        // fetch all todo item from database
        const todos = await ToDo.find({});
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:"all the data has been fatched",
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json(
            {
                success:false,
                error:err.message,
                message: "internal server error",
            }
        )

    }
}