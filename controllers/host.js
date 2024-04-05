import {Host} from "../models/host.js" 

export const newTask = async (req,res)=>{
  
try {
    const {location , adhar_no ,whatsappLink , category , description} = req.body ;

    await Host.create({
        location , adhar_no ,whatsappLink , user : req.user ,category, description
    })
    
    res.status(201).json({
        success : true ,
        message : "Hosted Successfully"
    })  
} catch (error) {
    next(error)
}
}

export const joinTask = async (req,res)=>{
 try {
    const task = await Host.findOne(req.params)   
   const  link = task.whatsappLink ;

    res.status(200).json({
        success : true ,
        link
    })   
 } catch (error) {
    next(error)
 }
}

export const categoryFilter = async (req,res)=>{
try {
    const user = await Host.find({category:req.body.category})

    res.status(200).json({
        success : true ,
        user
    })
  
} catch (error) {
    next(error)
}   
}

