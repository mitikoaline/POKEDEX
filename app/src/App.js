import { useEffect, useState } from 'react';
import './App.css';
import UserContext from './contexts/User_context';
import api from "./resources/api";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Redirect } from 'react-router';

import Login from './pages/Login';
import Pokedex from './pages/Pokedex';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Pokemon from "./pages/Pokemon";


function App() {

  const [user,setUser] = useState(userSessionStorage())
  const [lista, setLista] = useState([])
  
  function userSessionStorage() {
  if (sessionStorage.getItem('user') !== 'null') {
  return sessionStorage.getItem('user')
  }
  else {
    return null
  }
  }
  
  useEffect(() => {
    sessionStorage.setItem('user',user)
  }, [user]
  )

  useEffect(()=>{
    async function getNames(){
        api.get(`/pokemons`)
        .then((resp)=>{
            setLista([resp.data.data].concat(lista))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    getNames()
  }, []
  )
  
  return (
    //Permite o uso do user em todas as paginas. ##Tem que criar uma constante na pagina que quiser usar##
    <UserContext.Provider value={{user, setUser}}>
      <Router>
        <Switch>
          {lista.map((element) => (
            <Route path={"/"+element.name}>
              <Pokemon name={element.name}/>
            </Route>
          ))}
          <Route path="/Login">
            {user?
            <Redirect to="/"/>
            :
            <Login/>}
          </Route>
          <Route path="/Register">
            {user?
            <Redirect to="/"/>
            :
            <Register/>}
          </Route>
          <Route path="/Profile">
            <Profile/>
          </Route>
          <Route path="/">
            {user?
            <Pokedex/>
            :
            <Redirect to="/Login"/>}
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
