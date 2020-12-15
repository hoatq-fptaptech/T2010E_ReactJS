import React from 'react';
import {Link} from "react-router-dom";
export default function Nav(){
    return (
        <nav className="section col-md-12 nav">
            <div className="container">
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/about-us">About us</Link></li>
                </ul>
            </div>
        </nav>
    )
}