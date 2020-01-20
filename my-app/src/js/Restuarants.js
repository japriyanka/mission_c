import React from 'react';
import './../css/Restuarants.css';
import search from './../image/search.webp';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards';
import ReactDOM from 'react-dom';


import left from './../image/left.png';
import right from './../image/right.png';
import SectionalPageHome from './SectionalPageHome';


class Restuarants extends React.Component {

    component_mount = false;
    constructor(props) {
        super(props);
        this.state = {
            restuarants: []
        };
        this.passToSectionalPage = this.passToSectionalPage.bind(this);
    }

    componentDidMount() {
        this.component_mount = true;
        fetch("http://localhost/restuarants.json")
        .then ((response) => response.json())
        .then ((data) => { 
            console.log(data);
            this.setState({
                restuarants: data,
            });
        });        
    }

    passToSectionalPage() {
        console.log('coming here');
        if (this.component_mount) {
          ReactDOM.render(<SectionalPageHome dealsInfo={this.props.dealsInfo} 
            restuarantInfo={this.state.restuarants} type="r"  />, 
            document.getElementById('root'));
        }
    }

    render() {
        return (
        <div className="restaurant-section_">
            <div className="resturant-heading_">
               <span className="resturant-name_">
                   Restaurants
                </span> 
                <div className="categories_">
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
                <div className="view-all-but">
                    <button type="button" className="view-all_"
                    onClick={this.passToSectionalPage}
                    title="visit all">
                        <i className="fa fa-caret-top jik"></i>
                        View all
                    </button>
                </div>
              
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