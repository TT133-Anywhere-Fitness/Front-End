import React from "react";
import { Link } from 'react-router-dom';

export default function NavBar(){
    return (
        <div className='NavBar'>
            <div>
                <h1>Anywhere Fitness</h1>
            </div>
            <div className='links'>
                <Link to="/">Log In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}