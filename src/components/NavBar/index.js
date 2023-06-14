import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.scss";

export const NavBar = () => {

    const { pathname } = useLocation();
    const toLowCase = pathname.toLocaleLowerCase();
    console.log("Path :::::", toLowCase);

    return (
        <nav className="NavBar">
            <ul>
                <Link to="/home" className={`${toLowCase === "/home" ? "currentTab" : ""}`}>Home</Link> ||
                <Link to="/user" className={`${toLowCase === "/user" ? "currentTab" : ""}`}>User</Link> ||
                <Link to="/login" className={`${toLowCase === "/login" ? "currentTab" : ""}`}>Logout</Link>
            </ul>
        </nav>
    )
}