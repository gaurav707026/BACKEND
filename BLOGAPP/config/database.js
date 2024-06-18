const mongoose = require("mongoose");

require('dotenv').config();
const connectDB = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("DB connected successfully!!"))
    .catch((error)=>{
        console.log("DB facing connection Issues!!")
        console.log(error)
        process.exit(1);
    });
};

module.exports = connectDB;