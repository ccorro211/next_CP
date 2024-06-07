"use server"
import { signIn,signOut } from "./auth"
import connectDB from "./database"
import bcrypt from 'bcrypt';
import { RegisterModel, UserModel } from "./dbmodel";

export const handleGitLogin= async()=>{
   
    await signIn("github")
}

export const handleGitLogout = async()=>{
    
    await signOut("github")
}

export const register = async(previousState, formData)=>{
    const {username,email,password,passwordRepeat} = Object.fromEntries(formData)
    if(password !== passwordRepeat){
        return {error:"password do not match"}
    }
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    console.log(hashPassword)
    try {
        connectDB()
        const user = await RegisterModel.findOne({username:username})
        if(user){
            return {error:"user already exist"}
        }
        const newUser = new RegisterModel({
            username:username,
            email:email,
            password:hashPassword,
        })
        console.log(newUser)
        await newUser.save()
        console.log("save to db")
        return {success : true}
    } catch (error) {
        return {error:"error to add user"}
    }
}
export const loginCheck = async(previousState,formData)=>{
    const {username,password} = Object.fromEntries(formData)
    try{
        await signIn("credentials",{username,password})
    } catch (error) {
        return {error:"아이디 비밀번호 오류입니다"}
    }
}