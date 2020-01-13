import React from 'react';
import './../css/AvailableOffer.css';
import celebration from './../image/celebration.jpg';

class AvailableOffer extends React.Component {
    render() {
        return (
            <div className="available-content">
                <div className="available-content-head">
                    <span className="available-content-head-name">
                        Today's Deals
                        <img src={celebration} className="celeb-image">
                        </img>
                    </span>
                    <div className="map-go">
                        <button type="button" className="btn btn-success">
                            Map
                        </button>
                    </div>
                </div>
                <hr  className="line-show-but"/>
                <div className="available-content-body">
                    {this.props.offerShow.map((offer, index) => {
                        return (
                        <div className="available-offer-body">
                            <div className="available-offer-body-num">
                                {index + 1} | 
                            </div>
                            <div className="available-offer-body-desc">
                                 {offer.Description}
                            </div>
                            <div className="available-offer-body-button">
                                 <button type="button" className="view-but-available">
                                     Redeem
                                 </button>
                            </div>
                        </div>)
                    })}

                </div>
            </div>
        );
    }
}

export default AvailableOffer;