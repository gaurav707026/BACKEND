const express = require("express");
const router = express.Router();

// import controller
const {createToDo} = require('../controllers/createTodo');

// define api routes
router.post("/createTodo", createToDo);

module.exports = router;