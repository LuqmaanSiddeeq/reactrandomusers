import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-sm">
            <Link 
                to="/" 
                className="navbar-brand text-light">
                Random Users App
            </Link>
            <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav">
                <li className="nav-item"><Link to="/user" className="nav-link text-light">User List</Link></li>
                <li className="nav-item"><Link to="/user/:1" className="nav-link text-light">User Details</Link></li>
                <li className="nav-item"><Link to="/about" className="nav-link text-light">About</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Header