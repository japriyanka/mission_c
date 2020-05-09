import React, {useState, useEffect} from 'react';
import './../css/Restuarants.css';
import Cards from './Cards';
import ReactDOM from 'react-dom';
import SectionalPageHome from './SectionalPageHome';
import {restaurantData} from './../api';

const Restuarants = ({ip, city, dealsInfo, type, ads}) => {

    const [restData, setRestData] = useState([]);

    useEffect(() => {
        const restDataFunction = async () => {
            setRestData(await restaurantData(ip, city));
        }
        restDataFunction();
    }, []);

    const leftValue = '<';
    const rightValue = '>';

    function passToSectionalPage() {
        ReactDOM.render(<SectionalPageHome ip={ip} name={city} listData={restData} type="r"  ads={ads} />, 
        document.getElementById('root'));
        
    }

    function scrollLeftRestaurant() {
        const direction = 'left';
        const step = 10;
        const distance = 200;
        let scrollAmount = 0;
        const element = document.getElementById('center-cards');
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

    function scrollRightRestaurant() {
        const direction = 'right';
        const step = 10;
        const distance = 200;

        let scrollAmount = 0;
        const element = document.getElementById('center-cards');
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

    return (
    <div className="restaurant-section_">
        <div className="resturant-heading_">
            <div className="resturant-name_">
                Restaurants  ({city})
            </div> 
            <div className="view-all-but">
                <button type="button" className="view-all_"
                onClick={passToSectionalPage}
                title="visit all">
                    View more
                </button>
            </div>
            
        </div>

        <div className="restuarant-cardspace" id="restuarant-cardspace">
            <div className="left-indicator">
                <button type="button" className="left"
                title="scroll left" onClick={scrollLeftRestaurant}>
                {leftValue}
                </button>
            </div>
            <div className="center-cards">
                <Cards cardInfo={restData} from="home" searchValue="" />
            </div>
            <div className="left-indicator" >
                <button type="button" className="left"
                title="scroll right" onClick={scrollRightRestaurant}>
                {rightValue}
                </button>
            </div>
            
        </div>
    </div>
    );
}

export default Restuarants;
