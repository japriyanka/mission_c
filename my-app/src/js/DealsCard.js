import React from 'react';
import './../css/DealsCard.css';

class DealsCard extends React.Component {
    render() {
        return (
            this.props.dealsInfo.map((deals, index) => {
                if (deals.type === 'r') {
                    return (
                        <div className="cards-deals" id="card-deals-id">
                            <div className="card-image-deals">
                                <img key={index} src={deals.image} className="front-image-deals"/>
                            </div>
                            <div className="card-information-deals">
                                <div className="card-first-deals">
                                    <div className="card-name-deals">
                                        {deals.name}
                                    </div>
                                    <div className="offer-name-deals">
                                        15% off
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
            })
        );
    }
}

export default DealsCard;