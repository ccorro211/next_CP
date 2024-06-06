


export const GET = async (req,{params})=>{
    try{
        const {slug} = params
        // await connectDB()
        // const posts = await PostModel.find()
        // console.log(posts)
        // console.log("hello")
        // return NextResponse.json(posts)
        
        await connectDB()
        const data = await PostModel.findOne({slug})
        return NextResponse.json(data)
        
    }catch(err){
        console.log(err);
        throw new Error("fail to getpost");
    }
}