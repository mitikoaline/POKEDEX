import {  useContext, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/User_context";
import api from "../resources/api";


const Button = styled.button`
  cursor: pointer;
  font-family: 'Acme', sans-serif;
  // background: radial-gradient(circle, rgba(255,255,255,1) 0%, ${(props) => props.color} 100%);
  // background: ${(props) => props.color};
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, ${(props) => props.color} 58%, ${(props) => props.color} 59%);
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 20px;
  width: 300px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;

  p {
    font-size: 24px;
  }

  &:hover {
    background: linear-gradient(0deg, rgba(255,0,0,1) 0%,rgba(30,76,236,1) 100%);
  }

  &:active {
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, ${(props) => props.color} 100%);
  }

`

function Card({name, image, number, kind}) {

  const splitKind = kind.split(";")
  const [favoritos,setFavoritos] = useState(null)
  const  {user, setUser} = useContext(UserContext)

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

    function favoritar() {
      api.post(`users/${user}/starred/${name}`)
      .then((resp) => {
        alert('Adicionado aos favoritos')
      })
      .catch((err) => {
        alert('Este pokémom já foi favoritado')
      })
    }

    return (
      <div>
      <Button className="card" color={listColors[splitKind[0]]}>
        <style>@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');</style>
        <img src={image}/>
        <h1>{name}</h1>
        {/* {splitKind.map((element)=>
            <p>{element}</p>
        )} */}
        <p>#{number}</p>
      </Button>
      <div>
        <button onClick={favoritar}>Favoritar</button>
      </div>
      </div>
    );
}

export default Card;
