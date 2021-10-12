import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import UserContext from "../contexts/User_context"
import api from "../resources/api"

function Login() {
    //Permite o uso do 'user' em todas as páginas
    const {user, setUser} = useContext(UserContext)
    const  [name, setName] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        async function logar() {
            api.get(`/users/?username=${name}`)
            .then((resp) => {
                setUser(resp.data)
            })
            .catch((err) => {
                alert(err)
            })
        }
        logar()
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
                <button>Entrar</button>
            </form>
            </div>
            <div>
            <Link to="/Register">Ainda não é um treinador?</Link>
            </div>
        </div>
    )
}

export default Login