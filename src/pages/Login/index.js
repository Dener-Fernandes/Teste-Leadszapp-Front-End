import React, { useState } from 'react';
// import Input from '../../components/input/index';
import './style.css';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const [emailErrorEmpty, setEmailErrorEmpty] = useState("");
    const [emailErrorNotEmail, setEmailErrorNotEmail] = useState("");
    const [passwordErrorEmpty, setpasswordErrorEmpty] = useState("");
    const [wrongValues, setWrongValues] = useState("");

    function validate (emailEmpty = "", notEmail = "", passwordEmpty = "") {
        setEmailErrorEmpty(emailEmpty);
        setEmailErrorNotEmail(notEmail);
        setpasswordErrorEmpty(passwordEmpty);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const loginId = e.target.loginId.value;
        const password = e.target.password.value;

        api.post("/login", {
            loginId,
            password
        })
        .then((response) => {
            if (response.data == "Successful") {
                history.push("/loggedIn");
            }
            else {
                validate(response.data[0], response.data[1], response.data[2]);
            }
        })
        .catch((err) => {
            setWrongValues(err);
        });
    }
    return (
        <>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <div className="input-block">
                        <label htmlFor="loginId_id">Email</label>
                        <input type="text" id="loginId_id" name="loginId"/>
                        {emailErrorEmpty && <span>Campo vazio!</span>}&ensp;
                        {emailErrorNotEmail && <span>E-mail inválido</span>}
                        <label className="label-password" htmlFor="password_id">Password</label>
                        <input type="text" id="password_id" name="password"/>
                        {passwordErrorEmpty && <span>Campo vazio!</span>}&ensp;
                        {wrongValues && <span>Dados inválido!</span>}
                    </div>
                    <input type="submit" value="Continue"/>
                    <h5>Forgot password?</h5>
                </form>
            </div>
        </>
    );
}

export default Login;