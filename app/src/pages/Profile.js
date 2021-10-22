import { useState, useContext, useEffect } from "react";
import UserContext from '../contexts/User_context';
import api from "../resources/api";
import Card from "../components/Card";

function Profile() {

    const {user, setUser} = useContext(UserContext)
    const [lista, setLista] = useState([])

    useEffect(()=>{
        async function getFavoriteCards(){
            api.get(`/users/${user}`)
            .then((resp)=>{
                setLista(resp.data.pokemons)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        getFavoriteCards()
    }
    )

    lista.sort(function (a, b) {
	
        return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);
     
    });

    return (
        <div>
            <h1>Profile</h1>
            <h2>Treinador {user}</h2>
            <div className="favorite-list">
                <h3>Pokémons favoritados</h3>
                {lista.map((element)=>
                    <Card key={element.id} name={element.name} image={element.image_url} number={element.number} kind={element.kind} pokedex={false}/>
                )}
            </div>
        </div>
        
    )
}

export default Profile