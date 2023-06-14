import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import "./CustomTable.scss";
import _ from "lodash";

export const CustomTable = ({ storeUser /* storeUser state being passed from Parent component */ }) => {

    /* check props enter this component or not */
    console.log(storeUser, "what's here");

    /* make custom style for props */
    const css = {
        color: "white",
        fontSize: "16pt",
        textTransform: "capitalize",
        textAlign: "center",
        padding: "2rem"
    };

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow style={{ color: "white" }}>
                        <TableCell style={css}>Name</TableCell>
                        <TableCell style={css}>MatricId</TableCell>
                        <TableCell style={css}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { /* construct table data dynamically from api */
                        _.map(storeUser /* takes from Parent prop */, obj => (
                            <TableRow key={obj.id}>
                                <TableCell style={css}>{obj.name}</TableCell>
                                <TableCell style={css}>{obj.matricId}</TableCell>
                                <TableCell style={css}>
                                    <Link to="/">Remove User</Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};
