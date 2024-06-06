import { auth} from "../../../../lib/auth"
import { handleGitLogin } from "../../../../lib/action";


const LoginPage = async () => {
    const session = await auth();
    console.log(session)
    
    return (
        <div>
            <form action={handleGitLogin}>
                <button></button>
            </form>
            
        </div>
    )
}

export default LoginPage