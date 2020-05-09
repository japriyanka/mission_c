import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './../css/AvailableCity.css';



const Dummy = ({name}) => {
    const [cityName, setCityName] = useState(name);

    console.log(cityName);
    
    useEffect(() => {
        const fetchCityName = async() => {
            setCityName(name);
        }
        fetchCityName();
    }, [name]);

    return (
        <div className="available-city-full-body">
            {cityName}
        </div>
    )
}


export default Dummy;