import React from 'react';
import Modal from 'react-awesome-modal';
import './../css/Cards.css';
import CardEnlarged from './CardEnlarged';
import ReactDOM from 'react-dom';
import CardDetail from './CardDetail';
import star from './../image/star.png';


const SubCards = ({ip, key, info}) => {

    function findClosed(dates) {
        let todayDate = '';
        let dateObtained = '';
        let dateObtainedList = [];
        if (dates.length === 7) {
            todayDate = new Date();
            dateObtained = dates[todayDate.getDay()];
            dateObtainedList = dateObtained.split('-');

            // Split the start time and end time
            let startTime = Number(dateObtainedList[0]);
            let endTime = Number(dateObtainedList[1]);
            let currentTime = todayDate.getHours();
            return {
               "Available": true,
               "time": Number(endTime)
           };
        }
    }


    function ratingChoose(rating) {
        return "* * * *";
    }

    function showCardPopup() {
        ReactDOM.render(<CardDetail key={key} ip={ip} cardInfo={info} />, document.getElementById('root'));
    }

    const findOpeningTime = findClosed(info.OpeningHours);
    return (
       <div className="cards"> 
           <div className="card-image">
                <img src={info.Pictures.Front
                    [Math.floor((Math.random() * 
                    info.Pictures.Front.length))]} 
                    className="front-image" 
                    onClick={showCardPopup}/>
           </div>
           <div className="card-time">
               <div className="status-button">
                    { 
                         findOpeningTime['Available'] === true ? 
                        `${findOpeningTime['time']}:00`: "Closed"
                    } 
                </div>
           </div>
           <button type="button" className="btn btn-success button-offer"
            onClick={showCardPopup}>
                    40% OFF + 2 more
            </button>
           <div className="card-body-information">
                <div className="card-name-information">
                    <div className="name-info-first-half">
                            {info.Name.Short} 
                    </div>
                    <div className="rating-info">
                        {info.Rating.AverageRating.split('/')[0]}
                        <img src={star} className="gold-star-image"></img> 
                        <span className="small-character-info"> {" "} / 5</span>
                    </div>
                </div>
               
                <div className="card-address">
                    {info.Address.Suburb}
                </div>

                <div className="cuisine-star">
                    <div className="cuisine-info">
                            {info.Cuisine}
                    </div>
                    <div className="average-cost-information" title="cost per person">
                         ${info.CostPerPerson} / pp
                    </div>
                </div>
           </div>
       </div>
    );
}

export default SubCards;