import React from 'react';
import './../css/SectionalPageDD.css';

class SectionalPageHomeDD extends React.Component {

    render() {
        return (
            <div className="top-heading-DD">
                <div className="first-bar-DD">
                    <button type="button" className="option-button" >
                        Top Deals
                    </button>
                </div>
                <div className="second-bar-DD">
                    <button type="button" className="option-button" >
                        { this.props.type === "r" ? 'Restuarants' : 'Groceries' } Available
                    </button> 
                </div>
                <div className="second-bar-DD">
                    <button type="button" className="option-button" >
                        Switch to { this.props.type === "r" ? 'Groceries' : 'Restuarant' }
                    </button> 
                </div>
            </div>
        );
    }
}


export default SectionalPageHomeDD;
