import React from 'react';
import './../css/Introduction.css';
import Discover from './Discover';
import AvailableCity from './AvailableCity';
import HeaderObj from './HeaderObj';

class Introduction extends React.Component {


    render() {
        const listNames = ['Canberra', 'Perth', 'Sydney', 'Canberra', 'Perth', 'Sydney'];
        const cuisineList = ['Thai', 'Indian', 'Korean', 'Thai', 'Indian', 'Korean'];
        return (
            <div className="introduction-page">
                <HeaderObj />
                <div className="introduction-page-body">
                    <div className="discover-intro-body">
                        <Discover />
                    </div>
                    <div className="available-city-body">
                        <AvailableCity name="Cities" listNames={listNames} />
                    </div>
                    <div className="available-city-body">
                        <AvailableCity name="Cuisines" listNames={cuisineList} />
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
                <div className="footer-body">
                    Mission C &copy; 2019
                </div>

            </div>
        );
    }

}

export default Introduction;