import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const PageRoute = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login.do' element={<Login />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}