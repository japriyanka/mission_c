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

 
    render() {
        return (
            <div className="introduction-page">
                <HeaderObj />
                <div className="introduction-page-body">
                    <div className="discover-intro-body">
                        <Discover />
                    </div>
                    <div className="top-deals-body">
                        <TopDeals name="Top Deals" />
                    </div>
                    <div className="top-deals-body">
                        <TopDeals name="Latest Offers" />

                    </div>
                    <div className="top-deals-body">
                        <TopDeals name="Daily Offers" />

                    </div>
                    <div className="top-deals-body">
                        <TopDeals name="Weekend exclusive offers" />
                    </div>
                    <div className="register-business">
                        <div className="register-business-head">
                            Own a business ? Register here
                        </div>
                        <div className="register-business-body">
                            <p>
                                Get access to reach more customers near your business without much efforts and advertisements.
                                We help you advertise your offers to customers and bring them to you. Want to more know ? 
                                Connect with us 
                            </p>
                            <button type="button" className="business-card">
                                Add your business
                            </button>

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