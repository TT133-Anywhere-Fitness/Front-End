import React from "react";
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/signup' component={SignUp}/>
          <Route component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
