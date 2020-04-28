import React from 'react';
import Modal from 'react-awesome-modal';
import './../css/Cards.css';
import CardEnlarged from './CardEnlarged';
import ReactDOM from 'react-dom';
import CardDetail from './CardDetail';
import star from './../image/star.png';


class SubCards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardShow: false
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

            // Fix the logic here
    
            return {
               "Available": true,
               "time": Number(endTime)
           };
        }
    }


    ratingChoose(rating) {
        // rating is in the form of 4.2 / 5 
        // print 4 starts 
        return "* * * *";

    }

    showCardPopup() {
        /* this.setState({
            cardShow: true,
        }); */

        ReactDOM.render(<CardDetail cardInfo={this.props.info} />, document.getElementById('root'));

    }

    hideCardPopup() {
        /* this.setState({
            cardShow: false,
        }); */
        console.log('coming');
    }


    viewCard(card) {
        // Reference taken from :
        // https://www.npmjs.com/package/react-awesome-modal
    }


    render() {

        const findOpeningTime = this.findClosed(this.props.info.OpeningHours);
        console.log(findOpeningTime);
        return (
       <div className="cards">
         
           <div className="card-image">
                <img src={this.props.info.Pictures.Front
                    [Math.floor((Math.random() * 
                    this.props.info.Pictures.Front.length))]} 
                    className="front-image" 
                    onClick={this.showCardPopup.bind(this)}/>
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
            onClick={this.showCardPopup.bind(this)}>
                    40% OFF + 2 more
            </button>
           <div className="card-body-information">
                <div className="card-name-information">
                    <div className="name-info-first-half">
                            {this.props.info.Name.Short} 
                    </div>
                    <div className="rating-info">
                        {this.props.info.Rating.AverageRating.split('/')[0]}
                        <img src={star} className="gold-star-image"></img> 
                        <span className="small-character-info"> {" "} / 5</span>
                    </div>
                </div>
               
                <div className="card-address">
                    {this.props.info.Address.Suburb}
                </div>

                <div className="cuisine-star">
                    <div className="cuisine-info">
                            {this.props.info.Cuisine}
                    </div>
                    <div className="average-cost-information" title="cost per person">
                         ${this.props.info.CostPerPerson} / pp
                    </div>
                </div>
             
               
           </div>

       </div>
    
        );
    }
}

export default SubCards;



/**
 * 
 */