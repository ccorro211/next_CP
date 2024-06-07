'use client'

import { loginCheck} from "../../../lib/action";
import styles from "./loginForm.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {useFormState} from "react-dom";

const LoginForm=()=>{
    const [state , formAction]= useFormState(loginCheck,undefined);
    const router = useRouter()

    // useEffect(()=>{
    //     state?.success && router.push('/login')
    // },[state?.success,router])

    return (

            <form className={styles.form} action={formAction}>
                    <input type="text" placeholder="username" name="username"/>  
                    <input type="password" placeholder="password" name="password" />
                    <button>Login</button>
                    {state?.error}
                
                    <Link href="/register">
                        {"아이디가 없으신지요..?"} <b>등록하기</b>
                    </Link>
            </form>  

           
       
    )
}

export default LoginForm