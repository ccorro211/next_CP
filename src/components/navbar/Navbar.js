
import styles from "./navbar.module.css"
import Links from './links/Links';


export default function Navbar(){
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <div>
                <Links />
            </div>
        </div>
    )
}