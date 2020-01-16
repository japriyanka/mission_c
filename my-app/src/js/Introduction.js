import React from 'react';
import './../css/Introduction.css';
import go from './../image/symb.jpeg';
import search from './../image/search.webp';
import Discover from './Discover';
import AvailableCity from './AvailableCity';



class Introduction extends React.Component {

    constructor(props) {
        super(props);
        this.changeOnMenuBar = this.changeOnMenuBar.bind(this);
    }

    changeOnMenuBar(divTemp) {

      const barMenu = document.getElementById('more-to-come');
      if(barMenu.className === 'change') {
          barMenu.className = 'more-to-come';
      } else {
        barMenu.className = 'change';
      }
    }

    render() {
        return (
            <div className="introduction-page">
                <div className="introduction-page-head">
                    <div className="empty-section">
                    </div>
                    <div className="introduction-head-image_">
                        <img src={go} className="logo-image">

                        </img>
                    </div>
                    <div className="introduction-head-name">
                        Mission C
                        <span className="top">Offers for you!!!</span>
                    </div>
                    <div className="introduction-search-box">
                        <div className="searching-bar">
                            <img src={search} className="search-img"></img>
                            <input type="text" placeholder=" search here" 
                            title="Search here" className="searching-text"></input>
                        </div>
                    </div>
                    <div className="introduction-login">
                        <button type="button" className="login-btn-intro">
                            Login & Sign up
                        </button>
                    </div> 
                    <div className="more-to-come" id="more-to-come" 
                    onClick={this.changeOnMenuBar}>
                        More
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                  
                   
                </div>
                <div className="introduction-page-body">
                    <div className="discover-intro-body">
                        <Discover />
                    </div>
                    <div className="available-city-body">
                        <AvailableCity />
                    </div>
                    <div className="top-deals-body">

                    </div>
                    
                </div>

            </div>
        );
    }

}

export default Introduction;