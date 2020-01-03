import React from 'react';
import './../css/Groceries.css';
import search from './../image/search.webp';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards';


class Groceries extends React.Component {
    render() {
        return (
        <div className="resturant-section">
            <div className="resturant-heading">
               <span className="resturant-name">
                   Groceries
                </span> 
                <div className="categories">
                    <Dropdown className="dropdown-categories">
                        <Dropdown.Toggle variant="success">
                            Country
                        </Dropdown.Toggle>
                        
                        <Dropdown.Menu>
                            <Dropdown.Item href="/Home">Indian</Dropdown.Item>
                            <hr></hr>
                            <Dropdown.Item href="/Home">Chinese</Dropdown.Item><hr></hr>
                            <Dropdown.Item href="/Home">UK</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div> 
                <div className="search-restuarant">
                    <input type="text" className="search-text_" placeholder="search content here">    
                    </input>
                    
                    <img src={search} className="search-item" />
                </div>
                <div className="empty">
                </div>
                <button className="view-all">
                    View all
                </button>
            </div>

           <div className="groceries-cardspace" id="groceries-cardspace">
              
           </div>
        </div>
        );
    }
}

export default Groceries;