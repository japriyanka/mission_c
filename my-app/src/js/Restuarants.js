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
        this.scrollLeftRestaurant = this.scrollLeftRestaurant.bind(this);
        this.scrollRightRestaurant = this.scrollRightRestaurant.bind(this);
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

    scrollLeftRestaurant() {
        const direction = 'left';
        const step = 10;
        const distance = 200;
        let scrollAmount = 0;
        const element = document.getElementById('center-cards');
        if(element !== null) {
            var slideTimer = setInterval(function(){
                if (direction == 'left'){
                    element.scrollLeft -= step;
                } else {
                    element.scrollLeft += step;
                }
                scrollAmount += step;
                if(scrollAmount >= distance){
                    window.clearInterval(slideTimer);
                }
            }, 30);
        }
    }

    scrollRightRestaurant() {
        const direction = 'right';
        const step = 10;
        const distance = 200;

        let scrollAmount = 0;
        const element = document.getElementById('center-cards');
        if(element !== null) {
            var slideTimer = setInterval(function(){
                if (direction == 'left'){
                    element.scrollLeft -= step;
                } else {
                    element.scrollLeft += step;
                }
                scrollAmount += step;
                if(scrollAmount >= distance){
                    window.clearInterval(slideTimer);
                }
            }, 30);
        }       
    }

    render() {
        const leftValue = '<';
        const rightValue = '>';
        return (
        <div className="restaurant-section_">
            <div className="resturant-heading_">
               <div className="resturant-name_">
                   Restaurants
                </div> 
                <div className="view-all-but">
                    <button type="button" className="view-all_"
                    onClick={this.passToSectionalPage}
                    title="visit all">
                        View more
                    </button>
                </div>
              
            </div>

           <div className="restuarant-cardspace" id="restuarant-cardspace">
                <div className="left-indicator">
                    <button type="button" className="left"
                    title="scroll left" onClick={this.scrollLeftRestaurant}>
                    {leftValue}
                    </button>
                </div>
                <div className="center-cards">
                    <Cards cardInfo={this.state.restuarants} from="home" />
                </div>
                <div className="left-indicator" >
                    <button type="button" className="left"
                    title="scroll right" onClick={this.scrollRightRestaurant}>
                    {rightValue}
                    </button>
                </div>
              
           </div>
        </div>
        );
    }
}

export default Restuarants;


/*
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
                </div>  */