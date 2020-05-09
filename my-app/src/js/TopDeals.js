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

const TopDeals = ({id, ip, name, topData}) =>  {

    function scrollLeftTop() {
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

    function scrollRightTop() {
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


    function handleClick() {
        /* Details passing from the  Top deals page to the Home page */
        ReactDOM.render(<Home ip={ip} dataPassing={topData} />, 
            document.getElementById('root'));
    }



        return  (
        <div id={id + "_id"} className="top-deals-whole-body">
          
            <div className="top-deals-head">
                <div className="topic"> 
                   {name}
                </div>
                <div className="empty-topic"></div>
              
                <div className="see-allT" title="scroll left">
                    <button type="button" className="see-all-butT"
                    onClick={scrollLeftTop}>
                        <i className="fa fa-caret-left"></i>
                    </button>
                </div>
                
                
                <div className="see-allT" title="scroll right">
                    <button type="button" className="see-all-butT"
                    onClick={scrollRightTop}>
                        <i className="fa fa-caret-right"></i>
                    </button>
                </div>
            </div>

            <div className="three_restuarants12_" id="three_restuarants_">
                {topData.map((top_3, index) => {
                return (<img src={top_3.image} key={index} className="image-top_"/>)
                })}
            </div>

            
        </div>)

}
export default TopDeals;