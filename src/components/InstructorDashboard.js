import React, { useEffect } from 'react';
import AddClass from './AddClass';
import ClassList from './ClassList';
import { connect } from 'react-redux';
import { fetchClasses } from '../actions/index'

const InstructorDashboard = (props) => {
    const getClasses = props.fetchClasses;
    useEffect(() => {
        getClasses();
    },[getClasses])

    return(
        <div>
            <AddClass />
            <ClassList />
        </div>
    )
}

const mapDispatchToProps = { fetchClasses };
export default connect(null, mapDispatchToProps)(InstructorDashboard);