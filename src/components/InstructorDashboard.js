import React, { useState, useEffect } from 'react';
import AddClass from './AddClass';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import ClassList from './ClassList';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import EditClass from './EditClass';
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