import mongoose from "mongoose";


const connectDB = async ()=>{
    if(mongoose.connections[0].readyState){
        console.log("using existing connection")
        return true;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongo connect!");
        return true
    }catch(error){
        console.log("error")
    }
}
export default connectDB