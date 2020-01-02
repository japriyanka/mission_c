import React from 'react';
import './../css/Login.css';

class Login extends React.Component {
    render() {
        const title = 'Sarvesh';
        return <div className="login-box">
            <div className="text-already">
                Already have an account? Login here
            </div>
            <div className="split-textbox">
                <input type="text" className="text-box-name" 
                placeholder=" Enter your email address" id="email"></input>
                <input type="password" className="text-box-email" 
                placeholder=" Enter your password" id="pass"></input>
                <button type="submit" className="btn-primary-cancel-login">
                    CANCEL
                </button>
                <button type="submit" className="btn-primary-login" 
                title="Implement login">LOGIN</button>
            </div>
        </div>;
    }
}

export default Login;