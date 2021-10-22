import {useContext, useEffect, useState} from "react"
import { Link } from "react-router-dom"
import Card from "../components/Card"
import UserContext from "../contexts/User_context"
import api from "../resources/api"

function Pokedex() {
    // atributos que serao utilizados: name, image_url, number, kind

    const {user, setUser} = useContext(UserContext)
    const [counter, setCounter] = useState(1)
    const [lista, setLista] = useState([])
    const [search, setSearch] = useState("")


    useEffect(()=>{
        async function getCards(){
            api.get(`/pokemons?page=${counter}`)
            .then((resp)=>{
                setLista(resp.data.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        getCards()
    }, [counter]
    )

    function filterPokemon(obj) {
        if(obj.name.startsWith(search.toLowerCase())){
            return true
        }
        else{
            return false
        }
    }

    var pokemons = lista.filter(filterPokemon)

    function logOut() {
        setUser(null)
    }

    return(
        <div className="Pokedex">
            <div className="Pokedex-top">
                <Link className="pokedex-perfil" to="/Profile">Perfil</Link>
                <p className="pokedex-name">Olá, {user}</p>
                <button className="pokedex-sair" onClick={logOut}>Sair</button>
            </div>
            <hr className="Pokedex-line"/>

            <label>Digite o nome do pokemon:</label>
            <input type="text" onChange={(event)=>{setSearch(event.target.value)}} value={search} className="Pokedex-search"/>
            <div className="Pokedex-list">
                {pokemons.map((element)=>
                    <Card key={element.id} name={element.name} image={element.image_url} number={element.number} kind={element.kind}/>

                )}
            </div>
            <div className="Pokedex-bottom">
                <button onClick={()=>{
                    return (counter > 1)?setCounter(counter - 1) : counter
                }} id="previous">Voltar</button>
                <button onClick={()=>{
                    return (counter < 33) ? setCounter(counter + 1) : counter
                }} id="next">Próximo</button>
            </div>
        </div>
    );
}

export default Pokedex