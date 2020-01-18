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
              <div className="name">
                  <input type="text" className="text-box-first-name" 
                  placeholder=" Please enter your name" 
                  id="first-name">
                </input>
              </div>
              <div className="name">
                <input type="text" className="text-box-signup-email" 
                placeholder=" Enter your email address" 
                id="email-signup"></input>
              </div>
              <div className='name'>
                <input type="password" className="text-box-signup-pass"
                placeholder=" Enter the password" id="pass-signup"></input>
              </div>
              <div className="signup-button">
                <button type="submit" className="btn-primary-signup"
                onClick={this.showResult}>
                  Create an account
                </button>
              </div>
              <div className="name">
                <a href='#' className="terms-conditions">
                </a>
              </div>
              <div className="result-show" hidden={!this.state.showResultState}>
                <div className="display-result">
                  User is registered
                </div>
              </div>
        </div>)
  }
}

export default signUp;