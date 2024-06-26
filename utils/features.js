import jwt from "jsonwebtoken";

export const sendcookie = (user,res,message,statuscode)=>{
    const token = jwt.sign({_id: user._id},process.env.JWT_SECRET)
    
    res.status(statuscode).cookie("token",token,{
        httpOnly:true,
        maxAge: 10*60*1000
    }).json({
        success:true,
        message
    })
}
