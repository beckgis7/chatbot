const express = require("express")
let routeApi = require("./routes/api")


const app = express()

app.set("view engine", "ejs") // Set the default view engine

app.use('/', routeApi) // consume Api Endpoint

const port =  process.env.PORT || 3000
app.listen(port, () => {
    console.log("listening on on port " + port)
}) // Port listening 3000
