import mongoose from 'mongoose';
const { Schema } = mongoose;


const userSchema=new Schema({
    
    email:{
        type:String,
        required:[true,"Please provide an email"],
        unique:true
    },
    password:{
        type:String,
        required:[true," Please provide Your password"]
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenTokenExpiry:Date,



})


const User = mongoose.model('User', userSchema);

export default User