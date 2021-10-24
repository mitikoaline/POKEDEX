import { useState, useEffect } from "react";
import api from "../resources/api";
import {useParams, Link} from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
    height: 100vh;
    margin: 0;
    padding: 0;
    background: ${(props) => props.color1};

    .details-pokemon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .tipo-1, .tipo-2 {
        font-family: 'Acme', sans-serif;
        width: 100px;
        padding-top: 10px;
        padding-bottom: 10px;
        border: 2px solid black;
        text-align: center;
        border-radius: 10px;
        font-size: 1.2em;
        margin-top: 5px;
    }

    .tipo-1{
        background: ${(props) => props.color1};
    }
    .tipo-2{
        background: ${(props) => props.color2};
    }

    .tipo-n{
        font-family: 'Acme', sans-serif;
        background: ${(props) => props.color1};
        margin-top: 10px;
        margin-left: 10px;
        // border-radius: 20px;
        width: 100px;
        padding-top: 10px;
        padding-bottom: 10px;
        // border: none;
        border: 2px solid black;
        text-align: center;
        border-radius: 10px;
        font-size: 1.2em;
        position:relative;
        left: 47%;
    }

    .voltar-button1 {
        text-decoration: none;
        color: black;
        font-size: 1.5em;
        padding-top: 1em;
    }
    
    .voltar-button1:hover {
        color: white;
    }
    
    .voltar-button1:active {
        opacity: 0.6;
    }

`

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

    if(splitKind[1]){
        return (
            <Div color1={listColors[splitKind[0]]} color2={listColors[splitKind[1]]}>
                <Link to="/" className="voltar-button1">Voltar</Link>
                <div className="details-pokemon">
                    <div className="nome-pokemon">
                        <h1>{lista?.name}</h1>
                    </div>
                    <div className="img-pokemon">
                        <img src={lista?.image_url}/>
                    </div>
                    <div className="numero-pokedex">
                        <h2>Número na pokédex #{lista.number}</h2>
                    </div>
                    <div className="lista-caracteristicas">
                        <ul className="lista-caract">
                            <li>Peso: {(lista.weight)/10} kg</li>
                            <li>Altura: {(lista.height)/10} m</li>
                        </ul>
                    </div>
                    <div>
                        <div className="tipo-1">
                            <p>{splitKind[0]}</p>
                        </div>
                        <div className="tipo-2">
                            <p>{splitKind[1]}</p>
                        </div>
                    </div>
                </div>
            </Div>
            
        )
    }else{
        return (
            <Div color1={listColors[splitKind[0]]} color2={listColors[splitKind[1]]}>
                <Link to="/" className="voltar-button1">Voltar</Link>
                <div className="nome-pokemon">
                    <h1>{lista?.name}</h1>
                </div>
                <div className="img-pokemon">
                    <img src={lista?.image_url}/>
                </div>
                <div className="numero-pokedex">
                    <h2>Número na pokédex #{lista.number}</h2>
                </div>
                <div className="lista-caracteristicas">
                    <ul className="lista-caract">
                        <li>Peso: {(lista.weight)/10} kg</li>
                        <li>Altura: {(lista.height)/10} m</li>
                    </ul>
                </div>
                <div>
                    <div className="flex-box tipo-n">
                        <p>{splitKind[0]}</p>
                    </div>
                </div>
    
            </Div>
            
        )
    }
    
}

export default Pokemon