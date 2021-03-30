import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp'
import Login from './components/Login'
import AddClass from './components/AddClass'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/signup' component={SignUp}/>
          <Route component={Login}/>
          <Route path='/addclass' component={AddClass}/>
          <Route path='/searchclass'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
