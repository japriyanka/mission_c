import React from 'react';
import './../css/AvailableCity.css';
import ReactDOM from 'react-dom';
import IntroductionCity from './IntroductionCity';



class AvailableCity extends React.Component {
    
    changeBasedOnCity(cityName) {
        ReactDOM.render(<IntroductionCity name={cityName} />, document.getElementById('root'));
    }

    render() {
        const listNames = ['Canberra', 'Perth', 'Sydney'];

        return (
            <div className="available-city-full-body">
                <div className="available-city-head">
                    <div className="available-city-names">
                        Available places
                    </div>
                    <div className="see-all-text">
                       NAVIGATE
                    </div>
                    <div className="see-all">
                        <button type="button" className="see-all-but">
                            <i className="fa fa-caret-left"></i>
                        </button>
                    </div>
                    <div className="see-all">
                        <button type="button" className="see-all-but">
                            <i className="fa fa-caret-right"></i>
                        </button>
                    </div>
                </div>
                <hr className="line-show"></hr>
                <div className="available-body">
                    <div className="show-options-body">
                    {listNames.map((cityName, index) => {
                        let image = '';
                        if (cityName === 'Canberra') {
                            image = 'http://localhost/image/canberra.jpeg';
                        } else if (cityName === 'Perth') {
                            image = 'http://localhost/image/perth.jpeg';
                        } else  if (cityName === 'Sydney') {
                            image = 'http://localhost/image/sydney.jpeg';
                        }
                        var sectionStyle = {
                            'height': '150px',
                            'backgroundPosition': 'top',
                            'backgroundSize': 'cover',
                            'width': '20%',
                            'margin':'3%',
                            'textAlign': '-webkit-center',
                            'padding': '4%',
                            'fontWeight': 'bolder',
                            'fontSize': '35px',
                            'borderRadius': '10px',
                            'color': 'white',
                            'backgroundImage': `url(${image})`,
                        };
                        return (<div style={sectionStyle}  key={index} onClick={this.changeBasedOnCity.bind(this)}>
                            {cityName}
                        </div>);
                    })}
                    </div>

                </div>
            </div>
        );
    }
}

export default AvailableCity;