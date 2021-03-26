import React from "react";
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div>
        <Link to='/' style={{ padding: 5, textDecoration: 'none'}}>Home</Link>

        <Link to='/signup' style={{ padding: 5, textDecoration: 'none'}}>Sign Up</Link>

        <Link to='/login' style={{ padding: 5, textDecoration: 'none'}}>Login</Link>
      </div>

      <Switch>
        <Route path='/signup' component={SignUp}/>
        <Route path='/login' component={Login}/>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
