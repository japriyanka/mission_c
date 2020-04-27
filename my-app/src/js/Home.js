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
import HomeDD from './HomeDD';
import Restuarants from './Restuarants';
import Groceries from './Groceries';
import HeaderObj from './HeaderObj';
import DealsInHome from './DealsInHome';
import MenuItem from '@material-ui/core/MenuItem';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';


class Home extends React.Component {

    city = "Canberra";
    
    goHome() {
        ReactDOM.render(<Hello />, document.getElementById('root'));
    }

    constructor(props) {
        super(props);
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.city = name;
        /*
        setState({
          ...state,
          [name]: event.target.value,
        });
        */
    };

    jumpTo(id) {
        const spaceID = document.getElementById(id);
        if (spaceID) {
            spaceID.scrollIntoView({behavior: "smooth",  block: "start", inline: "nearest"});
        }
    }

    render() {
        return (
            <div className="main-home" id="main-home">
                <div className="tool-bar">
                    <HeaderObj ip={this.props.ip} />
                </div>

                <div className="options-bar">
                    <div className="column-first">
                    </div>
                    <div className="column-second" id="top_id">
                        <div className="options_list_t">
                            <div className="options_name"
                            onClick={this.jumpTo.bind(this, 'top_id')}>
                                Top Deals
                            </div>
                            <div className="options_name"
                            onClick={this.jumpTo.bind(this, 'top_deals_id')}>
                                Restaurants
                            </div>
                            <div className="options_name"
                            onClick={this.jumpTo.bind(this, 'groceries_id')}>
                                Groceries
                            </div> 
                            <div className="last-option"> 
                                <FormControl className="formControl">
                                    <InputLabel id="demo-controlled-open-select-label">Choose City</InputLabel>
                                        <Select 
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        value={this.city}
                                        onChange={this.handleChange}
                                        label="Choose City"
                                        inputProps={{
                                            name: 'city',
                                            id: 'demo-controlled-open-select',
                                        }}
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Sydney</MenuItem>
                                        <MenuItem value={20}>Perth</MenuItem>
                                        <MenuItem value={30}>Melbourne</MenuItem>
                                        </Select>
                                </FormControl>
                            </div>
  
                        </div>
                        <div className="column-second-data">
                            <div className="top-deals-info" id="top_deals_id">
                                <DealsInHome dealsInfo={this.props.dataPassing} type="r" />
                            </div>
                            <div className="restaurant" id="rest_id">
                                <Restuarants ip={this.props.ip} dealsInfo={this.props.dataPassing} type="r" />
                            </div>
                        
                            <div className="groceries" id="groceries_id">
                                <Groceries ip={this.props.ip} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-body">
                    Mission C &copy; 2019
                </div>

                
                
                
            </div>
        );
    }
}

export default Home;


/**
 * <div className="restaurant">
                    <Restuarants dealsInfo={this.props.dataPassing} />
                </div>
                <div className="groceries">
                    <Groceries />
                </div>

 */