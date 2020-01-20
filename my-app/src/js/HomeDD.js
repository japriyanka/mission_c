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
            <div className="dropdownBox">
                <div className="dropdownBox1">
                    <div className="enclosing-options">
                        <button type="button" className="option" 
                        title="click here to scroll top" 
                        onClick={this.scrollDownToRestuarant}>  All (10)  </button>
                    </div>               
                </div>
                <div className="dropdownBox2">
                    <div className="enclosing-options">
                        <button type="button" className="option" 
                        title="click here to go to Restuarants section"
                        onClick={this.scrollDownToRestuarant}>  
                        Restaurants (8) </button>
                    </div>                
                </div>
                <div className="dropdownBox3">
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


/*
 * Usage of Dropdown 
 <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic_1">
                        Restuarants
                    </Dropdown.Toggle>
                    
                    <Dropdown.Menu>
                        <Dropdown.Item href="/Home">Action</Dropdown.Item>
                        <Dropdown.Item href="/Home">Another action</Dropdown.Item>
                        <Dropdown.Item href="/Home">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown> 
 */