import React from 'react';
import './../css/Cards.css';
import SubCards from './SubCards';

class Cards extends React.Component {

    render() {
        
        console.log(this.props.cardInfo.length);
        let classNameForDiv = '';

        if (this.props.from === 'home') {
            classNameForDiv = 'flex-layout';
        } else if (this.props.from === 'section') {
            classNameForDiv = 'flex-layout_section';
        }

        return (
            <div className={classNameForDiv} id="center-cards">
                {this.props.cardInfo.map((card) => {
                    console.log(card);
                    return <SubCards info={card} key={card.Id} />
                })}
            </div>
        );
    }

}

export default Cards;