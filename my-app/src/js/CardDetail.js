import React, {useState} from 'react';
import './../css/CardDetail.css';
import Modal from 'react-awesome-modal';

/* Carousel images */
import star from './../image/star.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ToolBar from './ToolBar';
/* Rating star */ 


import car from './../image/car.jpeg';
import bike from './../image/bike.png';
import BeautyStars from 'beauty-stars';
import message from './../image/message.png';
import CardRating from './CardRating';
import AvailableOffer from './AvailableOffer';
import CardStarRating from './CardStarRating';
import OpeningHours from './OpeningHours';
import HeaderObj from './HeaderObj';

const CardDetail = ({ip, cardInfo}) =>  {

    let cardDetailingMenu = ["Deals", "Duration", "Ratings", "Reviews"];
    const [slidingWindowShow, setSlidingWindowShow] = useState(false);


    function showSlidingWindow() {
        setSlidingWindowShow(true);
    }

    function hideWindow() {
        setSlidingWindowShow(false);
    }

    function showCost(cost) {
        cost = Number(cost);
        if (cost > 0 && cost <= 10) {
            return '$';
        } else if (cost > 10 && cost <= 30) {
            return '$$';
        } else if (cost > 31) {
            return '$$$';
        } 
        return '';
    }

    function parkingAvailable(parkingStructure) {
        if (parkingStructure.Car.Available === "Yes" 
        && parkingStructure.Bike.Available === "Yes") {
            return {
                'status': true,
                'bike': true,
                'car': true
            };
        } else if ( parkingStructure.Bike.Available === "Yes") {
            return {
                'status': true,
                'bike': true,
                'car': false
            };
        } else if (parkingStructure.Car.Available === "Yes") {
            return {
                'status': true,
                'bike': false,
                'car': true
            };
        } else {
            return {
                'status': false
            };
        }
    }

    function getAvailability(timeList) {
        // returns three colors based on time calculation
        // 1. red, 2. green or 3.yellow
        return {
            'color': "yellow"
        };
    }


    // Parking related
    const parkingAvail = parkingAvailable(cardInfo.Parking);
    let carShow;
    let bikeShow;
    let parkingTitle;

    if (parkingAvail['status']) {
        if (parkingAvail['bike'] && parkingAvail['car']) {
            parkingTitle = "Bike and car";
            carShow = true;
            bikeShow = true;
        } else if (parkingAvail['bike']) {
            parkingTitle = 'Bike';
            carShow = false;
            bikeShow = true;
        } else if (parkingAvail['car']) {
            parkingTitle = 'Car';
            carShow = true;
            bikeShow = false;
        }
    } else {
        parkingTitle = 'No';
        bikeShow = false;
        carShow = false;
    }
    parkingTitle += " parking available";
    
    // Available hours
    const timeShow = getAvailability(cardInfo.OpeningHours);
    let classTime = '';
    let classShow = '';
    if (timeShow['color'] === 'green') {
        classTime = 'green-show';
        classShow = 'open';
    } else if (timeShow['color'] === 'yellow') {
        classTime = 'yellow-show';
        classShow = 'closing soon'
    } else if (timeShow['color'] === 'red') {
        classTime = 'red-show';
        classShow = 'closed'
    }

    return (
        <div className="parent-card">
            <div className="tool-bar_t">
                <HeaderObj ip={ip} />
            </div>
            <div className="child-start">
                <div className="bar-at-top" >
                    <div className="image-section_p">     
                        <img src={cardInfo.Pictures.Front
                            [Math.floor((Math.random() * 
                            cardInfo.Pictures.Front.length))]} 
                            className="full-scale-image" 
                            onClick={showSlidingWindow}
                            title="Click to view more images"/>
                    </div>
                    
                    <div className="show-type-info">
                        <div className="card-info">
                            <div className="card-name-info">
                                {cardInfo.Name.Short}
                                <button type="button" disabled className={classTime} 
                                title="availability status">
                                    {classShow}
                                </button>
                            </div>
                            <div className="customer-rating">
                                {cardInfo.Rating.AverageRating.split('/')[0]}
                            </div>   
                            <div className="star-show">
                                <img src={star} className="star-image"></img>
                            </div>
                        </div>
                        <div className="card-address-info">
                            <span className="first-half-address">
                                {cardInfo.Address.Number + ' '}
                                {cardInfo.Address.Street} <br></br>
                                {cardInfo.Address.Suburb} <br></br>
                                {cardInfo.Address.State + ' '}  
                                {cardInfo.Address.Postcode}
                            </span>
                            <div className="second-half-address">
                                <img src={message} className="message-show-icon"></img>
                                <span className="show-count-message">
                                    {cardInfo.RatingComments.length}
                                </span>
                            </div>
                        </div>
                        <div className="go-map">
                            <button type="button" className="go-map-button">
                                Directions 
                            </button>
                        </div>
                        <hr  className="line-show"/>
                        <div className="cuisine-record-row-name">
                            <div className="cuisine-name-show-name">
                                Cuisine
                            </div>
                            <div className="dot-show">
                            </div>
                            <div className="show-cost-cuisine-name" title="Cost per person">
                                Cost (pp)
                            </div>
                            <div className="dot-show">
                            </div>
                            <div className="parking-available-name">
                                <div className="text-available-name">
                                    Parking(s)
                                </div>
                            </div>
                        </div>

                        <div className="cuisine-record-row-info">
                            <div className="cuisine-name-show-info">
                                <button type="button" className="cuisine-but">
                                    {cardInfo.Cuisine}
                                </button>
                            </div>
                            <div className="dot-show"></div>
                            <div className="show-cost-cuisine-info"
                            title="Cost per person">
                                <b>{showCost(cardInfo.CostPerPerson)}
                                {cardInfo.CostPerPerson}</b> 
                            </div>
                            <div className="dot-show"></div>
                            <div className="parking-available-info" title={parkingTitle}>
                                <div className="image-section-t" hidden={!carShow}>
                                    <div className="car-image-show">
                                        <img src={car} className="car-show"></img>
                                    </div>
                                    <div className="bike-imae-show" hidden={!bikeShow}>
                                        <img src={bike} className="bike-show"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr  className="line-show"/>
                        <div className="description-show">
                            <b>Desription</b><br></br>
                            {cardInfo.Description.Short}
                            <button type="button" className="view-but">
                                + view more
                            </button>
                        </div>
                        <hr  className="line-show line-show-none"/>

                        <div className="offer-button-show">
                            <button type="button" className="btn btn-success offer-button-symbol">
                                View available offers
                            </button>
                        </div>
                        
                    </div>
                </div>
                <div className="menu-flex">
                    {cardDetailingMenu.map((option, index) => {
                        return(<button key={index} className="flex-options">
                        {option}
                        </button>);
                    })}  
                </div>

                <div className="show-tab-mob-info">
                    <div className="initial-name-info">
                        <div className="topic-name">
                            {cardInfo.Name.Short}
                        </div>
                        <div className="second-row-topic">
                            {cardInfo.Cuisine} .  &nbsp; 
                            <b>{showCost(cardInfo.CostPerPerson)}
                                {cardInfo.CostPerPerson} / pp
                            </b> 
                        </div>
                        <div className="third-row-address">
                            {cardInfo.Address.Number + ' '}
                            {cardInfo.Address.Street} <br></br>
                            {cardInfo.Address.Suburb} <br></br>
                            {cardInfo.Address.State + ' '}  
                            {cardInfo.Address.Postcode}
                        </div>
                        <button type="button" className="btn btn-primary but-topic">
                            Directions
                        </button>

                    </div>
                    <div className="mid-info"></div>
                    <div className="points-info">
                        <div className="star-rating">
                            {cardInfo.Rating.AverageRating.split('/')[0]}
                            <img src={star} className="star-image"></img>
                        </div>
                        <div className="closing-time">
                            <div className="closing-duration-1">
                                Closes at
                            </div>
                            <div className="closing-duration-2">
                                10:30 PM
                            </div>
                        </div>
                    </div>
                </div>    
                <div className="available-offer-show">
                    <AvailableOffer offerShow={cardInfo.Discount} />
                </div>

                <div className="opening-hours-show">
                    <OpeningHours hourShow={cardInfo.OpeningHours} />
                </div>
                
                <div className="rating-system-card">
                    <CardStarRating ratingShow={cardInfo.Rating} />
                </div>

                <div className="review-system-show">
                    <CardRating showInfo={cardInfo.RatingComments}/>
                </div>

                
                
            </div>
            <div className="footer-body">
                Mission C &copy; 2019
            </div>
            <Modal className="modal-vis" visible={slidingWindowShow} border="1px solid blue" 
                    effect="fadeInDown" height="300px" size="none" center
                onClickAway={hideWindow}>
                    <Carousel showThumbs={false} showNumbers={true} 
                    infiniteLoop={true}>
                        {
                            cardInfo.Pictures.Front.map((image, index) => {
                                return(<img key={index} src={image} 
                                    className="image-display_p" />);
                            })
                        }
                    </Carousel>
                    <div className="card-name-info-p">
                        {cardInfo.Name.Short} &nbsp;&nbsp;&nbsp;
                        <span className="customer-rating-p">
                            {cardInfo.Rating.AverageRating.split('/')[0]}
                            <img src={star} className="star-image-p"></img>
                        </span>
                    </div>
            </Modal>

        </div>
    );
}

export default CardDetail;


/**
 * 
 *   


 * 
 *    <Carousel showThumbs={false} showNumbers={false} infiniteLoop={true}>
                                {
                                    this.props.cardInfo.Pictures.Front.map((image, index) => {
                                        return(<img key={index} src={image} className="image-display_" />);
                                    })
                                }
                            </Carousel>
 */