import {useContext, useEffect, useState} from "react"
import { Link } from "react-router-dom"
import Card from "../components/Card"
import UserContext from "../contexts/User_context"
import api from "../resources/api"

function Pokedex() {
    // atributos que serao utilizados: name, image_url, number, kind

    const {user, setUser} = useContext(UserContext)

    const [lista, setLista] = useState([])
    
    useEffect(()=>{
        async function getCards(){
            api.get("/pokemons?page=1")
            .then((resp)=>{
                setLista(resp.data.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        getCards()
    }, []
    )

    function logOut() {
        setUser(null)
    }

    return(
        <div className="Pokedex">
            <div className="Pokedex-top">
                <Link to="/Profile">Perfil</Link>
                <p>Olá {user}</p>
                <button onClick={logOut}>Sair</button>
            </div>
            <hr className="Pokedex-line"/>
            <input type="text"/>
            <button>Pesquisar</button>
            <div className="Pokedex-list">
            {lista.map((element)=>
                <Card key={element.id} name={element.name} image={element.image_url} number={element.number} kind={element.kind}/>
            )}
            </div>
        </div>
    );
}

export default Pokedex