import { Schema,model,models } from "mongoose"; 
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    msg:{
        type: String,
        required : true
    }
}, {timestamps: true})

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required:true,
        max:30
    },
    image:{
        type: String
    },
    isAdmin:{
        type: Boolean,
        default:false,
    }
},{timestamps : true})

export const PostModel = mongoose.models.Post || mongoose.model('Post', postSchema)
export const UserModel = mongoose.models.User || mongoose.model('User', userSchema)



// export const UserModel = mongoose.models.User3 || mongoose.model('User3', userSchema)