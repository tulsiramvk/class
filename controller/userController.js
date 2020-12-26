const User = require("../models/userModel")

import asyncHandler from "express-async-handler"

exports.addUser = (req,res)=>{
    const data = new User({

        name:req.body.name,
        email:req.body.email,
        phn:req.body.phn,
        bio:req.body.bio,
        dob:req.body.dob,
        adult:req.body.adult
        
    })


    data.save((err,todo)=>{
        if(err){
            return res.status(400).json({
                message:"Failed to add data!",
                err
            })
        }
        else{
            return res.status(200).json({
                message:"Data added !",
                todo
                
            })
        }
    })
}

exports.viewData = async(req,res)=>{
    const {page =1,limit=10} = req.query

    try{
        const details = await User.find()
        .limit(limit*1)
        .skip((page-1)*limit)
        .exec()
        const count = await User.countDocuments()
        res.status(200).json({
            details,
            totalPages:Math.ceil(count/limit),
            currentPage:page
        })
    }
    catch(err){
        res.status(400).json({
            message:"unable to fetch data!",
        })
    }
}

exports.updateUser = asyncHandler(async(req,res)=>{
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

exports.deleteUser = asyncHandler(async(req,res)=>{
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

exports.viewSingleUser =  asyncHandler(async(req,res)=>{
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




