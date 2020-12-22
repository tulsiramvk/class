const User = require("../models/userModel")

const addUser = ((req,res)=>{
    let user = new User({
        name:req.body.name,
        email:req.body.email,
        phn:req.body.phn,
        bio:req.body.bio,
        dob:req.body.dob,
        adult:req.body.adult
    })

    user.save((err,saved)=>{
        if(err){
            return res.status(400).json({
                message:'Failed to add data!'
            })
        }
        else{
            return res.status(200).json({
                message:'Data added !'
                
            })
        }
    })
})

module.exports = addUser