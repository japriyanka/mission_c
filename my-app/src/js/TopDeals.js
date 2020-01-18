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
        fetch("http://localhost/details.json")
        .then ((response) => response.json())
        .then ((data) => { 
            this.setState({
                top3D: data,
            });
        });        
    }

    handleClick() {
        /* Details passing from the  Top deals page to the Home page */
        ReactDOM.render(<Home dataPassing={this.state.top3D} />, document.getElementById('root'));
    }

    render() {
        return  (
        <div className="top-deals-whole-body">
            <div className="top-deals-head">
                <div className="topic"> 
                   {this.props.name}
                </div>
                
                <div className="topic-option">
                    <button className="city-text-topic">
                        Restaurant
                        <i className="fa fa-caret-down"></i>
                    </button>

                    <div className="show-type-option">
                        <a href="#" >Restaurant</a>
                        <a href="#">Groceries</a>
                    </div>
                </div>
                <div className="empty-topic">

                </div>
                <div className="see-all-text">
                       NAVIGATE
                    </div>
                    <div className="see-all">
                        <button type="button" className="see-all-but">
                            <i className="fa fa-caret-left"></i>
                        </button>
                    </div>
                    <div className="see-all">
                        <button type="button" className="see-all-but">
                            <i className="fa fa-caret-right"></i>
                        </button>
                    </div>
            </div>
            <hr className="line-show"></hr>

            <div className="three_restuarants_">
                {this.state.top3D.map((top_3) => {
                return (<Top3 key={top_3.id} top3={top_3} />)
                })}
            </div>

            <div className="get-started">
                <button className="but-started" onClick={this.handleClick}>
                    Know more
                </button>
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