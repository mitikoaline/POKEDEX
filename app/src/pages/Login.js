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
            api.get(`/users/${name}`)
            .then((resp) => {
                setUser(resp.data.user.username) 
            })
            .catch((err) => {
                if (err.message === 'Request failed with status code 500') {
                    alert('Não existe um treinador com este nome')
                }
                else {
                    alert(err)
                }
            })
        }
        logar()
    }


    return (
        <div className="login">
            <div className="login-cabeçalho">
                <h1>Login</h1>
            </div>
            <div className="login-formulario">
                <form onSubmit={handleSubmit}>
                    <label>Nome do treinador:</label>
                    <br/>
                    <input className="login-input" value={name} onChange={(event)=>{setName(event.target.value)}}></input>
                    <br/>
                    <button className="login-button">Entrar</button>
                </form>
            </div>
            <div className="login-link-div">
                <Link to="/Register" className="login-link">Ainda não é um treinador?</Link>
            </div>
        </div>
    )
}

export default Login