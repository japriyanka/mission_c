import React from 'react';
import './../css/Cards.css';
import SubCards from './SubCards';

const Cards = ({ip, cardInfo, from, searchValue}) => {    
    
    console.log(cardInfo.length);
    let classNameForDiv = '';

    if (from === 'home') {
        classNameForDiv = 'flex-layout';
    } else if (from === 'section') {
        classNameForDiv = 'flex-layout_section';
    }
    return (
        <div className={classNameForDiv} id="center-cards">
            {cardInfo.map((card, index) => {
                if (card.Name.Short.toLowerCase().includes(searchValue.toLowerCase())) {
                    return <SubCards ip={ip} info={card} key={index} />
                }
            })}
        </div>
    );

}

export default Cards;