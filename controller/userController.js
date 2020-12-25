const User = require("../models/userModel")

const addUser = (req,res)=>{
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

module.exports = addUser