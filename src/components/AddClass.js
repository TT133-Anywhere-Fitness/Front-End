import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom"


export default function AddClass(){
    const [classItem, setClassItem] = useState({
        name: '', 
        type:'',
        startTime: '',
        duration: '',
        intensityLevel: '',
        location: '',
        currentAttendees: '',
        maxSize: ''
    });

    const handleChange = e => {
        setClassItem({
            ...classItem, 
            [e.target.name]: e.target.value
        });
    }

    const login = e => {
        e.preventDefault();
/*         axios.post("https://reqres.in/api/login", credentials) //replace with actual backend user endpoint when ready
            .then(res => {
            })
            .catch(err => {
            }) */
    }

    return (
        <div className="loginForm">
            <form onSubmit={login}>
                <label htmlFor="name">Class Name </label>
                <input 
                    value={classItem.name}
                    name="name" 
                    type="text"
                    onChange={handleChange}
                />
                <br />
                <button>Add Class</button>
            </form>
        </div>
    
    
    )
}

