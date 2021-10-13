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