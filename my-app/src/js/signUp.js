import React from 'react';
import './../css/signUp.css';

class signUp extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        showResultState: false
      };
      this.showResult = this.showResult.bind(this);
      this.hideResult = this.hideResult.bind(this);
    }

    showResult() {
      this.setState({
        showResultState: true
      });
    }

    hideResult() {
      this.setState({
        showResultState: false
      });
    }

   componentWillUnmount() {
      this.setState({
        showResultState: false
      });
   }

    render() {
        const title = 'Sarvesh';

        return (
          <div className="signup-box">
            <div className="splittextbox">
              <div className="text-already">
                Create a new account 
              </div>
              <div className="name">
                <input type="text" className="text-box-first-name" 
                placeholder=" Enter your first name" 
                id="first-name">
                </input>
                <input type="text" className="text-box-last-name" 
                placeholder=" Enter your last name" 
                id="last-name"></input>
              </div>
              <input type="text" className="text-box-signup-email" 
              placeholder=" Enter your email address" 
              id="email-signup"></input>
              <input type="text" className="text-box-signup-dob" 
              placeholder=" Enter your date of birth (DD-MM-YYYY)" 
              id="dob"></input>
              <input type="password" className="text-box-signup-pass"
               placeholder=" Enter the password" id="pass-signup"></input>
              <input type="password" className="text-box-signup-pass-confirm"
               placeholder=" Confirm the password" id="pass-confirm"></input> 
              <button type="submit" className="btn-primary-signup"
              onClick={this.showResult}>
                SIGN UP
              </button>
              <button type="submit" className="btn-primary-cancel"
              onClick={this.hideResult}>
                CANCEL
              </button>
              <div className="result-show" hidden={!this.state.showResultState}>
                <div className="display-result">
                  User is registered
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default signUp;