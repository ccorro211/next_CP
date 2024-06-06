import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import connectDB from "./database";
import { UserModel } from "./dbmodel";

export const { handlers:{GET,POST}, auth, signIn, signOut } = NextAuth({
     providers: [ 
        GitHub({
            clientId : process.env.GITHUB_ID,
            clientSecret : process.env.GITHUB_SECRET,
        }), 
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
                        console.log("맞냐시발련아")
                        console.log(newUser)
                        
                        await newUser.save()
                        console.log('드디어?')
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