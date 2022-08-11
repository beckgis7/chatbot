require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConnect");
let routeApi = require("./routes/api");

// Connect to MongoDB Api
connectDB();

// Start App
const app = express()

//App Body Configuration
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Configure Ejs to View Folder 
app.set("view engine", "ejs") // Set the default view engine

//Api Endpoint
app.use('/', routeApi) // consume Api Endpoint

const port = process.env.PORT || 3000 // default port
mongoose.connection.once("open", () => {
    app.listen(port, () => {
        console.log("")
        console.log("")
        console.log("///////////////////////////////////////")
        console.log("//       Connected to MongoDB        //")
        console.log(`//    listening on on port: ${port}     //`)
        console.log("///////////////////////////////////////")
    }) // Port listening 3000
})

 