import React, {useState, useEffect} from 'react';
import './../css/Introduction.css';
import TopDeals  from './TopDeals';
import HeaderObj from './HeaderObj';
import Home from './Home';
import ReactDOM from 'react-dom';
import {topDetails} from './../api';

const IntroductionCity = ({ip, name, cityList}) => {

    const [topData, setTopData] = useState([]);

    useEffect(() => {
        const fetchTopData = async () => {
            setTopData(await topDetails(ip, name));
        }
        fetchTopData();
    }, [topData]);

     
    function scrollHome() {
        if (!topData) {
            return;
        }
        /**{ip, city, topData, cityList} */
        ReactDOM.render(<Home ip={ip} topData={topData} cityList={cityList} city={name} />, 
            document.getElementById('root'));
    }
    return (
        <div className="introduction-page">
            <HeaderObj ip={ip} />
            <div className="introduction-page-body">
                
                <div className="discover-intro-body">
                    <div className="discover-name">
                        <div className="discover_name_first">
                            Discover exclusive deals in {name}
                        </div>
                        <div className="discover_name_second">
                            <button type="button" className="btn btn-success view-home-btn"
                                onClick={scrollHome}>
                                View Home 
                            </button>
                        </div>
                    </div>
                   
                </div>
                
                <div className="top-deals-body">
                    <TopDeals ip={ip} id="top_deals" name="Top Deals" topData={topData} />
                </div>
                <div className="top-deals-body">
                    <TopDeals ip={ip} id="latest_deals" name="Latest Offers" topData={topData}/>

                </div>
                <div className="top-deals-body">
                    <TopDeals ip={ip} id="daily_offers" name="Daily Offers" topData={topData} />

                </div>
                <div className="top-deals-body">
                    <TopDeals ip={ip} id="weekend_deals" name="Weekend exclusive offers"
                    topData={topData} />
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

export default IntroductionCity;