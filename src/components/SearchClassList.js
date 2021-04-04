import React from 'react';
import SearchClassCard from './SearchClassCard';
import { connect } from 'react-redux'

function SearchClassList(props) {
    if (props.loadingClasses){
        return <h1>Loading...</h1>
    }
    return(
        <div>
            {props.classes.map((item) => {
                return(
                    <SearchClassCard class={item} key={item.id}/>
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
export default connect(mapStateToProps, null)(SearchClassList);