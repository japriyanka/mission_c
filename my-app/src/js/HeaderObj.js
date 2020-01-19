import React from 'react';
import './../css/Introduction.css';
import go from './../image/symb.jpeg';
import search from './../image/search.webp';
import Modal from 'react-awesome-modal';
import Login from './Login';
import SignUp from './signUp';



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
        }
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


    render() {
        return (
                <div className="introduction-page-head">       
                    <div className="empty-section">
                    </div>
                    <div className="introduction-head-image_">
                        <img alt="logo image" src={go} className="logo-image">

                        </img>
                    </div>
                    <div className="introduction-head-name">
                        Mission C
                        <span className="top">Offers for you!!!</span>
                    </div>
                    <div className="introduction-search-box">
                        <div className="searching-bar">
                            <img alt="search image" src={search} className="search-img"></img>
                            <input type="text" placeholder=" search here" 
                            title="Search here" className="searching-text"></input>
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
                    <div className="more-to-come" id="more-to-come" 
                    onClick={this.changeOnMenuBar.bind(this)}>
                        More
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>)
    }
}

export default HeaderObj;