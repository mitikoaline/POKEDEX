import { useState, useEffect } from "react";
import api from "../resources/api";

function Pokemon({name}) {

    const [lista, setLista] = useState({})

    useEffect(()=>{
        async function getPokemonData(){

            api.get(`/pokemons/${name}`)
            .then((resp)=>{
                setLista(resp.data)
                console.log(resp.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        getPokemonData()
    }, []
    )

    return (
        <div>
            <h1>{lista.name}</h1>
        </div>
        
    )
}

export default Pokemon