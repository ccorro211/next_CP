'use client'
import { usePathname, useSearchParams } from "next/navigation"
import styles from "./contact.module.css"
import Image from "next/image"
const ContactPage = ()=>{
    const a = Math.random()
    console.log(a)
    let pathname = usePathname()
    let search = useSearchParams()
    const q= search.get("q")
    console.log(pathname)
    console.log(q)
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png" alt="" fill/>
            </div>
            
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Name and Surname" />
                    <input type="text" placeholder="Email Adress" />
                    <input type="text" placeholder="Phone Number" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage