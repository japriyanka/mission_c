import React from 'react';
import './../css/SectionalPageDD.css';

class SectionalPageHomeDD extends React.Component {

    constructor(props) {
        super(props);
        this.goToTopDeals = this.goToTopDeals.bind(this);
        this.goToAll = this.goToAll.bind(this);
        this.goMoreCategories = this.goMoreCategories.bind(this);
    }

    goToTopDeals() {
        const topDeals = document.getElementById('top-deals-bar');
        topDeals.scrollIntoView({behavior: "smooth"});
    }

    goToAll() {
        const restAd = document.getElementById('sectional-view-id');
        restAd.scrollIntoView({behavior: "smooth"});
    }

    goMoreCategories() {
        const otherCategory = document.getElementById('other-category-full-body');
        otherCategory.scrollIntoView({behavior: "smooth"});
    }

    render() {
        return (
            <div className="top-heading-DD">            
                <div className="bar-DD">
                    <button type="button" className="option-button_" 
                    onClick={this.goToAll}>
                       { this.props.type === "r" ? ' Restaurants' : ' Groceries' }
                    </button> 
                </div>
                <div className="bar-DD">
                    <button type="button" className="option-button_"
                    onClick={this.goMoreCategories}>
                        More Categories
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