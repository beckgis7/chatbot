const express = require("express")
let routeApi = require("./routes/api")

const app = express()

app.set("view engine", "ejs") // Set the default view engine

app.use('/', routeApi) // consume Api Endpoint

app.listen(80) // Port listening 3000
