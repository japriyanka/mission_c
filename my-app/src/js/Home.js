import React, {useState, useEffect} from 'react';

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
import Restuarants from './Restuarants';
import Groceries from './Groceries';
import HeaderObj from './HeaderObj';
import DealsInHome from './DealsInHome';
import MenuItem from '@material-ui/core/MenuItem';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {adsData}  from './../api';


const Home = ({ip, city, topData, cityList}) =>  {

    console.log(cityList);
    const [cityChange, setCityChange] = useState(city);
    const [ads, setAds] = useState([]);


    useEffect(() => {
        const fetchCity = async () => {
            setCityChange(city);
        }
        const fetchAds = async () => {
            setAds(await adsData());
        }
        fetchCity();
        fetchAds();
    }, []);

    function jumpTo(id) {
        const spaceID = document.getElementById(id);
        if (spaceID) {
            spaceID.scrollIntoView({behavior: "smooth",  block: "start", inline: "nearest"});
        }
    }

    function handleCityChange(event) {
        setCityChange(event.target.value);
    }

    console.log(ads);

    return (
        <div className="main-home" id="main-home">
            <div className="tool-bar">
                <HeaderObj ip={ip} />
            </div>

            <div className="options-bar">
                <div className="column-first">
                </div>
                <div className="column-second" id="top_id">
                    <div className="options_list_t">
                        <div className="options_name"
                        onClick={jumpTo.bind(this, 'top_id')}>
                            Top Deals
                        </div>
                        <div className="options_name"
                        onClick={jumpTo.bind(this, 'top_deals_id')}>
                            Restaurants
                        </div>
                        <div className="options_name"
                        onClick={jumpTo.bind(this, 'groceries_id')}>
                            Groceries
                        </div> 
                        <div className="last-option"> 
                            <FormControl className="formControl">
                                <InputLabel id="demo-controlled-open-select-label">Choose City</InputLabel>
                                    <Select 
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    value={cityChange}
                                    onChange={handleCityChange}
                                    label="Choose City"
                                    inputProps={{
                                        name: 'city',
                                        id: 'demo-controlled-open-select',
                                    }}
                                    >
                                    <MenuItem value="" key={0}>
                                        <em>None</em>
                                    </MenuItem>
                                    {cityList.map((cityName, index) => {
                                        return(
                                        <MenuItem key={index} value={cityName}>{cityName}</MenuItem>)
                                    })
                                    }
                                    </Select>
                            </FormControl>
                        </div>

                    </div>
                    <div className="column-second-data">
                        <div className="top-deals-info" id="top_deals_id">
                            <DealsInHome dealsInfo={topData} city={cityChange} type="r" />
                        </div>
                        <div className="restaurant" id="rest_id">
                            <Restuarants ip={ip} dealsInfo={topData} city={cityChange} type="r"
                            ads={ads} />
                        </div>
                    
                        <div className="groceries" id="groceries_id">
                            <Groceries ip={ip} city={cityChange} dealsInfo={topData} type="g" 
                            ads={ads} />
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

export default Home;


/**
 * <div className="restaurant">
                    <Restuarants dealsInfo={this.props.dataPassing} />
                </div>
                <div className="groceries">
                    <Groceries />
                </div>

 */