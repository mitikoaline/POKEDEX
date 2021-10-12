import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import UserContext from "../contexts/User_context"

function Register() {
    //Permite o uso do 'user' em todas as páginas
    const {user, setUser} = useContext(UserContext)
    const  [name, setName] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        //Não é feito o setUser direto no onChage, para ele mudar de página só depois de clicar no botão
        setUser(name)
    }

    return (
        <div>
            <h1>Registre-se</h1>
            <form onSubmit={handleSubmit}>
                <label>Nome do treinador:</label>
                <br/>
                <input value={name} onChange={(event)=>{setName(event.target.value)}}></input>
                <br/>
                <button>Concluído</button>
            </form>
            <br/>
            <Link to="/Login">Já é um treinador?</Link>
        </div>
    )
}

export default Register