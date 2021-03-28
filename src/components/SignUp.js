//     "email": "eve.holt@reqres.in",
//     "password": "pistol"

import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom"


export default function SignUp(){
    const [credentials, setCredentials] = useState({ username: '', password: '', role: ''});
    const history = useHistory();

    const handleChange = e => {
        setCredentials({
            ...credentials, 
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();
        axios.post("https://reqres.in/api/register", credentials) //replace with actual backend user endpoint when ready
        .then(res => {
            console.log(res);
            localStorage.setItem("authToken", res.data.token); //replace with actual backend token response when ready
            if(credentials.role === 'instructor'){
                history.push("/addclass") //routes to instructor page
            }else if(credentials.role === 'student'){
                history.push("/searchclass") //routes to student page
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <div className="signUpForm">
            <form onSubmit={onSubmit}>
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
                <label htmlFor="role">Role </label>
                <select value={credentials.role} name="role" onChange={handleChange} >
                    <option value="">Please select a role</option>
                    <option value="student">Student</option>
                    <option value="instructor">Instructor</option>
                 </select>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

