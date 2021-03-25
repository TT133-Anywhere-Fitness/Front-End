import axios from "axios";
import React, { useState } from "react";


export default function Login(){
    const [credential, setCredential] = useState(
        { username: '', password:'', instructorCode:'' }
    )

    const handleChange = event => {
        setCredential({...credential, [event.target.name]: event.target.value});
    }

    const onSubmit = event => {
        event.preventDefault();
        axios.post('/', {credential})
    }

    return (
        <div className="loginForm">
    
            <form onSubmit={onSubmit}>
            <h1>Log In</h1>
            <div>
                <label htmlFor="Name">Name </label>
                <input value={credential.username} name="username" type="text" onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="password">Password </label>
                <input value={credential.password} name="password" type="password" onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="instructorCode">Instructors, please enter your authorization code: </label>
                <input value={credential.instructorCode} name="instructorCode" type="password" onChange={handleChange}/>
            </div>

            <div>
                <button>Log In</button>
            </div>
            
            </form>
        </div>
    
    
    )
}

