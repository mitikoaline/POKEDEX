import { useContext } from "react"
import UserContext from "../contexts/User_context"

function Login() {

    const {user, setUser} = useContext(UserContext)

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Nome do treinador:</label>
                <br/>
                <input value={user} onChange={(event)=>{setUser(event.target.value)}}></input>
                <br/>
                <button></button>
            </form>
        </div>
    )
}

export default Login