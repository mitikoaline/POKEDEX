import { useContext, useState } from "react"
import UserContext from "../contexts/User_context"

function Login() {

    const {user, setUser} = useContext(UserContext)
    const  [name, setName] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        //Não é feito o setUser direto no onChage, para ele mudar de página só depois de clicar no botão
        setUser(name)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Nome do treinador:</label>
                <br/>
                <input value={name} onChange={(event)=>{setName(event.target.value)}}></input>
                <br/>
                <button></button>
            </form>
        </div>
    )
}

export default Login