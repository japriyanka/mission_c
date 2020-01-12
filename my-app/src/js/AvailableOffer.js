import React from 'react';
import './../css/AvailableOffer.css';

class AvailableOffer extends React.Component {
    render() {
        return (
            <div className="available-content">
                <div className="available-content-head">
                    <span className="available-content-head-name">
                        Todays Deals
                    </span>
                    <div className="image-embedded">
                    </div>
                    <div className="show-length">
                    </div>
                </div>
                <hr  className="line-show-but"/>

                <div className="available-content-body">

                </div>
            </div>
        );
    }
}

export default AvailableOffer;