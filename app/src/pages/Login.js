import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import UserContext from "../contexts/User_context"

function Login() {
    //Permite o uso do 'user' em todas as páginas
    const {user, setUser} = useContext(UserContext)
    const  [name, setName] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        //Não é feito o setUser direto no onChage, para ele mudar de página só depois de clicar no botão
        setUser(name)
    }


    return (
        <div className="login">
            <div>
            <h1>Login</h1>
            </div>
            <div>
            <form onSubmit={handleSubmit}>
                <label>Nome do treinador:</label>
                <br/>
                <input value={name} onChange={(event)=>{setName(event.target.value)}}></input>
                <br/>
                <button></button>
            </form>
            </div>
            <div>
            <Link to="/Register">Ainda não é um treinador?</Link>
            </div>
        </div>
    )
}

export default Login