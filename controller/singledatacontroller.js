const User = require("../models/userModel")

const asyncHandler = require("express-async-handler")

const viewSingleUser =  asyncHandler(async(req,res)=>{
    const userData = await User.findById(req.params.id)

    if(userData){
        res.status(200).json(userData)
    }
    else{
        res.status(400).json({
            message:"Unable to get requested data"
        })
    }
})

module.exports = viewSingleUser