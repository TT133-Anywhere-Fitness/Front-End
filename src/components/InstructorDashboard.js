import React, { useState, useEffect } from 'react';
import AddClass from './AddClass';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import ClassList from './ClassList';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import EditClass from './EditClass';

export default function InstructorDashboard(){
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axiosWithAuth().get("/classes")
        .then(res => {
            setClasses(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    },[classes])

    return(
        <div>
            <AddClass />
            <ClassList classes={classes} setClasses={setClasses}/>
            <Switch>
                <Route path='editclass/:id' render={
                props => {
                    return <EditClass {...props} classes={classes} setClasses={setClasses}/>
                }
                }
                />
            </Switch>
        </div>
    )
}