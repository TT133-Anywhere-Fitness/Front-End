import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory, useParams} from 'react-router-dom'
import { deleteClass, fetchClasses} from '../actions/index'
import { connect } from "react-redux";

function ClassCard(props){
    const {id, name, type, date, duration, intensity, location, numberOfRegisteredAttendees, maxClassSize} = props.class;
    const params = useParams();
    const { push } = useHistory();

    return(
        <div>
            <p>{name}</p>
            <button onClick={() => {
                props.deleteClass(props.class);
                window.location.reload();
                return false;
                }}>Delete</button>
        </div>
    )

}

const mapDispatchToProps = { deleteClass, fetchClasses };
export default connect(null, mapDispatchToProps)(ClassCard);