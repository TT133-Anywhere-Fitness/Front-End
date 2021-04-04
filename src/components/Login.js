//    "email": "eve.holt@reqres.in",
//    "password": "cityslicka"

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { schema } from "./FormSchema";
import * as yup from "yup";
import { axiosWithAuth } from '../utils/axiosWithAuth'


export default function Login(){
    const [credentials, setCredentials] = useState(
        { username: '', password:'', authCode: ''}
    );
    const [errors, setErrors] = useState({ username: '', password:''})
    const [disabled, setDisabled] = useState(true)
    const setCredentialErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then(() => setErrors({...errors, [name]: ''}))
        .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    }
    const history = useHistory();

    const handleChange = e => {
        setCredentials({
                ...credentials, 
                [e.target.name]: e.target.value
        });
        setCredentialErrors(e.target.name, e.target.value)
    }

    const login = e => {
        e.preventDefault();
        axiosWithAuth().post("/users/login", credentials) //replace with actual backend user endpoint when ready
            .then(res => {
                console.log(res)
                localStorage.setItem("authToken", res.data.token); //replace with actual backend token response when ready
                if(credentials.authCode.length > 0){
                    history.push("/addclass") //routes to instructor page
                }else{
                    history.push("/searchclass") //routes to student page
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        schema.isValid(credentials).then(valid => setDisabled(!valid))
    }, [credentials])

    return (
        <div className="loginForm">
            <div style={{ color : 'red' }}>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
            </div>
            <form onSubmit={login}>
                <label htmlFor="username">Username </label>
                <input 
                    value={credentials.username}
                    name="username" 
                    type="text"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="password">Password </label>
                <input 
                    value={credentials.password} 
                    name="password" 
                    type="password" 
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="authCode">Instructors, please enter your authorization code: </label>
                <input 
                    value={credentials.instructorCode} 
                    name="authCode" 
                    type="password" 
                    onChange={handleChange}
                />
                <br />
                <button disabled={disabled}>Log In</button>
            </form>
        </div>
    
    
    )
}

