import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on("connected",()=>{
        console.log("connected to MongoDB")
    })
    mongoose.connection.on("error",(err)=>{
        console.log("error connecting to MongoDB",err)
    })
    await mongoose.connect(`${process.env.MONGO_DB}/Authentication`)
}

export default connectDB; 