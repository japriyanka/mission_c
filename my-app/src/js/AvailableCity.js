import React from 'react';
import './../css/AvailableCity.css';
import ReactDOM from 'react-dom';
import IntroductionCity from './IntroductionCity';


class AvailableCity extends React.Component {
    
    constructor(props) {
        super(props);

    }
    changeBasedOnCity(cityName) {
        ReactDOM.render(<IntroductionCity name={cityName} />, document.getElementById('root'));
    }

    scrollLeft() {
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

    scrollRight() {
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

    render() {
        const listNames = this.props.listNames;

        return (
            <div className="available-city-full-body">
                <div className="available-city-head">
                    <div className="available-city-names">
                        Available {this.props.name}
                    </div>
                   
                    <div className="see-all" title="scroll left">
                        <button type="button" className="see-all-but"
                        onClick={this.scrollLeft.bind(this)}>
                            <i className="fa fa-caret-left"></i>
                        </button>
                    </div>
                   
                    <div className="see-all" title="scroll right">
                        <button type="button" className="see-all-but"
                        onClick={this.scrollRight.bind(this)}>
                            <i className="fa fa-caret-right" 
                            ></i>
                        </button>
                    </div>
                </div>
                <div className="available-body" id="available-body">
                    <div className="show-options-body" id="show-options-body_">
                        {listNames.map((cityName, index) => {
                            let image = '';
                            if (cityName === 'Canberra' || cityName === 'Indian') {
                                image = 'http://localhost/image/canberra.jpeg';
                            } else if (cityName === 'Perth' || cityName === 'Korean' ) {
                                image = 'http://localhost/image/perth.jpeg';
                            } else  if (cityName === 'Sydney' || cityName === 'Thai' ) {
                                image = 'http://localhost/image/sydney.jpeg';
                            }
                            return (
                            <div className="image_class" key={index} title={cityName} 
                            onClick={this.changeBasedOnCity.bind(this)}>
                                <img src={image} className="div-class-city-name"></img>
                                <h5 class="city_name">{cityName}</h5>
                                <button type="button" className="btn btn-success stores">
                                    <b>220+</b> stores
                                </button>
                                
                            </div>);
                        })}

                    </div>

                </div>
            </div>
        );
    }
}

export default AvailableCity;

/**
 *  <div className="see-all-text">
                       SEE ALL
                    </div>
 */