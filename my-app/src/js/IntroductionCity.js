import React from 'react';
import './../css/Introduction.css';
import go from './../image/symb.jpeg';
import search from './../image/search.webp';
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

                    
                </div>
                <div className="footer-body-city">
                    Mission C &copy; 2019
                </div>

            </div>
        );
    }

}

export default IntroductionCity;