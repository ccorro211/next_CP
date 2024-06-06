"use server"
import { signIn,signOut } from "./auth"
export const handleGitLogin= async()=>{
   
    await signIn("github")
}

export const handleGitLogout = async()=>{
    
    await signOut("github")
}