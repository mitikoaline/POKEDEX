import { useEffect, useState } from 'react';
import './App.css';
import UserContext from './contexts/User_context';

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


function App() {

  const [user,setUser] = useState(userSessionStorage())
  
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
  
  return (
    //Permite o uso do user em todas as paginas. ##Tem que criar uma constante na pagina que quiser usar##
    <UserContext.Provider value={{user, setUser}}>
      <Router>
        <Switch>
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
