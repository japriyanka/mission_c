import React from 'react';
import './../css/AvailableCity.css';



class AvailableCity extends React.Component {
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
                <hr></hr>
                <div className="available-body">

                </div>
            </div>
        );
    }
}

export default AvailableCity;