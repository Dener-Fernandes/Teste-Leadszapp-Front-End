import React from 'react';
import './style.css';

function Input() {
    return (
        <div className="input-block">
            <label htmlFor="loginId_id">Email</label>
            <input type="text" id="loginId_id" name="loginId"/>
            <label className="label-password" htmlFor="password_id">Password</label>
            <input type="text" id="password_id" name="password"/>
        </div>
    );
}

export default Input;