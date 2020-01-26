import React from 'react';
import './../css/FilterBy.css';
import star from './../image/star.png';

class FilterBy extends React.Component {
    constructor(props) {
        super(props);
    }

    showRatingsList() {
        if (document.getElementById('rating-options-show').style.display === 'none') {
            document.getElementById('rating-options-show').style.display = 'block';
            document.getElementById('name-filter-by-option').style.backgroundColor = 'whitesmoke';
        } else {
            document.getElementById('rating-options-show').style.display = 'none';
            document.getElementById('name-filter-by-option').style.backgroundColor = 'white';
        }
    }

    showPricingList() {
        if (document.getElementById('price-options-show').style.display === 'none') {
            document.getElementById('price-options-show').style.display = 'block';
            document.getElementById('price-filter-by-option').style.backgroundColor = 'whitesmoke';
        } else {
            document.getElementById('price-options-show').style.display = 'none';
            document.getElementById('price-filter-by-option').style.backgroundColor = 'white';
        }
    }


    render() {
        const ratingList = ['4 ', '3 ', '2 ', '1 '];
        const discountList = ['60% & above', ' 40% to 60% ', '20% to 40% ', 'less than 20%'];
        
        return (
            <div className="filter-by-full-body">
                <div className="filter-by-heading_">
                    Filter
                </div>
                <hr></hr>
                <div className="filter-by-body">
                   <div className="filter-options-list">
                       <div className="name-filter-by-option" id="name-filter-by-option"
                       onClick={this.showRatingsList.bind(this)}>
                           Customer rating
                       </div>
                       <div className="rating-options-show" id="rating-options-show">
                            {ratingList.map((rating, index) => {
                                return(
                                    <div key={index} className="option1-show">
                                        <div className="option1-name">
                                        </div>
                                        <div className="option1-text-show">
                                            {rating} <img src={star} className="star-img"></img>
                                            {rating === '4 ' ? ' & above' : ''}
                                            {rating === '1 ' ? ' & below' : ''}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="price-filter-by-option" id="price-filter-by-option"
                        onClick={this.showPricingList.bind(this)}>
                           Discount (%)
                        </div>
                        <div className="price-options-show" id="price-options-show">
                            {discountList.map((discount, index) => {
                                return(
                                    <div key={index} className="option1-show">
                                        <div className="option1-name">
                                        </div>
                                        <div className="option1-text-show">
                                            {discount} 
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default FilterBy;