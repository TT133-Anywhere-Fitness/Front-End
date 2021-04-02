import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom"
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { addClass } from '../actions/index'


function AddClass(props){
    const [classItem, setClassItem] = useState({
        name: '', 
        type:'',
        date: '',
        duration: '',
        intensity: '',
        location: '',
        numberOfRegisteredAttendees: '',
        maxClassSize: ''
    });

    const handleChange = e => {
        setClassItem({
            ...classItem, 
            [e.target.name]: e.target.value
        });
    }


    return (
        <div className="loginForm">
            <form>
                <label htmlFor="name">Class Name </label>
                <input 
                    value={classItem.name}
                    name="name" 
                    type="text"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="type">Class Type </label>
                <input 
                    value={classItem.type}
                    name="type" 
                    type="text"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="date">Date </label>
                <input 
                    value={classItem.date}
                    name="date" 
                    type="text"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="date">Duration </label>
                <input 
                    value={classItem.duration}
                    name="duration" 
                    type="text"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="name">Intensity </label>
                <input 
                    value={classItem.intensity}
                    name="intensity" 
                    type="text"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="name">Location </label>
                <input 
                    value={classItem.location}
                    name="location" 
                    type="text"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="numberOfRegisteredAttendees">Current Class Size </label>
                <input 
                    value={classItem.numberOfRegisteredAttendees}
                    name="numberOfRegisteredAttendees" 
                    type="text"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="maxClassSize">Max Size </label>
                <input 
                    value={classItem.maxClassSize}
                    name="maxClassSize" 
                    type="text"
                    onChange={handleChange}
                />
                <br />
                <button onClick={() => props.addClass(classItem)}>Add Class</button>
            </form>
        </div>
    
    
    )
}

const mapDispatchToProps = { addClass };
export default connect(null, mapDispatchToProps)(AddClass);