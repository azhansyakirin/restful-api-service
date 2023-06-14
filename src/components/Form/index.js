import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useNavigate } from "react-router-dom";
import "./Form.scss";

export const Form = () => {

    const navigate = useNavigate();

    const [show, setShow] = React.useState(false);

    const submitCallBack = () => { setShow(true); navigate('/home'); };

    return (
        <div className='LoginForm'>
            <div>
                <label>Username : </label>
                <input type={`text`} onChange={() => { }} />
            </div>
            <div>
                <label>Password : </label>
                <input type={`password`} onChange={() => { }} />
            </div>
            <Button size='lg' variant='success' onClick={() => submitCallBack()}>Login</Button>

            {show ? <p>Success</p> : ''}
        </div>
    )
}