import React from "react";
import "./Home.scss";
import { NavBar } from "../../components/NavBar";

export const Home = () => {

    return (
        <React.Fragment>
            <NavBar />
            <div className="home">
                <h1>Home</h1>
            </div>
        </React.Fragment>

    )
}