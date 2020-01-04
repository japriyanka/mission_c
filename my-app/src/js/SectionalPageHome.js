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

class SectionalPageHome extends React.Component {

    popularShow = true;
    lowToHighShow = true;
    highToLowShow = true;

    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            filterShow: false
        };
        this.showFilterBy = this.showFilterBy.bind(this);
        this.hideFilterBy = this.hideFilterBy.bind(this);
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

    hideFilterBy() {
        this.setState({
            filterShow: false
        });
        this.popularShow = document.getElementById('popular-id').className === 'options-filter' 
        ? true : false;
        this.lowToHighShow = document.getElementById('low-to-high-id').className === 'options-filter'
        ? true : false; 
        this.highToLowShow = document.getElementById('high-to-low-id').className === 'options-filter'
        ? true : false;
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
                    <div className="empty-section">
                        <div className="options-list" hidden={this.popularShow}
                        onClick={this.showFilterBy}>
                            <div className="option-name">
                                <div className="l_name">Popularity</div>
                            </div>
                            <button type="button" className="close-button">
                                X
                            </button>
                        </div>
                        <div className="options-list" hidden={this.lowToHighShow}
                        onClick={this.showFilterBy}>
                            <div className="option-name" >
                                <div className="l_name">Low -> High</div> 
                            </div>
                            <button type="button" className="close-button">
                                X
                            </button>
                        </div>
                        <div className="options-list" hidden={this.highToLowShow}
                        onClick={this.showFilterBy}>
                            <div className="option-name" >
                                <div className="l_name">High -> Low</div>
                            </div>
                            <button type="button" className="close-button">
                                X
                            </button>
                        </div>

                    </div>
                    <div className="filter-by-text">Filter by:</div>
                    <input type="text" className="filter-by" placeholder="  choose option(s) " 
                    onClick={this.showFilterBy}>
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
                <Modal visible={this.state.filterShow} height="300px" width="500px"  
                        effect="fadeInUp" onClickAway={this.hideFilterBy.bind(this)}>
                    <FilterByModal />
                    <button type="button" className="apply-filter-but"
                    onClick={this.hideFilterBy}>
                        Apply Filter
                    </button>
                    <button type="button" className="close-filter-but"
                    onClick={this.hideFilterBy}>
                        Close
                    </button>
                </Modal>
            </div>
              
            );
    }
}

export default SectionalPageHome;