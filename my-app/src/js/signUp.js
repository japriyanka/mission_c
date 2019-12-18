import React from 'react';
import './../css/signUp.css';

class signUp extends React.Component {
    render() {
        const title = 'Sarvesh';
        return <div className="signup-box">
        <div className="split-textbox">
          <div className="text-already">Create a new account </div>
            <div className="name">
              <input type="text" className="text-box-first-name" placeholder=" Enter your first name" id="first-name"></input>
              <input type="text" className="text-box-last-name" placeholder=" Enter your last name" id="last-name"></input>
            </div>
          <input type="text" className="text-box-signup-email" placeholder=" Enter your email address" id="email"></input>
          <input type="text" className="text-box-signup-dob" placeholder=" Enter your date of birth (DD-MM-YYYY)" id="email"></input>
          <input type="password" className="text-box-signup-pass" placeholder=" Enter the password" id="pass"></input>
          <input type="password" className="text-box-signup-pass-confirm" placeholder=" Confirm the password" id="pass"></input>
        </div>
        <button type="submit" className="btn-primary-cancel">Cancel</button>
        <button type="submit" className="btn-primary-signup">Signup</button>
      </div>;
    }
}

export default signUp;