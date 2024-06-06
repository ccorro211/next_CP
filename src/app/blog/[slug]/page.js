
import axios from "axios"
import styles from "./single.module.css"
import Image from "next/image"

const getData = async (slug)=>{
    const res = await axios.get(`http://localhost:3000/api/${slug}`)
}
const SinglePage= ()=>{
    
    
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="" alt="" fill/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar} src="" alt="" width={50} height={50}/>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Date</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Publised</span>
                        <span className={styles.detailValue}>01.01</span>
                    </div>
                </div>
                <div className={styles.content}>
                    상세설명~~
                </div>
            </div>
        </div>
    )
}
export default SinglePage