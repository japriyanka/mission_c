import React from 'react';
import './../css/CardRating.css';
import message from './../image/message.png';
import profile from './../image/profile.jpg';
import star from './../image/star.png';


class CardRating extends React.Component {
    render() {
        const lengthCommented = this.props.showInfo.length;
        return (
            <div className="rating-content" id="rating-content">
                <div className="rating-heading">
                    <span className="name-rating-head">
                        Customer Reviews
                    </span>
                    <div className="image-embedded">
                        <img src={message} className="message-show-icon-show"></img>
                    </div>
                    <div className="show-length">
                        {lengthCommented}
                    </div>
                </div>
                <hr  className="line-show-but"/>

                {this.props.showInfo.map((element, index) => {
                    return ( 
                    <div className="rating-body">
                        <div className="image-rating-body">
                            <img key={index} 
                            src={profile} className="profile-image">
                            </img>
                        </div>
                        
                        <div className="description-body">
                            <div className="description-head-body">
                                {element.Name} &nbsp;
                                <div className="rating-system-show"> 
                                <b> {element.RatingProvided} </b>                                 <img src={star} className="star-image-show"/>
                            </div>
                            </div>
                            
                            <p className="description-desc-body">
                                <i>{element.Comments}</i>
                            </p>
                        </div> 
                    </div>);
                })}

               
                <div className="view-all-show">
                    <button type="button" className="view-all-show-but">
                        See more
                    </button>
                </div>
                <div className="swipe-buttons">
                    <div className="empty-space">
                    </div>
                    <button type="button" className="left-button">
                        Previous
                    </button>
                    <button type="button" className="right-button">
                        Next
                    </button>
                    
                </div>
            </div>
        );
    }
}

export default CardRating;