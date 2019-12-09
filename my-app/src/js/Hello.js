import React from 'react';
import './../css/Hello.css';
import go from './../image/blue-logo-flame.svg';
;

class Hello extends React.Component {
    validate() {
        alert('hELLO');
    }
    render()  {
        return <div class="hello-format">
        <div class="main-toolbar">
            <img src={go} class="image-to-show"></img>
            <span class="logo-text">Mission-C</span>
            <button class="btn-primary-home">Home</button>
        </div>
        <div class="login">
          <div class="split-textbox">
            <div class="text-already">Already have an account? Login here</div>
            <input type="text" class="text-box-name" placeholder=" Enter your email address" id="email"></input>
            <input type="password" class="text-box-email" placeholder=" Enter your password" id="pass"></input>
          </div>
          <button type="submit" class="btn-primary-cancel">Cancel</button>
          <button type="submit" class="btn-primary-login" title="Implement login">Login</button>
        </div>
        <div class="signup">
          <div class="split-textbox">
            <div class="text-already">Create a new account </div>
              <div class="name">
                <input type="text" class="text-box-first-name" placeholder=" Enter your first name" id="first-name"></input>
                <input type="text" class="text-box-last-name" placeholder=" Enter your last name" id="last-name"></input>
              </div>
            <input type="text" class="text-box-signup-email" placeholder=" Enter your email address" id="email"></input>
            <input type="text" class="text-box-signup-dob" placeholder=" Enter your date of birth (DD-MM-YYYY)" id="email"></input>
            <input type="password" class="text-box-signup-pass" placeholder=" Enter the password" id="pass"></input>
            <input type="password" class="text-box-signup-pass-confirm" placeholder=" Confirm the password" id="pass"></input>
          </div>
          <button type="submit" class="btn-primary-cancel">Cancel</button>
          <button type="submit" class="btn-primary-signup">Signup</button>
        </div>  
        </div>;
    }
}

export default Hello;