import React from 'react';
import './../css/Login.css';

class Login extends React.Component {

    render() {
        const title = 'Sarvesh';
        return (
        <div className="login-box">
            <div className="text-box-name-box">
                <input type="text" className="text-box-name" 
                placeholder=" Enter your email address" 
                id="email_id"></input>
            </div>
            <div className="text-box-name-box">
                <input type="password" className="text-box-name" 
                placeholder=" Enter your password" 
                id="password_id"></input>
            </div>
            <div className="buttons-login">
                <button type="submit" className="btn-primary-login" 
                title="Implement login">LOGIN</button>
            </div>
        </div>);
    }
}

export default Login;