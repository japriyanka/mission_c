import React from 'react';
import ReactDOM from 'react-dom';

import Top3 from './top3Deals';
import Home from './Home';
import './../css/TopDeals.css';
import {
    BrowserRouter,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class TopDeals extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            top3D: [],
        };
        // Binding is required to pass the state variables to the other components
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch("http://"+this.props.ip+"/details.json")
        .then ((response) => response.json())
        .then ((data) => { 
            this.setState({
                top3D: data,
            });
        });        
    }

    scrollLeftTop() {
        const direction = 'left';
        const step = 10;
        const distance = 200;
        let scrollAmount = 0;
        const element = document.getElementById('three_restuarants_');
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

    scrollRightTop() {
        const direction = 'right';
        const step = 10;
        const distance = 200;

        let scrollAmount = 0;
        const element = document.getElementById('three_restuarants_');
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


    handleClick() {
        /* Details passing from the  Top deals page to the Home page */
        ReactDOM.render(<Home ip={this.props.ip} dataPassing={this.state.top3D} />, document.getElementById('root'));
    }



    render() {
        return  (
        <div id={this.props.id + "_id"} className="top-deals-whole-body">
          
            <div className="top-deals-head">
                <div className="topic"> 
                   {this.props.name}
                </div>
                <div className="empty-topic"></div>
              
                <div className="see-allT" title="scroll left">
                    <button type="button" className="see-all-butT"
                    onClick={this.scrollLeftTop.bind(this)}>
                        <i className="fa fa-caret-left"></i>
                    </button>
                </div>
                
                
                <div className="see-allT" title="scroll right">
                    <button type="button" className="see-all-butT"
                    onClick={this.scrollRightTop.bind(this)}>
                        <i className="fa fa-caret-right"></i>
                    </button>
                </div>
                <div className="text-all">
                    <button className="btn btn-success see-all-textT" onClick={this.handleClick}>
                        SEE ALL
                    </button>
                </div>
              
            </div>

            <div className="three_restuarants12_" id="three_restuarants_">
                {this.state.top3D.map((top_3, index) => {
                return (<img src={top_3.image} key={index} className="image-top_"/>)
                })}
            </div>

            
        </div>)
    }

}

/* Dummy code */
const Home_1 = () => (
    <BrowserRouter>
    <div>
      <Route path="/" component={Home} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(Home_1, document.getElementById('root'));



export default TopDeals;


/**
 * <div className="get-started">
                <button className="but-started" title="grab more offers" 
                onClick={this.handleClick}>
                    Grab more offers...
                </button>
            </div>
 */