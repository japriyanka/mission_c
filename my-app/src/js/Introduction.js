import React from 'react';
import './../css/Introduction.css';
import Discover from './Discover';
import AvailableCity from './AvailableCity';
import HeaderObj from './HeaderObj';

class Introduction extends React.Component {


    render() {
        return (
            <div className="introduction-page">
                <HeaderObj />
                <div className="introduction-page-body">
                    <div className="discover-intro-body">
                        <Discover />
                    </div>
                    <div className="available-city-body">
                        <AvailableCity />
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
                <div className="footer-body">
                    Mission C &copy; 2019
                </div>

            </div>
        );
    }

}

export default Introduction;