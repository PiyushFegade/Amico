import mongoose from "mongoose"

const schema = new mongoose.Schema({
    issue : {
        type : String ,
        required : true
    },
  
})

export const contactus = mongoose.model("contactus" , schema )