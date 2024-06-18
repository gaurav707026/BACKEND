const express = require("express");
// import ToDo model
const ToDo = require("../models/ToDo");

// define route handler
exports.updateTodo = async (req, res) => {
    try{
        // fetch all todo item from database
        // const {id} = req.params;
        const id = req.params.id;
        const {title, description} = req.body;
        const todo = await ToDo.findByIdAndUpdate(
            {_id : id},
            {title, description, updatedAt: Date.now()});
        const updatedTodo = await ToDo.findById({_id:id});
        // data for given id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found with given id!!",
            })
        }
        else{
            return res.status(200).json(
                {
                    success:true,
                    data:updatedTodo,
                    message:`data for the given ID: ${id} has been updated successfully`,
                }
            );
        }
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