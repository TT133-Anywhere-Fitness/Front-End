import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom"


export default function Login(){
    const [credentials, setCredential] = useState(
        { username: '', password:''}
    )
    const[authCode, setAuthCode]= useState('')

    const handleChange = e => {
        if(e.target.name === "authCode"){
            setAuthCode(e.target.value)
        }else{
            setCredential({...credentials, [e.target.name]: e.target.value});
        }
    }

    const login = e => {
        e.preventDefault();
        axios.post("https://reqres.in/api/login", credentials) //replace with actual backend user endpoint when ready
            .then(res => {
                console.log(res)
                localStorage.setItem("authToken", res.data.token); //replace with actual backend token response when ready
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="loginForm">
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
                <button>Log In</button>
            </form>
        </div>
    
    
    )
}

