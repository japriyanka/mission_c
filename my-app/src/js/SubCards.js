import React from 'react';
import Modal from 'react-awesome-modal';
import './../css/Cards.css';
import CardEnlarged from './CardEnlarged';

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
        this.setState({
            cardShow: true,
        });
    }

    hideCardPopup() {
        this.setState({
            cardShow: false,
        });
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
            <div className="top-space">
                <div className="rating-space">
                    {this.ratingChoose(this.props.info.Rating.AverageRating)}
                </div>
                <div className="cuisine-name">
                    {this.props.info.Cuisine}
                </div>
            </div>

            <div className="card-image">
                <img src={this.props.info.Pictures.Front
                    [Math.floor((Math.random() * 
                    this.props.info.Pictures.Front.length))]} 
                    className="front-image"/>
                    <div className="card-button">
                        <button type="button" className="btn card-go-button"
                        onClick={this.showCardPopup.bind(this)}>
                            View
                        </button>
                        <div class="modal-class">
                            <Modal visible={this.state.cardShow} border="1px solid blue" height="100%" width="800px"  
                            effect="fadeInUp" onClickAway={this.hideCardPopup.bind(this)}>
                                <div className="card-enlarged-full_">
                                    <CardEnlarged cardInfo={this.props.info} />
                                </div>
                                <button type="button" className="btn btn-danger card-close-button"
                                onClick={this.hideCardPopup.bind(this)}>
                                    CLOSE
                                </button>
                            </Modal>
                        </div>
                        
                    </div>
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
                </div>
                <div className="card-open">
                    
                    <button type="button" className="status-button">
                    { 
                         findOpeningTime['Available'] === true ? 
                        `${findOpeningTime['time']}:00`: "Closed"
                    } 
                    </button>
                </div>
                
                <div className="card-description">
                    <b>Description</b> <br></br>
                        {this.props.info.Description.Short}
                </div>
                
            </div>
            <button type="button" className="btn btn-success"
            onClick={this.showCardPopup.bind(this)}>
                    {this.props.info.Discount.length} 
                    {' '} Offer {this.props.info.Discount.length > 1 ? 's': ''} 
                    Available
            </button>
        </div>
    
        );
    }
}

export default SubCards;



/**
 * 
 */