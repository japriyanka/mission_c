import React, {useEffect} from 'react';
import './../css/DealsCard.css';

const DealsInHome = ({ip, dealsInfo, city}) => {

    let timer = null;
    
    useEffect(() => {
        showFirst(1);
        return() => {
            clearInterval(timer);
        }; 
    }, []);

    let showFirst = function(id) {
        var i;
        var x = document.getElementsByClassName("front-image-deals-home");
        if (x) {
            for (i = 0; i < x.length; i++) {
            x[i].style.display = "none"; 
            }

            if (id > x.length) {
                id = 1
            } 
            x[id - 1].style.display = "block";
            id = id + 1; 
            if (x.length <= id) {
                id = 1;
            }
            timer = setTimeout(() => {
                showFirst(id);
            }, 3000);
        }
    }
    return (
        <div className="cards-deals-home" id="cards-deals-home">
            <div className="top-deals-home">
                <div className="top-deals-home-name">
                    Top deals in {city}
                </div>
            </div>
            {dealsInfo.map((deals, index) => {
                return(
                <img src={deals.image} key={index}
                className="front-image-deals-home" />
                )
            })}
        </div>
    )
}

export default DealsInHome;