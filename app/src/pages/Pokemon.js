import { useState, useEffect } from "react";
import api from "../resources/api";
import {useParams} from "react-router-dom"

function Pokemon() {

    const [lista, setLista] = useState({})
    const {name} = useParams()

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
            <h1>{lista?.name}</h1>
        </div>
        
    )
}

export default Pokemon