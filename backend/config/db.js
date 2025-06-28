import mongoose from "mongoose";

const connectdb=async()=>{
   try {
    const conn=await mongoose.connect(process.env.MONGO_URL)
    console.log("connected to mongodb");
   } catch (error) {
    console.log(`error in mongodb ${error}`);
   }
}
export default connectdb;