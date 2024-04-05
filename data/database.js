import mongoose from "mongoose"

export const connectDB = ()=>{
    mongoose
    .connect("mongodb://localhost:27017",{
        dbName: "Amico"
    })
    .then(()=>{console.log("Database connected")})
    .catch((e)=>{console.log(e)})
}

