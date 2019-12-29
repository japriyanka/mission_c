import React from 'react';
import './../css/Restuarants.css';
import search from './../image/search.webp';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards';


import left from './../image/left.png';
import right from './../image/right.png';


class Restuarants extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restuarants: []
        };
    }

    componentDidMount() {
        fetch("http://localhost/restuarants.json")
        .then ((response) => response.json())
        .then ((data) => { 
            console.log(data);
            this.setState({
                restuarants: data,
            });
        });        
    }

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
                <button type="button" className="view-all">
                    View all
                </button>
            </div>

           <div className="restuarant-cardspace" id="restuarant-cardspace">
               <div className="left-indicator">
                   <img src={left} className="image-navigation-left">
                   </img>
               </div>
               <div className="center-cards">
                   <Cards cardInfo={this.state.restuarants} />
               </div>
               <div className="right-indicator">
                   <img src={right} className="image-navigation-right">
                   </img>
               </div>
           </div>
        </div>
        );
    }
}

export default Restuarants;