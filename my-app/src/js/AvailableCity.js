import React from 'react';
import './../css/AvailableCity.css';
import ReactDOM from 'react-dom';
import IntroductionCity from './IntroductionCity';


const AvailableCity = ({option, listNames, name, ip}) =>  {

    if (!option) {
        option = '';
    }
    function changeBasedOnCity(cityName) {
        ReactDOM.render(<IntroductionCity ip={ip} name={cityName} 
            cityList={listNames} />,  document.getElementById('root'));
    }

    function scrollLeft() {
        const direction = 'left';
        const step = 10;
        const distance = 200;
        let scrollAmount = 0;
        const element = document.getElementById('show-options-body_');
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

    function scrollRight() {
        const direction = 'right';
        const step = 10;
        const distance = 200;

        let scrollAmount = 0;
        const element = document.getElementById('show-options-body_');
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
            <div className="available-city-full-body">
                <div className="available-city-head">
                    <div className="available-city-names">
                        Available {name}
                    </div>
                   
                    <div className="see-all" title="scroll left">
                        <button type="button" className="see-all-but"
                        onClick={scrollLeft}>
                            <i className="fa fa-caret-left"></i>
                        </button>
                    </div>
                   
                    <div className="see-all" title="scroll right">
                        <button type="button" className="see-all-but"
                        onClick={scrollRight }>
                            <i className="fa fa-caret-right" 
                            ></i>
                        </button>
                    </div>
                </div>
                <div className="available-body" id="available-body">
                    <div className="show-options-body" id="show-options-body_">
                        {listNames.map((cityName, index) => {
                            if (cityName.includes(option)) {
                            let image = '';
                            if (cityName === 'Canberra') {
                                image = 'http://'+ip+'/image/canberra.jpeg';
                            } else if (cityName === 'Perth') {
                                image = 'http://'+ip+'/image/perth.jpeg';
                            } else  if (cityName === 'Sydney') {
                                image = 'http://'+ip+'/image/sydney.jpeg';
                            }
                            return (
                            <div className="image_class" key={index} title={cityName} 
                            onClick={changeBasedOnCity.bind(this, cityName)}>
                                <img src={image} className="div-class-city-name"></img>
                                <h5 className="city_name">{cityName}</h5>
                                <button type="button" className="btn btn-success stores">
                                    <b>220+</b> stores
                                </button>
                                
                            </div>
                            );}
                        })}

                    </div>

                </div>
            </div>
        );
}

export default AvailableCity;