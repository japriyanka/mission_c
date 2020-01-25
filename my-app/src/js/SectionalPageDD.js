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
        // topDeals.scrollIntoView({behavior: "smooth"});
    }

    goToAll() {
        const restAd = document.getElementById('restaurant-ad-section');
        // restAd.scrollIntoView({behavior: "smooth"});
    }

    render() {
        return (
            <div className="top-heading-DD">
                <div className="bar-DD-heading">
                    Options
                </div>
                <hr></hr>
                
                <div className="bar-DD">
                    <button type="button" className="option-button_"
                    onClick={this.goToTopDeals} >
                        Top Deals
                    </button>
                </div>
                <div className="bar-DD">
                    <button type="button" className="option-button_" 
                    onClick={this.goToAll}>
                       { this.props.type === "r" ? ' Restaurants' : ' Groceries' }
                    </button> 
                </div>
                <div className="bar-DD">
                    <button type="button" className="option-button_">
                        More sections &#10148;
                    </button> 
                </div>
              
            </div>
        );
    }
}


export default SectionalPageHomeDD;


/** Design arrows:
 * https://www.toptal.com/designers/htmlarrows/arrows/
 */