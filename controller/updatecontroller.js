const User = require("../models/userModel")

const asyncHandler = require("express-async-handler")

const updateUser = asyncHandler(async(req,res)=>{
    User.findByIdAndUpdate({
        _id:req.params.id
    },{
        $set:req.body
    },{
        new:true
    },(err,updateData)=>{
        if(err){
            return res.status(400).json({
                err
            })
        }
        else{
            res.json({
                message:"User Updatted",
                updateData
            })
        }
    }
    )
})
module.exports = updateUser