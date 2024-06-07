

import styles from "./register.module.css"
import { register } from "../../../../lib/action"
import RegisterForm from "@/components/registerForm/RegisterForm"

const ResisterPage=()=>{
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <RegisterForm/>
            </div>
            
        </div>
    )
}

export default ResisterPage