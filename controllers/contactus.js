import {contactus} from "../models/contactus.js"

export const saveIssue = async(req,res)=>{

   try {
    const {issue} = req.body;

    await contactus.create({
        issue
    })
    
    res.status(201).json({
        success : true ,
        message : "We will contact you as soon as Possible"
    })   
   } catch (error) {
    next(error)
   }
}
