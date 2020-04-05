import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/HomeDD.css';

class HomeDD extends React.Component {
    
    constructor(props) {
        super(props);
        this.scrollDownToRestuarant.bind(this);
        this.scrollDownToGroceries.bind(this);
        this.scrollDownToTop.bind(this);
        this.hideOptionsDD = this.hideOptionsDD.bind(this);
    }

    hideOptionsDD() {
        const inverseOptions = document.getElementById('dd-options-available');
        if (inverseOptions.style.display === 'block') {
            inverseOptions.style.display = 'none';
        } else {
            inverseOptions.style.display = 'block';
        }
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

    scrollDownToTop() {
        const grocSpace = document.getElementById('cards-deals-home');
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
                            Edit your interests
                        </button>
                    </div>
                </div>
                <div className="bar-DD-heading-t" onClick={this.hideOptionsDD.bind(this)}>
                    Categories
                </div>
           
                <div className="dd-options-available" id="dd-options-available">
                    <div className="enclosing-options">
                        <button type="button" className="option" 
                        title="click here to scroll top" 
                        onClick={this.scrollDownToTop}>  All (10)  </button>
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