const express = require("express")
const mongoose = require("mongoose")
const app = express()

const exampleRoute = require("./routes/exampleRouters.js")
const userRoute = require("./routes/userRoutes")

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.use('/user',userRoute)
app.use('/',exampleRoute)

const uri = "mongodb+srv://1234:1234@cluster0.gezcx.mongodb.net/bclass?retryWrites=true&w=majority"
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useCreateIndex:true
}).then(()=>{console.log('mongodb connected')})
  .catch(err =>console.log(err))

const PORT=5000
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})