import {useEffect, useState} from "react"
import Card from "../components/Card"
import api from "../resources/api"

function Pokedex() {
    // atributos que serao utilizados: name, image_url, number, kind

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

    return(
        <div className="Pokedex">
            <div className="Pokedex-top">
                <p>Pokedex</p>
                <p>Olá, ...</p>
                <p>Sair</p>
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