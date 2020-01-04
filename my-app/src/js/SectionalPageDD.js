import React from 'react';
import './../css/SectionalPageDD.css';

class SectionalPageHomeDD extends React.Component {

    constructor(props) {
        super(props);
        this.goToTopDeals = this.goToTopDeals.bind(this);
        this.goToAll = this.goToAll.bind(this);
    }

    goToTopDeals() {
        const topDeals = document.getElementById('scrollable-bar');
        topDeals.scrollIntoView({behavior: "smooth"});
    }

    goToAll() {
        const restAd = document.getElementById('restaurant-ad-section');
        restAd.scrollIntoView({behavior: "smooth"});
    }

    render() {
        return (
            <div className="top-heading-DD">
                <div className="first-bar-DD">
                    <button type="button" className="option-button"
                    onClick={this.goToTopDeals} >
                        Top Deals
                    </button>
                </div>
                <div className="second-bar-DD">
                    <button type="button" className="option-button" 
                    onClick={this.goToAll}>
                       All { this.props.type === "r" ? ' Restaurants' : ' Groceries' }
                    </button> 
                </div>
                <div className="second-bar-DD">
                    <button type="button" className="option-button" 
                    >
                        Switch to { this.props.type === "r" ? 'Groceries' : 'Restaurant' }
                    </button> 
                </div>
            </div>
        );
    }
}


export default SectionalPageHomeDD;
