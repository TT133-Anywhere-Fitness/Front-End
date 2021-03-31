import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp'
import Login from './components/Login'
import AddClass from './components/AddClass'
import PrivateRoute from './components/PrivateRoute'
import InstructorDashboard from "./components/InstructorDashboard";
import EditClass from "./components/EditClass"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/' component={Login}/>
          <PrivateRoute exact path='/addclass' component={InstructorDashboard}/>
          <Route exact path='/searchclass'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
