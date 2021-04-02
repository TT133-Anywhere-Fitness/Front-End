import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom"
import { axiosWithAuth } from '../utils/axiosWithAuth'


export default function EditClass(props){
    const [classItem, setClassItem] = useState({
        id:'',
        name: '', 
        type:'',
        date: '',
        duration: '',
        intensity: '',
        location: '',
        numberOfRegisteredAttendees: '',
        maxClassSize: ''
    });
    const { id } = useParams();
    const { push } = useHistory();

    const handleChange = e => {
        setClassItem({
            ...classItem, 
            [e.target.name]: e.target.value
        });
    }

    const editClass = e => {
        e.preventDefault();
        axiosWithAuth().put(`/classes/${id}`, classItem) //replace with actual backend user endpoint when ready
        .then(res => {
            props.setClasses(props.classes.map(classes => {
                if(classes.id === res.data.id){
                    return res.data
                }else{
                    return classes;
                }
            }));
            push('/addclass');
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (

        <div className="editForm">
            <form onSubmit={editClass}>
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
                <button>Edit Class</button>
            </form>
        </div>
    )
}

