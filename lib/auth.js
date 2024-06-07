import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import connectDB from "./database";
import { RegisterModel, UserModel } from "./dbmodel";
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

const login = async (credentials)=>{
    try {
        connectDB();
        const user = await RegisterModel.findOne({username: credentials.username})
        console.log(user)
        if(!user){
            throw new Error("error")
        }
        const a = await bcrypt.compare(credentials.password, user.password)

        if(!a){
            throw new Error("password error")
        }
        return user
    } catch (error) {
        
    }
}

export const { handlers:{GET,POST}, auth, signIn, signOut } = NextAuth({
     providers: [ 
        GitHub({
            clientId : process.env.GITHUB_ID,
            clientSecret : process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials){
                try {
                    const user = await login(credentials)
                    return user
                } catch (error) {
                    return null;
                }
            }
        })
    ],
    callbacks :{
        async signIn({user, account, profile}){
            console.log(user,account,profile)
            if(account.provider === 'github'){
                connectDB()
                try {
                    const user = await UserModel.findOne({email: profile.email})
                    
                    if(user === null){
                        
                        const newUser = new UserModel({
                            username : profile.login,
                            email : profile.email,
                            image : profile.avatar_url
                        })
                        
                        await newUser.save()
                        
                    }
                } catch (error) {
                    console.log("error2222")
                    return false
                }
                
            }
            return true
        }
    } 
})