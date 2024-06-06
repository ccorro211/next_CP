import { NextResponse } from "next/server";
import connectDB from "../../../../lib/database";
import { PostModel } from "../../../../lib/dbmodel";

export const GET = async (req,res)=>{
    try{
        
        // await connectDB()
        // const posts = await PostModel.find()
        // console.log(posts)
        // console.log("hello")
        // return NextResponse.json(posts)
        
        await connectDB()
        const data = await PostModel.find()
        return NextResponse.json(data)
        
    }catch(err){
        console.log(err);
        throw new Error("fail");
    }
}