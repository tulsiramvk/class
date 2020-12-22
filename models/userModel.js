const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:50,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
    },
    phn:{
        type:Number,
        unique:true
    },
    dob:{
        type:Date
    },
    bio:{
        type:String
    },
    Adult:{
        type:Boolean
    }

})

const User = mongoose.model('User',userSchema)

module.exports = {User}