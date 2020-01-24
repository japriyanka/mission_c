import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import './../css/HomeDD.css';

class HomeDD extends React.Component {
    
    constructor(props) {
        super(props);
        this.scrollDownToRestuarant.bind(this);
        this.scrollDownToGroceries.bind(this);
    }

    // functions for visiting the neighbour components
    scrollDownToRestuarant() {
        const restSpace = document.getElementById('restuarant-cardspace');
        restSpace.scrollIntoView({behavior: "smooth"});
    }

    scrollDownToGroceries() {
        const grocSpace = document.getElementById('groceries-cardspace');
        grocSpace.scrollIntoView({behavior: "smooth"});
    }

   
    render() {
        return (
            <div className="home-dd-full">
                <div className="home-dd-first-box">
                    <div className="name-box">
                        <div className="image-name-box">
                            <div className="image-src">
                            </div>
                        </div>
                        <div className="name-in-name-box">
                            Sarveshwaran Rajarajan
                        </div>
                       
                    </div>
                    <div className="login-button-box">
                        <button type="button" className="but-login">
                            Top deals
                        </button>
                    </div>
                </div>
                <div className="dd-options-available">
                    <div className="enclosing-options">
                        <button type="button" className="option" 
                        title="click here to scroll top" 
                        onClick={this.scrollDownToRestuarant}>  All (10)  </button>
                    </div>               
                    <div className="enclosing-options">
                        <button type="button" className="option" 
                        title="click here to go to Restuarants section"
                        onClick={this.scrollDownToRestuarant}>  
                        Restaurants (8) </button>
                    </div>                
                    <div className="enclosing-options">
                        <button type="button" className="option" 
                        title="click here to go to Groceries section"
                        onClick={this.scrollDownToGroceries}>  
                        Groceries (8)  </button>
                    </div>        
                </div>
        </div>
        );
    }
}

export default HomeDD;