import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


import './../css/HomeDD.css';

class HomeDD extends React.Component {
    render() {
        return (
            <div className="dropdownBox">
                <div className="dropdownBox1">
                    <div className="enclosing-options">
                        <button type="button" className="btn btn-primary option" title="click here to scroll top">  All (10) </button>
                    </div>                
                </div>
                <div className="dropdownBox2">
                    <div className="enclosing-options">
                        <button type="button" className="btn btn-primary option" title="click here to go to Restuarants section">  Resturants (8) </button>
                    </div>                
                </div>
                <div className="dropdownBox3">
                <div className="enclosing-options">
                        <button type="button" className="btn btn-primary option" title="click here to go to Groceries section">  Groceries (8)  </button>
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