const User = require("../models/userModel")

const asyncHandler = require("express-async-handler")

const deleteUser = asyncHandler(async(req,res)=>{
    User.deleteOne({
        _id:req.params.id
    },(err,deleteData)=>{
        if(err){
            return res.status(400).json({
                err
            })
        }
        else{
            res.json({
                message:"User Deleted",
                deleteData
            })
        }
    }

    )

})

module.exports = deleteUser