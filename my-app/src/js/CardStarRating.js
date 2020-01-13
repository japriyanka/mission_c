import React from 'react';
import './../css/CardStarRating.css';
import BeautyStars from 'beauty-stars';
import star from './../image/star.png';



class CardStarRating extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ratingAlter: false
        };
    }

    alterShow() {
        this.setState({
            ratingAlter: true
        });
    }

    render() {
        return (
            <div className="star-rating-div">
                <div className="show-star-rating" >
                    <div className="show-star-rating-head">
                        <span className="span-rating-name">
                           User Rating 
                        </span>
                        <div className="star-image-average">
                            {this.props.ratingShow.AverageRating.split('/')[0]} 
                        </div>
                        <div className="star-image-rating_">
                            <img src={star} className="star-image_"/> 
                           
                        </div>
                    </div>
                    <hr  className="line-show-but" hidden={this.state.ratingAlter} />                              
                    <div className="show-star-rating-body" hidden={this.state.ratingAlter}>
                        <div className="rating-system_">
                            <BeautyStars value="3" 
                            activeColor="#ffd700" />
                        </div>

                        <div className="text-but_">
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
                        <div className="submit-button-star">
                            <button type="button" className="btn btn-success"
                            onClick={this.alterShow.bind(this)}>
                                Rate it!
                            </button>
                        </div>
                    </div>
                    <div className="user-rating-card" hidden={!this.state.ratingAlter}>
                        <div className="comment-section">
                            {this.props.ratingShow.AverageRating.split('/')[0]} 
                            average based on <b>{this.props.ratingShow.RatingCount}</b> reviews.
                        </div>
                        <hr  className="line-show-but"  /> 
                        <div className="value-section">
                            <div className="rating-number">
                                5 star
                            </div>
                            <div className="rating-bar">
                                <div className="rating-scale-5">
                                </div>
                            </div>
                            <div className="rating-member-count">
                                2
                            </div>
                        </div>
                        <div className="value-section">
                            <div className="rating-number">
                                4 star
                            </div>
                            <div className="rating-bar">
                                <div className="rating-scale-4">
                                </div>
                            </div>
                            <div className="rating-member-count">
                                8
                            </div>
                        </div>
                        <div className="value-section">
                            <div className="rating-number">
                                3 star
                            </div>
                            <div className="rating-bar">
                                <div className="rating-scale-3">
                                </div>
                            </div>
                            <div className="rating-member-count">
                                7
                            </div>
                        </div>
                        <div className="value-section">
                            <div className="rating-number">
                                2 star
                            </div>
                            <div className="rating-bar">
                                <div className="rating-scale-2">
                                </div>
                            </div>
                            <div className="rating-member-count">
                                9
                            </div>
                        </div>
                        <div className="value-section">
                            <div className="rating-number">
                                1 star
                            </div>
                            <div className="rating-bar">
                                <div className="rating-scale-1">
                                </div>
                            </div>
                            <div className="rating-member-count">
                                3
                            </div>
                        </div>
                        <br></br>

                    </div>
                </div>
            </div>
        );
    }
}

export default CardStarRating;