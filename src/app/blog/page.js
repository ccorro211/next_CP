import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css"
import axios from "axios";
import connectDB from "../../../lib/database";
import { PostModel } from "../../../lib/dbmodel";



const BlogPage= async()=>{
    
    await connectDB()
    const data = await PostModel.find()
    console.log(data)
    console.log("sex")
    // axios.get("http://localhost:3000/api/blog").then((response) => {
    //     console.log(response.data)
    // })
    const res = await axios.get("http://localhost:3000/api/blog")
    console.log(res.data)
    console.log("final2")
    return (
        <div className={styles.container}>
            <div className={styles.post}><PostCard /></div>
            <div className={styles.post}><PostCard /></div>
            <div className={styles.post}><PostCard /></div>
            <div className={styles.post}><PostCard /></div>
        </div>
    )
}
export default BlogPage;