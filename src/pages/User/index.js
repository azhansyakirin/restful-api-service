import React, { useEffect, useState } from "react";
import { Service } from "../../services/ServiceConfig";
import { NavBar } from "../../components/NavBar";
import { CustomTable } from "../../components/CustomTable";
import axios from "axios";
import _ from "lodash";
import "./User.scss";

export const User = () => {
    const [storeUser, setStoreUser] = useState([]); /* declare state */

    console.log(storeUser)

    /* initiate API call */
    useEffect(() => {
        if (storeUser.length === 0) {
            fetchApi();
        }
    }, [storeUser]);

    /* local function to fetch api using axios module */
    function fetchApi() {
        axios
            .get(`http://localhost:5000${Service.getAllUsers}`) /* put your url you want to call */
            .then(res => { /* this steps will return api response */
                setStoreUser(res.data.users); /* this steps will store response into storeUser state */
            })
            .catch(error => {
                console.error("Error fetching users:", error); /* this steps will throw error if api failed to fetch */
            });
    }

    return (
        <React.Fragment>
            <NavBar />
            <div>
                <h1>Users</h1>
                <CustomTable storeUser={storeUser} /* storeUser being passed to Child component as "storeUser" */ />
            </div>
        </React.Fragment>

    );
};
