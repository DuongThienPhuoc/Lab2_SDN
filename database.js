import mongoose from "mongoose";
const connectDB =()=>{
    try{
        const connection = mongoose.connect(process.env.DATABASE_CONNECTION)
        console.log("Connect to MongoDB success");
        return connection;
    }catch (e) {
        throw new Error(e.toString())
    }
}
export default connectDB