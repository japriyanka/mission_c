import React from 'react';
import ToolBar from './ToolBar';
import SectionalPageHomeDD from './SectionalPageDD';
import './../css/SectionalPageHome.css';
import Cards from './Cards';
import Ads from './Ads';
import HeaderObj from './HeaderObj';
import FilterBy from './FilterBy';
import OtherCategories from './OtherCategories';

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

    functionHide() {
        document.getElementById('options-tool-bar-sub').style.display = 'none';
    }

    render() { 

        return (
            <div className="main-sectional-page-home">
                <div className="tool-bar">
                    <HeaderObj />
                </div>
                <div className="body_section">
                    <div className="options-tool-bar-first">
                        <FilterBy />
                    </div>
                    <div className="second-tool-bar">
                        <div className="options-tool-bar-sub">
                            <SectionalPageHomeDD type={this.props.type === 'r' ? 'r' : 'g'} />
                        </div>
                        <div className="top-deals-bar" id="sectional-view-id">
                            <div className="deals-bar-title">
                               Restaurants
                            </div>
                            <div className="sort-by-options">
                                <span className="font-span">
                                    Sort by:
                                </span>
                                <div className="pop-but_">
                                    Popularity
                                </div>
                                <div className="options-but_">
                                    Price High to Low

                                </div>
                                <div className="options-but_">
                                    Price Low to High
                                </div>
                            </div>
                            <div className="deals-card-display">
                                <Cards cardInfo={this.state.restaurants} from="section" />
                            </div>
                        </div>
                        <div className="third-tool-bar-sectional">
                            <OtherCategories />
                        </div>
                    </div>
                    <div className="ads-zone">
                        <Ads />
                    </div>
                </div>
                <div className="footer-body">
                    Mission C &copy; 2019
                </div>
            </div>
              
            );
    }
}

export default SectionalPageHome;