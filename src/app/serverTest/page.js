const { ServerAction } = require("../../../_actions/postAction")

const ServerTest=()=>{
    return(
        <div>
            <form action={ServerAction}>
                <button>Test me</button>
            </form>
        </div>
    )
}

export default ServerTest