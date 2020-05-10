import React, {useState, useEffect} from 'react';
import './../css/Introduction.css';
import TopDeals  from './TopDeals';
import HeaderObj from './HeaderObj';
import Home from './Home';
import ReactDOM from 'react-dom';
import {topDetails} from './../api';
import BusinessContact from './businessContact';

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
                    <BusinessContact />
                </div>
                
            </div>
            <div className="footer-body-city">
                Mission C &copy; 2019
            </div>

        </div>
    );

}

export default IntroductionCity;