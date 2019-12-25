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
        const json_data = {
            'name': 'Taj Agra',
            'address': {
                'street': '119 Brigalow Street',
                'suburb': 'Lyneham',
                'state': 'ACT',
                'country': 'Australia',
                'postcode': '2602'
            },
        };
        /* Details passing from the  Top deals page to the Home page */
        ReactDOM.render(<Home dataPassing={this.state.top3D} />, document.getElementById('root'));
    }

    render() {
        return  (
        <div>
            <div className="topic"> Top Deals </div>
            <div className="three_restuarants">
                {this.state.top3D.map((top_3) => {
                return <Top3 key={top_3.id} top3={top_3} />;
                })};
            </div>
            <button className="get-started" onClick={this.handleClick}>
                Know more
            </button>
        </div>);
    }

}

const Home_1 = () => (
    <BrowserRouter>
    <div>
      <Route path="/" component={Home} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(Home_1, document.getElementById('root'));



export default TopDeals;