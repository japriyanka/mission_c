import React from 'react';
import './../css/Cards.css';

class SubCards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restuarants: {}
        };
    }

    findClosed(dates) {
        /*  
        * Represented in the form of <start time>-<end time>
        */

        let todayDate = '';
        let dateObtained = '';
        let dateObtainedList = [];
        if (dates.length === 7) {
            todayDate = new Date();
            dateObtained = dates[todayDate.getDay()];
            console.log(dateObtained);

            dateObtainedList = dateObtained.split('-');

            // Split the start time and end time
            let startTime = Number(dateObtainedList[0]);
            let endTime = Number(dateObtainedList[1]);

            console.log(startTime, endTime);

            // value ranges from 0 to 23
            let currentTime = todayDate.getHours();

            console.log(startTime, endTime);
            /* 
            // Need to fix the logic here
            if (Number(endTime) > currentTime) {
                return {
                    "Available": true,
                    "time": Number(endTime)
                };
            } else if (Number(endTime) === currentTime ) {
                // Decimal point for considering the minutes
                if (endTime.toString().split('.').length == 2) {
                    if (Number(endTime.toString().split('.')[1]) < todayDate.getMinutes()) {
                        return {
                            "Available": true,
                            "time": Number(endTime)
                        };
                    } else {
                        return {
                            "Available": false,
                            "time": ""
                        };
                    }
                } else {
                    return {
                        "Available": false,
                        "time": ""
                    };    
                }
            } else {
                return {
                    "Available": false,
                    "time": ""
                };
            }
            */
           return {
               "Available": true,
               "time": Number(endTime)
           };
        }
    }

    render() {
        return (
        <div className="cards">
            <div className="card-image">
                <img src={this.props.info.Pictures.Front
                    [Math.floor((Math.random() * 
                    this.props.info.Pictures.Front.length))]} 
                    className="front-image"/>
            </div>
            <div className="card-information">
                <div className="card-first">
                    <div className="card-name">
                        {this.props.info.Name.Short}
                    </div>
                    <div className="card-address">  
                            {this.props.info.Address.Street}<br></br>
                            {this.props.info.Address.Suburb}
                    </div>
                    <div className="card-button">
                        <button type="button" className="btn btn-success card-go-button">
                            Go
                        </button>
                    </div>
                </div>
                <div className="card-open">
                    { 
                        this.findClosed(this.props.info.OpeningHours)['Available'] === true ? 
                        "Open" : "Closed"
                    }

                </div>
                
                <div className="card-description">
                <b>Description</b> <br></br>
                    {this.props.info.Description.Short}
                </div>
                
            </div>
        </div>
    
        );
    }
}

export default SubCards;