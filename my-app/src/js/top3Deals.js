import React from 'react';
import './../css/TopDeals.css';

class top3Deals extends React.Component {
    render() {
        const style = {
            backgroundImage: `url('${this.props.top3.image}')`
        };

        return (
            <div className="image-top_" style={style}>
            </div>); 
    }

}

export default top3Deals;