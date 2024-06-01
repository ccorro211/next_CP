import styles from "./page.module.css"
import Image from "next/image";
export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.textcontainer}>
          <h1 className={styles.title}>Create Thoughts Agency</h1>
          <p className={styles.desc}>메인페이지의 텍스트콘테이너 p태그 연습중</p>
          <div className={styles.buttons}> 
            <button className={styles.button}>Lean More</button>
            <button className={styles.button}>Contact</button>
          </div>
        
          <div className={styles.brands}>
            <Image src="/brands.png" alt="" fill className={styles.brandImg} />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
        </div>
       
    </div>
  );
}
