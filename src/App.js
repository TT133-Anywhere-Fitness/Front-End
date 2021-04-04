import React from "react";
import {Route, Switch} from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import InstructorDashboard from "./components/InstructorDashboard";
import StudentDashboard from "./components/StudentDashboard";

function App() {
  return (
    <div className="App">
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/' component={Login}/>
        
        
        <Switch>
          <PrivateRoute exact path='/addclass' component={InstructorDashboard}/>
          <PrivateRoute exact path='/searchclass' component={StudentDashboard}/>
        </Switch>
    </div>
  );
}

export default App;
