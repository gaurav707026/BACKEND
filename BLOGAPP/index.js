const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());


const blog = require("./routes/blog")
// mounting
app.use("/api/v1", blog);

const connectDB = require('./config/database');
connectDB();


app.listen(PORT, ()=>{
    console.log(`Server started at port no. ${PORT}`);
})

app.get("/", (req, res) => {
    res.send("<h2>ha ji kya hal chal!!</h2>")
})