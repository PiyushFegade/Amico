import {User} from "../models/user.js";
import bcrypt from "bcrypt"
import { sendcookie } from "../utils/features.js";




export const login = async(req,res)=>{

   try {
    const {email,password} = req.body;

    const user = await User.findOne({email}).select("+password");

    if(!user) return res.status(404).json({
      success : false ,
      message : "Invalaid Email or Password",
    });
   
    const isMatch = await bcrypt.compare(password,user.password);

   if(!isMatch) return res.status(404).json({
       success : false ,
       messsage : "Invalaid Email or Password",
   })

   sendcookie(user,res,`Welcome Back , ${user.name}`,200);
   } catch (error) {
      next(error)
   }
};


export const register = async(req,res)=>{
    try {
        const {name,age,email,number,password} = req.body;

    let user = await User.findOne({email});

    if(user) return res.status(404).json({
        success: false ,
        message: "User Already Exist",
    });
    
    
    const hashPassword = await bcrypt.hash(password,10);

    user = await User.create({name,age,email,number,password:hashPassword})

    sendcookie(user,res,"Registered Successfully",200);
    } catch (error) {
        next(error)
    }
};

export const getMyProfile = async(req,res)=>{
 try {
   
    res.status(200).json({
        success : true,
        user : req.user,
 
   }); 
 } catch (error) {
    next(error)
 }
}


export const logout = async(req,res)=>{
try {
    res.status(200).cookie("token","",{expires:new Date(Date.now())}).json({
        success : true ,
        message : "Logout successfully"
    })
 
} catch (error) {
    next(error)
}
}
