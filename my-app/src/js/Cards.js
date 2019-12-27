import React from 'react';
import './../css/Cards.css';
import SubCards from './SubCards';

class Cards extends React.Component {

    render() {
        console.log(this.props.cardInfo.length);
        return (
            <div className="flex-layout">
                {this.props.cardInfo.map((card) => {
                    console.log(card);
                    return <SubCards info={card} key={card.Id} />
                })}
            </div>
        );
    }

}

export default Cards;