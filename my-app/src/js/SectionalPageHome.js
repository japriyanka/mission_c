import React from 'react';
import ToolBar from './ToolBar';
import SectionalPageHomeDD from './SectionalPageDD';
import './../css/SectionalPageHome.css';
import left from './../image/left.png';
import DealsCard from './DealsCard';
import Modal from 'react-awesome-modal';
import right from './../image/right.png';
import Cards from './Cards';
import Ads from './Ads';
import FilterByModal from './FilterByModal';
import HeaderObj from './HeaderObj';

class SectionalPageHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            filterShow: false,
            popularShow: true,
            lowToHighShow: true,
            highToLowShow: true
        };
        this.showFilterBy = this.showFilterBy.bind(this);
        this.hideFilterBy = this.hideFilterBy.bind(this);
        this.closeButtonPopular = this.closeButtonPopular.bind(this);
        this.closeButtonHigh = this.closeButtonHigh.bind(this);
        this.closeButtonLow = this.closeButtonLow.bind(this);
        this.applyFilterBy = this.applyFilterBy.bind(this);
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

    showFilterBy() {
        this.setState({
            filterShow: true
        });
    }

    applyFilterBy() {
        this.setState({
            filterShow: false,
            popularShow:  document.getElementById('popular-id').className === 'options-filter' 
            ? true : false,
            lowToHighShow:  document.getElementById('low-to-high-id').className === 'options-filter'
            ? true : false,
            highToLowShow: document.getElementById('high-to-low-id').className === 'options-filter'
            ? true : false
        });
    } 

    hideFilterBy() {
        this.setState({
            filterShow: false,
        });
        this.closeButtonHigh();
        this.closeButtonLow();
        this.closeButtonPopular();
    }

    closeButtonPopular() {
        this.setState({
            popularShow: true
        });
        const popular = document.getElementById('popular-id');
        if (popular) {
            popular.className = 'options-filter';
        }
    }


    closeButtonLow() {
        const low = document.getElementById('low-to-high-id');
        if (low) {
            low.className = 'options-filter';
        }
        this.setState({
            lowToHighShow: true
        });
    }

    closeButtonHigh() {
        const high = document.getElementById('high-to-low-id');
        if (high) {
            high.className = 'options-filter';
        }
        this.setState({
            highToLowShow: true
        });
    }

    render() { 

        return (
            <div className="main-sectional-page-home">
                <div className="tool-bar">
                    <HeaderObj />
                </div>
                <div className="second-tool-bar">
                    <div className="first-half-second-tool-bar">
                        <div className="options-tool-bar-sub">
                            <SectionalPageHomeDD />
                        </div>
                      
                        <div className="top-deals-bar">
                            <div className="deals-bar-title">
                                Top 3 deals
                            </div>
                            <div className="deals-card-display">
                                <DealsCard dealsInfo={this.props.dealsInfo} />
                            </div>
                        </div>
                        <div className="options-tool-bar-sub">
                            <SectionalPageHomeDD />
                        </div>
                        <div className="top-deals-bar">
                            <div className="deals-bar-title">
                               Restaurants
                            </div>
                            <div className="sort-by-options">
                                <span className="font-span">
                                    Sort by:
                                </span>
                                <div className="pop-but_">
                                    popularity
                                </div>
                                <div className="options-but_">
                                    price high to low

                                </div>
                                <div className="options-but_">
                                    price low to high
                                </div>
                            </div>
                            <div className="deals-card-display">
                                <Cards cardInfo={this.state.restaurants} />
                            </div>
                        </div>
                       
                       
                        
                    </div>
                    <div className="ads-zone">
                        <Ads />
                    </div>
                </div>
            </div>
              
            );
    }
}

export default SectionalPageHome;


/**
 *                             <DealsCard dealsInfo={this.props.dealsInfo} />

 * <div className="scrollable-bar" id="scrollable-bar">
                    <span className="top-deals-name">
                        Top {this.props.type === 'r' ? 'Restaurants' : 'Groceries'}
                        {' '} Deals
                    </span>
                </div>
                <div className="sectional-second-half">
                
                <div className="restaurant-section-name">
                    <span className="section-name_r">
                        {this.props.type === 'r' ? 'Restaurants' : 'Groceries'}
                    </span>
                    <button type="button" className="btn btn-success 
                    add-button-section">
                        + New 
                    </button>
                    <div className="empty-section">
                        <div className="options-list" hidden={this.state.popularShow}>
                            <div className="option-name">
                                <div className="l_name">Popularity</div>
                            </div>
                            <button type="button" className="close-button"
                            onClick={this.closeButtonPopular}>
                                X
                            </button>
                        </div>
                        <div className="options-list" hidden={this.state.lowToHighShow}>
                            <div className="option-name" >
                                <div className="l_name">Low -> High</div> 
                            </div>
                            <button type="button" className="close-button"
                            onClick={this.closeButtonLow}>
                                X
                            </button>
                        </div>
                        <div className="options-list" hidden={this.state.highToLowShow}>
                            <div className="option-name" >
                                <div className="l_name">High -> Low</div>
                            </div>
                            <button type="button" className="close-button"
                            onClick={this.closeButtonHigh}>
                                X
                            </button>
                        </div>

                    </div>
                    <div className="filter-by-text">Filter by:</div>
                    <input type="text" className="filter-by" placeholder="  choose option(s) " 
                    onClick={this.showFilterBy}>
                    </input>
                    <span className="ads-zone-name">
                       Latest Offers 
                    </span>
                    <button type="button" className="btn btn-success add-ads-section">
                        + Post
                    </button>
                    
                </div>
                <div className="restaurant-ad-section" id="restaurant-ad-section">
                    <div className="restaurant-block">
                        <Cards cardInfo={this.state.restaurants} />
                    </div>
                    <div className="ad-section">
                        <Ads  />
                    </div>
                </div>
                <Modal name={this.state.filterShow} visible={this.state.filterShow} height="300px" width="500px"  
                        effect="fadeInUp" onClickAway={this.hideFilterBy.bind(this)}>
                    <FilterByModal />
                    <button type="button" className="apply-filter-but"
                    onClick={this.applyFilterBy}>
                        Apply Filter
                    </button>
                    <button type="button" className="close-filter-but"
                    onClick={this.hideFilterBy}>
                        Clear & Close
                    </button>
                </Modal>
                </div>
 */