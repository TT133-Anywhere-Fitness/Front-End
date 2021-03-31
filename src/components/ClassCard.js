import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory, useParams} from 'react-router-dom'

export default function ClassCard(props){
    const {id, name, type, date, duration, intensity, location, numberOfRegisteredAttendees, maxClassSize} = props.class;
    const params = useParams();
    const { push } = useHistory();

    const deleteClass = e => {
        e.preventDefault();
        axiosWithAuth().delete(`/classes/${id}`)
        .then(res => {
            props.setClasses(props.classes.filter(item => {
                return item.id !== id;
            }))
        })
    }

    const editClass = e => {
        push(`/editclass/${id}`);
    }

    return(
        <div>
            <p>{name}</p>
            <button onClick={deleteClass}>Delete</button>
            <button onClick={editClass}>Edit</button>
        </div>
    )

}