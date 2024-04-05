import mongoose from "mongoose";

const schema = new mongoose.Schema({

     location : {
        type : String,
        required : true     
    },
     adhar_no :{
        type : String,
        required : true,
        unique : true
     },
      
     whatsappLink : {
      type : String ,
      required : true
     },

     user : {
       type : mongoose.Schema.Types.ObjectId,
       ref : "User",
       required  : true ,
     },

   category : {
     type : String ,
     required : true,
   },
   
     description : {
        type: String ,
        required : true
     }
})

export const Host = mongoose.model("Host" , schema )

