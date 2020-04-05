import React from 'react';
import './../css/Introduction.css';
import go from './../image/symb.jpeg';
import search from './../image/search.webp';
import Modal from 'react-awesome-modal';
import Login from './Login';
import SignUp from './signUp';
import ReactDOM from 'react-dom';
import Introduction from './Introduction';



class HeaderObj extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            showLogin: true,
        };      
    }

    changeOnMenuBar(divTemp) {
        const barMenu = document.getElementById('more-to-come');
        if(barMenu.className === 'change') {
            barMenu.className = 'more-to-come';
        } else {
          barMenu.className = 'change';
          document.getElementById("slideAcross").style.width = "250px";
        }

    }


    closeNavigation() {
        document.getElementById("slideAcross").style.width = "0px";
        this.changeOnMenuBar();
    }



    hideLoginSignup() {
        this.setState({
            showPopup: false
        });
        document.getElementById('mode-show').style.display = 'none';
    }

    showLoginSignup() {
        this.setState({
            showPopup: true
        });
        document.getElementById('mode-show').style.display = 'inline-block';        
    }

    showHeading(id) {
        if (id === 0) {
            return {
                'heading': 'Login',
                'description': 'Get access to personalized deals near your place'
            };
        } else if (id === 1) {
            return {
                'heading': 'Signup',
                'description': 'Millions of offers to grab!. Create your account and get offers delivered to your mail daily!'
            };
        }
    }

    swapLogin() {
        this.setState({
            showLogin: !this.state.showLogin
        });
    }

    goHome() {
        ReactDOM.render(<Introduction ipaddress={this.props.ip} />, document.getElementById('root'));
    }

    render() {
        return (
                <div className="introduction-page-head">       
                    <div className="empty-section_"></div>
                    <div className="introduction-head-image_" onClick={this.goHome.bind(this)}
                    title="Return to home page">
                        <img alt="logo image" src={go} className="logo-image">
                        </img>
                    </div>
                    <div className="introduction-head-name" onClick={this.goHome.bind(this)}
                    title="Return to home page">
                        Mission C
                        <span className="top">Offers for you!!!</span>
                    </div>
                    <div className="introduction-search-box"> 
                        <div className="mobile-searchingbar">
                        <input type="text" placeholder="search deals here..." 
                            title="Search here" className="searching-text_"></input>
                            <button type="button" className="fa fa-search search-but_">

                            </button>
                        </div>
                    </div>

                    <div className="introduction-login">
                        <button type="button" className="login-btn-intro"
                        onClick={this.showLoginSignup.bind(this)}>
                            Login & Sign up
                        </button>
                    </div> 
                    <div className="mode-show" id="mode-show">
                    
                            <Modal visible={this.state.showPopup} border="1px solid blue" 
                            height="50%" width="40%" effect="fadeInDown" 
                            onClickAway={this.hideLoginSignup.bind(this)}>

                                <div className="popup-zone">
                                    <div className="blue-zone" hidden={!this.state.showLogin}>
                                        <div className="blue-zone-heading">
                                            {this.showHeading(0)['heading']}
                                        </div>
                                        <div className="blue-zone-description">
                                            {this.showHeading(0)['description']}
                                        </div>    
                                    </div>
                                    <div className="login-signup-show" hidden={!this.state.showLogin}>
                                        <div className="login-box">
                                            <Login />
                                        </div>
                                        <div className="create-signup-button"
                                        onClick={this.swapLogin.bind(this)}>
                                                Don't have an account ? Create here
                                        </div>
                                    </div>
                                    <div className="blue-zone"  hidden={this.state.showLogin}>
                                        <div className="blue-zone-heading">
                                            {this.showHeading(1)['heading']}
                                        </div>
                                        <div className="blue-zone-description">
                                            {this.showHeading(1)['description']}
                                        </div>    
                                    </div>
                                    <div className="login-signup-show" hidden={this.state.showLogin}>
                                        <div className="login-box">
                                            <SignUp />
                                        </div>
                                        <div className="create-signup-button"
                                        onClick={this.swapLogin.bind(this)}>
                                                Existing user? Login here
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="close-but"
                                onClick={this.hideLoginSignup.bind(this)}>
                                    Close
                                </button>
                                
                            </Modal>
                        </div>
                    <div className="contactus">
                        <button type="button" className="phone-contact">
                            <i className="fa fa-phone"></i>&nbsp;
                            Contact us
                            <p>for business enquiries</p>
                        </button>
                    </div>
                    <div className="more-to-come" id="more-to-come" 
                    onClick={this.changeOnMenuBar.bind(this)}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div> Menu
                    </div>
                    <div className="slideAcross" id="slideAcross">
                        <a href="javascript:void(0)" className="closebtn" 
                        onClick={this.closeNavigation.bind(this)}>
                            &times;
                        </a>
                        <div className="options_button_t">
                            <i className="fa fa-home"></i>
                            <button type="button">Home </button>
                        </div>
                        <div className="options_button_t">
                            <i className="fa fa-user"></i>
                            <button type="button">Login </button>
                        </div>
                        <div className="options_button_t">
                            <i className="fa fa-envelope-square"></i>
                            <button type="button"> Contact us </button>
                        </div>
                    </div>

                </div>)
    }
}

export default HeaderObj;