import React from 'react';
import './../css/Restuarants.css';
import search from './../image/search.webp';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

class Restuarants extends React.Component {
    render() {
        return (
        <div className="resturant-section">
            <div className="resturant-heading">
               <span className="resturant-name">
                   Restuarants
                </span> 
                <div class="categories">
                    <Dropdown className="dropdown-categories">
                        <Dropdown.Toggle variant="success">
                            Cuisine
                        </Dropdown.Toggle>
                        
                        <Dropdown.Menu>
                            <Dropdown.Item href="/Home">Indian</Dropdown.Item>
                            <hr></hr>
                            <Dropdown.Item href="/Home">Thai</Dropdown.Item><hr></hr>
                            <Dropdown.Item href="/Home">Korean</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div> 
                <div className="search-restuarant">
                    <input type="text" className="search-text_" placeholder="search content here">    
                    </input>
                    
                    <img src={search} className="search-item" />
                </div>
                <div class="empty">
                    
                </div>
                <button className="view-all">
                    View all
                </button>
            </div>

           <div class="restuarant-cardspace">
               Display the cards here
           </div>
        </div>
        );
    }
}

export default Restuarants;