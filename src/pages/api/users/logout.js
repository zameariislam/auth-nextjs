
import connectDB from "@/dbconfig/dbconfig";
import { serialize } from 'cookie'

connectDB();

export default async function handler(req, res) {
  

  try {
    res.setHeader(
        "Set-Cookie",
        serialize("my-cookie",  " ", {
            expires: new Date(0),
          httpOnly: true, 
         
        })
      );
    res.json({
        success: true,
        status: 201,
        message: "LogOut Successfully",
      });
  

  } catch (error) {
    return res.json({
      success: false,
      status: 500,
      message: error.message,
    });
  }
}
