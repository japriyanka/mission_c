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
                    <div className="top-deals-body">

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