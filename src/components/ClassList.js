import React from 'react';
import { Route } from 'react-router-dom'
import ClassCard from './ClassCard';
import EditClass from './EditClass'
import { connect } from 'react-redux'

function ClassList(props) {
    if (props.loadingClasses){
        return <h1>Loading...</h1>
    }
    return(
        <div>
            {props.classes.map((item) => {
                return(
                    <ClassCard class={item} key={item.id}/>
                )
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        classes: state.classes,
        loadingClasses: state.loadingClasses
    }
}
export default connect(mapStateToProps, null)(ClassList);