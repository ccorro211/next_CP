
import { handleGitLogin } from "../../../../lib/action";
import LoginForm from "@/components/loginForm/loginForm";
import styles from "./login.module.css"


const LoginPage =  () => {
    
    
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form action={handleGitLogin}>
                    <button className={styles.github}>authLogin</button>
                </form>
                <LoginForm/>
            </div>
        </div>
    )
}

export default LoginPage