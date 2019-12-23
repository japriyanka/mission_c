import React from 'react';
import './../css/TopDeals.css';
import './../css/Home.css';
import ToolBar from './ToolBar';

import {
    BrowserRouter,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
  import Hello from './Hello';
  import ReactDOM from 'react-dom';


class Home extends React.Component {

    goHome() {
        ReactDOM.render(<Hello />, document.getElementById('root'));
    }

    render() {
        return (
            <div className="main-home">
                <div className="tool-bar">
                    <ToolBar name="Guest" />
                </div>
                <div className="deals-bar">

                </div>
                <div className="options-bar">

                </div>
                <div className="restuarant">

                </div>
                <div className="groceries">

                </div>
            </div>
        );
    }
}

export default Home;