import React from 'react';
import './../css/Introduction.css';
import Discover from './Discover';
import TopDeals  from './TopDeals';
import HeaderObj from './HeaderObj';


class IntroductionCity extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginSignUpShow: false
        };
      
        this.changeOnMenuBar = this.changeOnMenuBar.bind(this);
    }

    changeOnMenuBar(divTemp) {

      const barMenu = document.getElementById('more-to-come');
      if(barMenu.className === 'change') {
          barMenu.className = 'more-to-come';
      } else {
        barMenu.className = 'change';
      }
    }

    switchActive(id) {
        if (id === 0) {
            document.getElementById('restaurant').className="city-text-topic active";
            document.getElementById('groceries').className="city-text-topic";
        } else if (id === 1) {
            document.getElementById('restaurant').className="city-text-topic";
            document.getElementById('groceries').className="city-text-topic active";
        }

    }
 
    render() {
        return (
            <div className="introduction-page">
                <HeaderObj ip={this.props.ip} />
                <div className="introduction-page-body">
                    <div className="discover-intro-body">
                        <Discover />
                    </div>
                  
                    <div className="top-deals-body">
                        <TopDeals ip={this.props.ip} id="top_deals" name="Top Deals" />
                    </div>
                    <div className="top-deals-body">
                        <TopDeals ip={this.props.ip} id="latest_deals" name="Latest Offers" />

                    </div>
                    <div className="top-deals-body">
                        <TopDeals ip={this.props.ip} name="Daily Offers" />

                    </div>
                    <div className="top-deals-body">
                        <TopDeals ip={this.props.ip} name="Weekend exclusive offers" />
                    </div>
                    <div class="style_business_information">
                        <div className="register-business">
                            <div className="register-business-head">
                                Register your business
                            </div>
                            <div className="register-business-body">
                                <p>
                                    Get access to reach more customers near your business without much efforts and advertisements.
                                    We help you advertise your offers to customers and bring them to you. 
                                    Want to more know ? <br></br> 
                                </p>
                                <div className="center_button">
                                    Contact us <br></br>
                                    <button type="button" className="business-card">
                                        Add your business
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="register-business">
                            <div className="register-business-head">
                                Already our Mission Partner ? 
                            </div>
                            <div className="register-business-body">
                                <p>
                                    Thanks for continuous support and believing in us.
                                    Working harder everyday to give you the best service possible 
                                </p>
                                <br></br>
                                <div className="center_button">
                                    Login here <br></br>
                                    <button type="button" className="business-card">
                                        Login to existing account
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
                <div className="footer-body-city">
                    Mission C &copy; 2019
                </div>

            </div>
        );
    }

}

export default IntroductionCity;