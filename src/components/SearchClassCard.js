import React from 'react';
import { deleteClass, fetchClasses} from '../actions/index'
import { connect } from "react-redux";

function SearchClassCard({name, type, date, duration, intensity, location, numberOfRegisteredAttendees, maxClassSize}){
    return(
        <div className="classCard">
            <p>{name}</p>
            <p>{type}</p>
            <p>{date}</p>
            <p>{duration}</p>
            <p>{intensity}</p>
            <p>{location}</p>
            <p>{numberOfRegisteredAttendees}</p>
            <p>{maxClassSize}</p>
        </div>
    )

}

const mapDispatchToProps = { deleteClass, fetchClasses };
export default connect(null, mapDispatchToProps)(SearchClassCard);