import { useState, useEffect } from "react";
import api from "../resources/api";
import {useParams, Link} from "react-router-dom";

function Pokemon() {

    const [lista, setLista] = useState([])
    const {name} = useParams()
    const [splitKind, setSplitKind] = useState([])

    var listColors = {
        bug: "#7ED578",
        electric: "#FFF34B",
        fairy: "#FF7EE5",
        fighting: "#F17373",
        fire: "#FFB433",
        flying: "#D7F1E9",
        ghost: "#E2E2E2",
        grass: "#5EFF53",
        ground: "#AA8546",
        ice: "#AEE3FB",
        normal: "#D7DBA8",
        poison: "#CE52F9",
        psychic: "#FFC157",
        rock: "#757575",
        steel: "#A1A1A1",
        water: "#7192FF",
        dragon: "#43372D",
    }

    useEffect(()=>{
        async function getPokemonData(){

            api.get(`/pokemons/${name}`)
            .then((resp)=>{
                setLista(resp.data)
            })
            .catch((err)=>{
                console.log(err)
            })

            api.get(`/pokemons/${name}`)
            .then((resp)=>{
                setSplitKind((resp.data.kind).split(";"))
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        getPokemonData()
    }, []
    )

    console.log(splitKind)

    return (
        <div color={listColors[splitKind[0]]}>
            <Link to="/">Voltar</Link>
            <h1>{lista?.name}</h1>
            <img src={lista?.image_url}/>
            <h2>Número na pokédex #{lista.number}</h2>
            <p>Peso: {(lista.weight)/10} kg</p>
            <p>Altura: {(lista.height)/10} m</p>
            <div>
                <p>{splitKind[0]}</p>
            </div>
            <div>
                <p>{splitKind[1]}</p>
            </div>

        </div>
        
    )
}

export default Pokemon