import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchClasses } from '../actions/index'
import SearchClassCard from './SearchClassCard';
import SearchBar from './SearchBar';
import Fuse from "fuse.js"

const StudentDashboard = (props) => {
    const getClasses = props.fetchClasses;
    useEffect(() => {
        getClasses();
    }, [getClasses])
    const [data, setData] = useState(props.classes)

    const searchData = (pattern) => {
        if (!pattern) {
            setData(props.classes);
            return;
        }

        const fuse = new Fuse(data, {keys: ["name", "type", "date", "duration", "intensity", "location"]});
        const result = fuse.search(pattern);

        const matches = [];
        if(!result.length) {
            setData([]);
        }else{
            result.forEach(({item}) => {
                matches.push(item);
            });
            setData(matches);
        }
    }

    return(
        <div>
            <h2>Search Classes</h2>
            <SearchBar 
                placeholder="Search"
                onChange={(e) => {
                    searchData(e.target.value)
                    console.log(e.target.value)
                    }}
            />
            <div className="Container">
                {
                    data.map((item) => (
                        <SearchClassCard {...item} key={item.id} />
                    ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        classes: state.classes,
        loadingClasses: state.loadingClasses
    }
}
const mapDispatchToProps = { fetchClasses };
export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);