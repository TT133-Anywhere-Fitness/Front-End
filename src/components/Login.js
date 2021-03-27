import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { schema } from "./FormSchema";

export default function Login(){
    const [credential, setCredential] = useState({ username: '', password:''})
    const [errors, setErrors] = useState({ username: '', password:''})
    const [disabled, setDisabled] = useState(true)
    const setCredentialErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then(() => setErrors({...errors, [name]: ''}))
        .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    }


    const[authCode, setAuthCode]= useState('')


    const handleChange = event => {
        const { name, value, type} = event.target;
        const valueToUse = event.target.value;
        setCredential({...credential, [event.target.name]: event.target.value});
        setCredentialErrors(name, valueToUse)
        setCredential({...credential, [name]: valueToUse})
    }

    const onSubmit = event => {
        event.preventDefault();
        console.log(credential)
    }

    useEffect(() => {
        schema.isValid(credential).then(valid => setDisabled(!valid))
    }, [credential])

    return (
        <div className="loginForm">
            <div style={{ color : 'red' }}>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
            </div>
    
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
                <button disabled={disabled}>Log In</button>
            </div>
            
            </form>
        </div>
    
    
    )
}

