import React from 'react';
import './../css/CardEnlarged.css';

/* Carousel images */
import star from './../image/star.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

/* Rating star */
import BeautyStars from 'beauty-stars';


class CardEnlarged extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ratingValue: 0
        };
    }

    render() {
        return (
            <div className="card-enlarged">
                <div className="cuisine-name-card">
                    <div className="star-cuisine" title="Customer rating">
                        {this.props.cardInfo.Rating.AverageRating.split('/')[0]} 
                    </div>
                    <div className="star-image-rating">
                    <img src={star} className="star-image"/>
                    </div>

                    <div className="introduce-cuisine" title="Type of Cuisine">
                        {this.props.cardInfo.Cuisine}
                    </div>

                </div>
                <div className="image-section">
                    <Carousel showThumbs={false} showNumbers={false} infiniteLoop={true}>
                        {
                            this.props.cardInfo.Pictures.Front.map((image) => {
                                return(<img src={image} className="image-display" />);
                            })
                        }
                    </Carousel>
                </div>

                <div className="restuarant-information">
                    <div className="offer-button-div">
                        <button type="button" className="btn btn-success offer-button">
                            * Today's Deals *
                        </button>

                    </div>            
                    <div className="restuarant-section">            
                        <div className="name-info">
                            {this.props.cardInfo.Name.Short}
                        </div>

                        <div className="address-info">
                            {this.props.cardInfo.Address.Suburb + ' '}
                            {this.props.cardInfo.Address.State} <br></br>
                        </div>
                    </div>
                    <div className="time-button-div">
                        <span className="trading-hours">Trading Hours</span>
                        <button type="button" className="time-button">
                            {this.props.cardInfo.OpeningHours[0]}
                        </button>

                    </div>
                    
                </div>

                <div className="section">

                </div>

                <div className="rating-system">
                   <BeautyStars value={this.state.ratingValue} 
                   activeColor="#ffd700"
                   onChange={ratingValue => this.setState({ 
                       ratingValue
                    })}/>
                </div>

                <div className="text-but">
                    <div className="not-satisfied-rating">
                        Not Satisfied
                    </div>
                    <div className="satisfied-rating">
                        Satisfied
                    </div>
                    <div className="neutral-rating">
                        Neutral
                    </div>
                    <div className="good-rating">
                        Good
                    </div>
                    <div className="excellent-rating">
                        Excellent
                    </div>
                </div>

            </div>
        );
    }
}

export default CardEnlarged;