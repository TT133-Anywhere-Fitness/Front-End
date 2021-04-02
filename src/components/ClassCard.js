import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory, useParams} from 'react-router-dom'
import { deleteClass, fetchClasses} from '../actions/index'
import { connect } from "react-redux";

function ClassCard(props){
    const {id, name, type, date, duration, intensity, location, numberOfRegisteredAttendees, maxClassSize} = props.class;
    const params = useParams();
    const { push } = useHistory();

    const editClass = () => {
        push(`/editclass/${id}`)
    }

    return(
        <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>{date}</p>
            <p>{duration}</p>
            <p>{intensity}</p>
            <p>{location}</p>
            <p>{numberOfRegisteredAttendees}</p>
            <p>{maxClassSize}</p>
            <button onClick={() => {
                props.deleteClass(props.class);
                window.location.reload();
                return false;
                }}>Delete</button>
            <button onClick={editClass}>Edit</button>
        </div>
    )

}

const mapDispatchToProps = { deleteClass, fetchClasses };
export default connect(null, mapDispatchToProps)(ClassCard);