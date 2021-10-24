import { useState, useContext, useEffect } from "react";
import UserContext from '../contexts/User_context';
import api from "../resources/api";
import Card from "../components/Card";
import {Link} from "react-router-dom";

function Profile() {

    const {user, setUser} = useContext(UserContext)
    const [lista, setLista] = useState([])
    const [id, setId] = useState(0)

    useEffect(()=>{
        async function getFavoriteCards(){
            api.get(`/users/${user}`)
            .then((resp)=>{
                setLista(resp.data.pokemons)
            })
            .catch((err)=>{
                console.log(err)
            })

            api.get(`/users/${user}`)
            .then((resp)=>{
                setId(resp.data.user.id)
            })
            .catch((err)=>{
                console.log(err)
            })

        }
        getFavoriteCards()
    },[]
    )

    lista.sort(function (a, b) {
	
        return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);
     
    });

    return (
        <div className="profile">
            <Link to="/" className="voltar-button">Voltar</Link>
            <div className="profile-titulo">
                <h1>Perfil</h1>
            </div>
            <div className="profile-cabecalho">
                <h2>Treinador {user} (id = {id})</h2>
                <h3>Pokémons favoritados</h3>
            </div>
            <div className="Pokedex-list">
                {lista.map((element)=>
                    <Card key={element.id} name={element.name} image={element.image_url} number={element.number} kind={element.kind} pokedex={false}/>
                )}
            </div>
        </div>
        
    )
}

export default Profile