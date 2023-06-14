import React from "react";
import './Login.scss';
import { Form } from "../../components/Form";
import { Link } from "react-router-dom";

export const Login = () => {

    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}

                <h3 style={{ fontWeight: 700, fontSize: "30pt", lineHeight: 0, margin: 0 }}>Welcome to</h3><br />
                <h1 style={{ fontWeight: 700, fontSize: "100pt", color: "" }}>Test<span style={{ color: 'gold' }}>Bank</span></h1>
                <span style={{ fontWeight: 400, fontSize: "14pt", color: "" }}>Please login to continue</span>
                <Form />
                
                { /* Forgot Password hyperlink */
                    <Link style={{fontSize:"10pt", margin:'1rem', color: "gold", textDecoration: "none"}} to='/ForgotPassword'>Forgot Password ?</Link>
                }

            </header>
        </div>
    )
}