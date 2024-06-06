'use server'

import  {PostModel} from "../lib/dbmodel";
import connectDB from "../lib/database"

export async function getPosts(){
    try{
        await connectDB();
        const data = await PostModel.find()
        console.log(data)
        return { msg: 'sdfds' }
    }catch(error){
        return { errMsg : error.message }
    }
}

export async function ServerAction(){
    await connectDB()
    console.log("hello serveraction")
    const newPost = new PostModel({
        
    })
}

