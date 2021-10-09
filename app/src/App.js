import { useState } from 'react';
import './App.css';
import UserContext from './contexts/User_context';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'


function App() {

  const [user,setUser] = useState(null)

  return (
    //Permite o uso do user em todas as paginas. ##Tem que criar uma constante na pagina que quiser usar##
    <UserContext.Provider value={{user, setUser}}>
      <Router>
        <Switch>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Register">
            <Register/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
