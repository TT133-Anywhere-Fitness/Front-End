
    const handleChange = event => {
        const { name } = event.target;
        const valueToUse = event.target.value;
        setCredential({...credential, [event.target.name]: event.target.value});
        setCredentialErrors(name, valueToUse)
        setCredential({...credential, [name]: valueToUse})
=======
//     "email": "eve.holt@reqres.in",
//     "password": "pistol"

import React, { useState, useEffect } from 'react'
import * as yup from "yup";
import axios from 'axios';
import { schema } from './FormSchema';
import { useHistory } from "react-router-dom"


export default function SignUp(){
    const [credentials, setCredentials] = useState({ username: '', password: '', role: ''});
    const [errors, setErrors] = useState({username:'', password:''})
    const history = useHistory();
    const [disabled, setDisabled] = useState(true)
    const setCredentialErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then(() => setErrors({...errors, [name]: ''}))
        .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    }
    const handleChange = e => {
      setCredentials({
        ...credentials, 
        [e.target.name]: e.target.value
      });
      setCredentialErrors(e.target.name, e.target.value)
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

    useEffect(() => {
        schema.isValid(credential).then(valid => setDisabled(!valid))
    }, [credential])


    return(
        <div className="signUpForm">
            <div style={{ color : 'red' }}>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
            </div>
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
                    <option value="student">Student</option>
                    <option value="instructor">Instructor</option>
                 </select>
                <br />
                <button disabled={disabled} type="submit">Submit</button>
            </form>
        </div>
    )
}

