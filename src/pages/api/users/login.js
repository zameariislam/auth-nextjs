import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import connectDB from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import { serialize } from "cookie";

connectDB();

export default async function handler(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        status: 400,
        message: "User does not Exist",
      });
    }
    //  To check a password
    const isValid = await bcrypt.compare(password, user?.password);

    if (!isValid) {
      return res.json({
        success: false,
        status: 400,
        message: "Invalid Password",
      });
    }

    const tokenData = {
      id: user._id,
      email: user.email,
    };
    const createToken = jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    res.setHeader(
      "Set-Cookie",
      serialize("my-cookie", createToken, {
        expires: new Date(Date.now() + 86400000),
        httpOnly: true, // The cookie is not accessible via JavaScript
        secure: true,
      })
    );
    res.json({
      success: true,
      status: 201,
      message: "Login Successfully",
      data:user
    });
  } catch (error) {
    return res.json({
      success: false,
      status: 500,
      message: error.message,
    });
  }
}
