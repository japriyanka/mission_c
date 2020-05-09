import React, {useState, useEffect} from 'react';
import './../css/Discover.css';
import {cityList, suburbsList, cuisineList} from './../api';
import { FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styles from './../css/Discover.css';



const Discover = ({handleCityChange, handleSuburbChange, handleCuisineChange}) => {

    const [fetchCity, setFetchCity] = useState([]);
    const [fetchSuburb, setFetchSuburb] = useState([]);
    const [fetchCuisine, setFetchCuisine] = useState([]);


    let cityError = false;
    let suburbError = false;
    let cuisineError = false;

    useEffect(() => {
        const fetchCityName = async () => {
            setFetchCity(await cityList());
        }
        const fetchSuburbsList = async () => {
            setFetchSuburb(await suburbsList());
        }
        const fetchCuisinesList = async () => {
            setFetchCuisine(await cuisineList());
        }
        fetchCityName();
        fetchSuburbsList();
        fetchCuisinesList();
    }, []);


    return (
        <div className="discover-entire-body">
          
            <div className="discover-entire-body-head">
                <div className="discover-text">
                    Discover best deals near your place
                        <i> for Restaurants & Groceries</i>
                </div>
            </div>
                                    
            <div className="discover-entire-body-bottom">
                <div className="discover-entire-body-bottom-search">
                    <div className="dropdown-box-cuisine">
                        <FormControl >
                                <Autocomplete
                                    id="country-select-demo"
                                    style={styles.widthOption}
                                    options={fetchCity}
                                    classes={{
                                        option: styles.FormControl,
                                    }}
                                    autoHighlight
                                    getOptionLabel={(option) => `${option}`}
                                    onChange={(event, option) => handleCityChange(option)}
                                    renderOption={(option) => (
                                        <React.Fragment>
                                            <span>{option}</span> 
                                        </React.Fragment>
                                    )}
                                    renderInput={(params) => (
                                        <TextField
                                        {...params}
                                        label="City"
                                        variant="outlined"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'new-password', // disable autocomplete and autofill
                                        }}
                                        />
                                    )}
                                />
                            </FormControl>
                            <div className="error" hidden={!cityError}>
                                &#9888; Enter City
                            </div>
                    </div>
                    <div className="dropdown-box-cuisine">
                        <FormControl >
                                <Autocomplete
                                    id="country-select-demo"
                                    style={styles.widthOption}
                                    options={fetchSuburb}
                                    classes={{
                                        option: styles.FormControl,
                                    }}
                                    autoHighlight
                                    getOptionLabel={(option) => `${option}`}
                                    onChange={(event, option) => handleSuburbChange(option)}
                                    renderOption={(option) => (
                                        <React.Fragment>
                                            <span>{option}</span> 
                                        </React.Fragment>
                                    )}
                                    renderInput={(params) => (
                                        <TextField
                                        {...params}
                                        label="Suburb"
                                        variant="outlined"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'new-password', // disable autocomplete and autofill
                                        }}
                                        />
                                    )}
                                />
                            </FormControl>
                    </div>
                    <div className="dropdown-box-cuisine">
                        <FormControl >
                                <Autocomplete
                                    id="country-select-demo"
                                    style={styles.widthOption}
                                    options={fetchCuisine}
                                    classes={{
                                        option: styles.FormControl,
                                    }}
                                    autoHighlight
                                    getOptionLabel={(option) => `${option}`}
                                    onChange={(event, option) => handleCuisineChange(option)}
                                    renderOption={(option) => (
                                        <React.Fragment>
                                            <span>{option}</span> 
                                        </React.Fragment>
                                    )}
                                    renderInput={(params) => (
                                        <TextField
                                        {...params}
                                        label="Cuisine"
                                        variant="outlined"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'new-password', // disable autocomplete and autofill
                                        }}
                                        />
                                    )}
                                />
                            </FormControl>
                    </div>
                    </div>
                    <div className="search_box_discover">
                        <input type="text" className="search-box-dis"
                        placeholder=" search by restaurant or grocery store name"></input>
                        <div className="know-more">
                            <button type="button" className="grab-button">
                                Grab Deals
                            </button>
                        </div>
                    </div>
            </div>
            
            
        </div>
        );
    }

export default Discover;