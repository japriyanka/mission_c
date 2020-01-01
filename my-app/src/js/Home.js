import React from 'react';
import ReactDOM from 'react-dom';

/* Importing the relevant CSS files */
import './../css/TopDeals.css';
import './../css/Home.css';


import {
    BrowserRouter,
    Link,
    Route,
    Switch,
} from 'react-router-dom';

/* Importing the class for different sections in the page */
import ToolBar from './ToolBar';
import Hello from './Hello';
import DealsBar from './DealsBar';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import HomeDD from './HomeDD';
import Restuarants from './Restuarants';
import Groceries from './Groceries';
import Jaa from './Jaa';


class Home extends React.Component {

    goHome() {
        ReactDOM.render(<Hello />, document.getElementById('root'));
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-home">
                <div className="tool-bar">
                    <ToolBar name="Guest" />
                </div>
                <div className="deals-bar">
                    <br></br>
                    <DealsBar data={this.props.dataPassing} />
                </div>
                <div className="options-bar">
                    <HomeDD />
                </div>
                <div className="restuarant">
                    <Restuarants />
                </div>
                <div className="groceries">
                    <Groceries />
                </div>
                <div>
                    <Jaa />
                </div>
            </div>
        );
    }
}

export default Home;