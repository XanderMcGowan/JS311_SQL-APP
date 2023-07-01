let express = require("express")


let app = express()

require("dotenv").config()

app.use(express.json())
app.use(express.static("./public"))

let routes = require("./src/routes")

app.use(routes)

let PORT = process.env.PORT || 9005

app.listen(PORT, function(){
    console.log("TODO app start on port", PORT)
})