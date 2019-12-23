import React from 'react';
import './../css/Hello.css';
import Login from './Login';
import Signup from './signUp';
import Home from './Home';
import TopDeals from './TopDeals';
import go from './../image/blue-logo-flame.svg';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

class Hello extends React.Component {
    validate() {
        alert('hELLO');
    }
    render()  {
      const login = {
        'name': '',
        'email': '',
      };

      return <div className="hello-format">
        <div className="main-toolbar">
            <img src={go} className="image-to-show"></img>
              <span className="logo-text">Mission-C</span>
            <button className="btn-primary-home">Home</button>
            <button className="btn-primary-contact">Contact</button>
            <button className="btn-primary-contact">Login</button>
        </div>

        <div className="app">
          <div className="login">
            <TopDeals />
          </div> 
          <div className="signUp">
            <Signup />
          </div>
        </div>

       </div>;
        /*
        return <div className="hello-format">
        <div className="main-toolbar">
            <img src={go} className="image-to-show"></img>
            <span className="logo-text">Mission-C</span>
            <button className="btn-primary-home">Home</button>
        </div>
        <div className="login">
          <div className="split-textbox">
            <div className="text-already">Already have an account? Login here</div>
            <input type="text" className="text-box-name" placeholder=" Enter your email address" id="email"></input>
            <input type="password" className="text-box-email" placeholder=" Enter your password" id="pass"></input>
          </div>
          <button type="submit" className="btn-primary-cancel">Cancel</button>
          <button type="submit" className="btn-primary-login" title="Implement login">Login</button>
        </div>
        <div className="signup">
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
        </div>  
        </div>;
        */
    }
}

export default Hello;