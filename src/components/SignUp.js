import React, { useState } from 'react'

export default function SignUp(){
    const [ credential, setCredential] = useState({ username: '', password: '', role: ''});

    const handleChange = event => {
        const {name, type, value,} = event.target;
        setCredential({...credential, [event.target.name]: event.target.value});
    }

    return(
        <div className="initForm">
            <form>
                <div>
                    <label htmlFor="Name">Name </label>
                    <input value={credential.username} name="username" type="text" onChange={handleChange}/>
                </div>

                <div>
                <label htmlFor="password">Password</label>
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
                <button>Submit</button>
                </div> 

            </form>

        </div>
    )
}

console.log();