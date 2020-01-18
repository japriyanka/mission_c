import React from 'react';
import './../css/Discover.css';
import flower from './../image/flower.jpg';
import Dropdown from 'react-bootstrap/Dropdown';


class Discover extends React.Component {
    render() {
        return (

            <div className="discover-entire-body">
                <link rel="stylesheet" 
                 href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                </link>
               <div className="discover-entire-body-head">
                   <div className="discover-text">
                       Discover best deals near your place
                          <i> for Restaurants & Groceries</i>
                   </div>
                  
               </div>
                                          

               <div className="discover-entire-body-bottom">
                   <div className="discover-entire-body-bottom-search">
                       <div className="dropdown-box-cuisine">
                            <button className="city-text">City / Town
                            <i className="fa fa-caret-down"></i>
                            </button>

                            <div className="show-dropdown-city">
                                <a href="#">Canberra</a>
                                <a href="#">Sydney</a>
                            </div>
                       </div>
                       <div className="dropdown-box-cuisine">
                            <button className="city-text">Suburb
                            <i className="fa fa-caret-down"></i>
                            </button>

                            <div className="show-dropdown-city">
                                <a href="#">City</a>
                                <a href="#">Braddon</a>
                            </div>
                       </div>
                       <div className="dropdown-box-cuisine">
                            <button className="city-text">Cuisine
                            <i className="fa fa-caret-down"></i>
                            </button>

                            <div className="show-dropdown-city">
                                <a href="#">Thai</a>
                                <a href="#">Indian</a>
                            </div>
                       </div>
                       
                       <input type="text" className="search-box-dis"
                       placeholder=" search by restaurant or grocery store name"></input>
                       <div className="know-more">
                   <button type="button" className="grab-button">
                       Grab deals
                   </button>
               </div>
                   </div>
               </div>
             
               
            </div>
        );
    }
}

export default Discover;