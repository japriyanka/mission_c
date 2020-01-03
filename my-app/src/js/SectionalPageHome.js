import React from 'react';
import ToolBar from './ToolBar';
import SectionalPageHomeDD from './SectionalPageDD';
import './../css/SectionalPageHome.css';
import left from './../image/left.png';
import DealsCard from './DealsCard';
import right from './../image/right.png';
import Cards from './Cards';
import Ads from './Ads';

class SectionalPageHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        };
    }

    componentDidMount() {
        fetch("http://localhost/restuarants.json")
        .then ((response) => response.json())
        .then ((data) => { 
            console.log(data);
            this.setState({
                restaurants: data,
            });
        });        
    }

    render() { 
        return (
            <div className="main-sectional-page-home">
                <div className="tool-bar">
                    <ToolBar name="Guest" />
                </div>
                <div className="options-bar">
                    <SectionalPageHomeDD type={this.props.type} />
                </div>
                <div className="scrollable-bar">
                    <span className="top-deals-name">
                        Top {this.props.type === 'r' ? 'Restaurants' : 'Groceries'}
                        {' '} Deals
                    </span>
                    <div className="top-deals-bar">
                        <div className="left-bar">
                            <img src={left} className="left-image"/>
                        </div>
                        <div className="main-top-deals">
                            <DealsCard dealsInfo={this.props.dealsInfo} />
                        </div>
                        <div className="right-bar">
                            <img src={right} className="right-image"/>
                        </div>
                    </div>
                </div>
                <div className="restaurant-section-name">
                    <span className="section-name_r">
                        {this.props.type === 'r' ? 'Restaurants' : 'Groceries'}
                    </span>
                    <button type="button" className="btn btn-success 
                    add-button-section">
                        + Add 
                    </button>
                    <div className="empty-section"></div>
                    <div className="filter-by-text">Filter by:</div>
                    <input type="text" className="filter-by" placeholder="  filter by">
                    </input>
                    <span className="ads-zone-name">
                        Ads Zone
                    </span>
                    <button type="button" className="btn btn-success add-ads-section">
                        + Post
                    </button>
                    
                </div>
                <div className="restaurant-ad-section">
                    <div className="restaurant-block">
                        <Cards cardInfo={this.state.restaurants} />
                    </div>
                    <div className="ad-section">
                        <Ads  />
                    </div>
                </div>

            </div>
            );
    }
}

export default SectionalPageHome;