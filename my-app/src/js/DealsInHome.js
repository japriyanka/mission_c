import React from 'react';
import './../css/DealsCard.css';

class DealsInHome extends React.Component {


    timer= null;
    constructor(props) {
        super(props);
       
    }

    showFirst = function(id) {
        var i;
        console.log('coming in');
        var x = document.getElementsByClassName("front-image-deals-home");
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
        this.timer = setTimeout(() => {
            this.showFirst(id);
          }, 3000);

    }


    componentDidMount() {
        this.showFirst(1);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    render() {
        return (
            <div className="cards-deals-home" id="cards-deals-home">
                <div className="top-deals-home">
                    <div className="top-deals-home-name">
                        Top deals
                    </div>
                </div>
                {this.props.dealsInfo.map((deals, index) => {
                    return(
                    <img src={deals.image} key={index}
                    className="front-image-deals-home" />
                    )
                })}
            </div>
        )
    }
}

export default DealsInHome;