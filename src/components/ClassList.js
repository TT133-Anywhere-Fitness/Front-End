import React from 'react';
import { Route } from 'react-router-dom'
import ClassCard from './ClassCard';
import EditClass from './EditClass'

function ClassList({ classes, setClasses }) {
    return(
        <div>
                    {classes.map(item => (
                <div key={item.id}>
                    <ClassCard class={item} setClasses={setClasses} classes={classes}/>
                </div>
        ))}
        </div>
    );
}

export default ClassList;