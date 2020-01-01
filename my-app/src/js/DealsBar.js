import React from 'react';
import './../css/DealsBar.css';
import { Carousel } from 'react-responsive-carousel';
import Cards from './Cards';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import {
    BrowserRouter,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
  import Hello from './Hello';
  import ReactDOM from 'react-dom';
import { valueToNode } from '@babel/types';


class DealsBar extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {

        return (
            /* Thanks to NPMJS.  Referred from ,
            *  https://www.npmjs.com/package/react-responsive-carousel
            */
        <div>
            <div hidden={this.props.hideIt} >
                <Carousel autoPlay showThumbs={false} infiniteLoop={true} transitionTime={300}>
                    <div className="sliding-window">
                        <img src={this.props.data[0].image} key={this.props.data[0].id} 
                        alt={this.props.data[0].name} className="deals" /> 
                    </div>
                    <div className="sliding-window">
                        <img src={this.props.data[1].image} key={this.props.data[1].id} 
                        alt={this.props.data[1].name} className="deals" /> 
                    </div>
                    <div className="sliding-window">
                        <img src={this.props.data[2].image} key={this.props.data[2].id} 
                        alt={this.props.data[2].name} className="deals" /> 
                    </div>  
                </Carousel>
            </div>
        </div>
        
        );
    }
}

export default DealsBar;
