import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import UserContext from "../contexts/User_context"
import api from "../resources/api"

function Register() {
    //Permite o uso do 'user' em todas as páginas
    const {user, setUser} = useContext(UserContext)
    const  [name, setName] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        async function registrar() {
            const data = {
                username: name, 
            }
            api.post(`/users/`, data)
            .then((resp)=>{
                console.log(resp.data)
                setUser(resp.data.username)
            })
            .catch((err) => {
                if (err.message === 'Request failed with status code 422') {
                    alert('Já existe um treinador com este nome')
                }
                else {
                    alert(err)
                }
            })
        
        }
        registrar()
    }

    return (
        <div className="register">
            <div className="register-cabeçalho">
                <h1>Registre-se</h1>
            </div>
            <div className="register-formulario">
                <form onSubmit={handleSubmit}>
                    <label>Nome do treinador:</label>
                    <br/>
                    <input className="register-input" value={name} onChange={(event)=>{setName(event.target.value)}} required></input>
                    <br/>
                    <button className="register-button">Cadastrar</button>
                </form>
            </div>
            <div className="register-link-div">
                <Link to="/Login" className="register-link">Já é um treinador?</Link>
            </div>
        </div>
    )
}

export default Register