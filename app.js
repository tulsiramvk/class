const express = require("express")

const app = express()

const exampleRoute = require("./routes/exampleRouters.js")

app.use('/',exampleRoute)


const PORT=5000
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})