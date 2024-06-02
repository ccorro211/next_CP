import { Schema, model , models } from "mongoose"; 
import mongoose from "mongoose";

const postSchema = new Schema({
    msg:{
        type: String,
        required : true
    }
}, {timestamps: true})

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required:true,
        max:30
    },
    password:{
        type: String,
        required:true,
        min:6
    },
    isAdmin:{
        type: Boolean,
        default:false,
    }
},{timestamps : true})

export const PostModel = mongoose.models.Post3 || mongoose.model('Post3', postSchema)
export const UserModel = mongoose.models.User3 || mongoose.model('User3', userSchema)
