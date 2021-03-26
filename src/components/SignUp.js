import React, { useState } from 'react'
import axios from 'axios';


export default function SignUp(){
    const [ credential, setCredential] = useState({ username: '', password: '', role: ''});

    const handleChange = event => {
        setCredential({...credential, [event.target.name]: event.target.value});
    }

    const onSubmit = evt => {
        evt.preventDefault();
        console.log(credential)
    }

    return(
        <div className="initForm">

            <div className="headerDiv"></div>


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
                <button type="submit">Submit</button>
                </div> 

            </form>

        </div>
    )
}

