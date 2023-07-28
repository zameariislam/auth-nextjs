
import bcrypt from 'bcrypt';

import connectDB from "@/dbconfig/dbconfig";
import User from '@/models/userModel';

 connectDB()
  
export default async function handler(req, res) {
  const{email,password}=req.body

  // console.log("body",req.body)
  
   
  try{

     const user= await User.findOne({email})

     console.log("Nothing found")

   
     if(user){
      
      return res.json({
        success:false,
        status:400,
        message:'User is Already Exist',
      })

     }

    
    //  hashed password 

    const salt=await bcrypt.genSalt(10)
    const hashedPassword= await bcrypt.hash(password,salt)
    
     const newUser=  new User({
      email,
      password:hashedPassword
    })

    
    const result=  await newUser.save()
    return res.json({
      success:true,
      status:201,
      message:'User is Created Successfully',
      data:result
    })



  }
  catch(error){
    console.log("error",error)
    return res.json({
      success:false,
      status:500,
      message:error.message,
    })

  }


   
    
  }