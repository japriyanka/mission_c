import React from 'react';
import './../css/OtherCategories.css';
import groceries from './../image/groceries.jpg';
import sports from './../image/sports.png';


class OtherCategories extends React.Component {
    render() {
        return (
            <div className="other-category-full-body" id="other-category-full-body">
                <div className="other-category-heading">
                    More categories
                </div>
                <div className="other-category-body">
                    <div className="show-list-contents">
                        <div className="image-show-other">
                            <img src={groceries} className="image-other">
                            </img>
                        </div>
                        <div className="text-show">
                            Groceries
                        </div>
                        <div className="offer-button-show-other">
                            15% to 45% OFF
                        </div>
                    </div>
                    <div className="show-list-contents">
                        <div className="image-show-other">
                            <img src={sports} className="image-other">
                            </img>
                        </div>
                        <div className="text-show">
                            Sports
                        </div>
                        <div className="offer-button-show-other">
                            15% to 45% OFF
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


export default OtherCategories;