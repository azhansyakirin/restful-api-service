import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

export const NavBar = () => {
    return (
        <nav className="NavBar">
            <ul>
                <Link to="/home">Home</Link>
                <Link to="/login.do">Logout</Link>
            </ul>
        </nav>
    )
}