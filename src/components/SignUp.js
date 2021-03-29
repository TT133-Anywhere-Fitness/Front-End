import React, { useState, useEffect } from 'react'
import * as yup from "yup";
import { schema } from './FormSchema';

export default function SignUp(){
    const [ credential, setCredential] = useState({ username: '', password: ''});
    const [errors, setErrors] = useState({
        username:'', password:''})
    const [disabled, setDisabled] = useState(true)
    const setCredentialErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then(() => setErrors({...errors, [name]: ''}))
        .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    }

    const handleChange = event => {
        const { name } = event.target;
        const valueToUse = event.target.value;
        setCredential({...credential, [event.target.name]: event.target.value});
        setCredentialErrors(name, valueToUse)
        setCredential({...credential, [name]: valueToUse})
    }

    const onSubmit = evt => {
        evt.preventDefault();
        console.log(credential)
    }

    useEffect(() => {
        schema.isValid(credential).then(valid => setDisabled(!valid))
    }, [credential])


    return(
        <div className="initForm">

            <div className="headerDiv"></div>

            <div style={{ color : 'red' }}>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
            </div>

            <form onSubmit={onSubmit}>
            <div>
               <h1>Sign Up Form</h1>
            </div>

                <div>
                    <label htmlFor="Name">Name </label>
                    <input value={credential.username} name="username" type="text" onChange={handleChange}/>
                </div>

                <div>
                <label htmlFor="password">Password </label>
                    <input value={credential.password} name="password" type="password"
                    onChange={handleChange}/>
                </div>
            

                <div>
                    <label htmlFor="role">Role</label>
                    <select value={credential.role} name="role" onChange={handleChange} >
                        <option value="0">Please select a role</option>
                        <option value="1">Student</option>
                        <option value="2">Instructor</option>
                    </select>
                </div>   

                <div>
                <button disabled={disabled} type="submit">Submit</button>
                </div> 

            </form>

        </div>
    )
}

