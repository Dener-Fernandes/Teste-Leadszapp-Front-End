import React from 'react';
import Input from '../../components/input/index';
import './style.css';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    function handleSubmit(e) {
        e.preventDefault();
        const loginId = e.target.loginId.value;
        const password = e.target.password.value;

        api.post("/login", {
            loginId,
            password
        })
        .then((response) => {
            if (response.data) {
                history.push("/loggedIn");
            }
        })
        .catch((err) => {
            alert(err);
        });
    }
    return (
        <>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <Input/>
                    <input type="submit" value="Continue"/>
                    <h5>Forgot password?</h5>
                </form>
            </div>
        </>
    );
}

export default Login;