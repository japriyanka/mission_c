import React from 'react';
import './../css/OpeningHours.css';

class OpeningHours extends React.Component {

    showDay(ind) {
        const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday"];
        const date = new Date();
        return {
            "day": dayArr[ind],
            "status": ind == date.getDay() ? true: false 
        };
    }

    displayTime(strTime) {
        const strTimeList = strTime.split('-');
        return strTimeList[0] + ' - ' + strTimeList[1];

    }
    render() {
        return(
            <div className="opening-hour-main-content">
                <div className="opening-hour-main-content-head">
                    <span className="span-opening-name">
                        Opening Hours 
                    </span>
                    <div className="status-opening-hours">
                        <div className="but-opening-hours">
                            Closing at 22:00
                        </div>
                    </div>
                </div>
                <hr  className="line-show-but" />
                <div className="opening-hour-main-content-body-1">
                    {this.props.hourShow.map((timeT, index) => {
                        const value = this.showDay(index);
                        let classN;
                        if (value['status']) {
                            classN = "opening-hour-main-content-body active";
                        } else {
                            classN = "opening-hour-main-content-body";
                        }
                        return (
                            <div className={classN}>
                                <div className="time-show-body">
                                    <div className="show-day-span">
                                        {value['day']}
                                    </div>    
                                </div>
                                <div className="time-show-body">
                                    <div className="show-time-div">
                                        {this.displayTime(timeT)}
                                    </div>
                                </div>
                            </div>
                        )

                    })}
                </div>

            </div>
        );
    }
}

export default OpeningHours;