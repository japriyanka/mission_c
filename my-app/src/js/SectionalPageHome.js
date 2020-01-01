import React from 'react';
import ToolBar from './ToolBar';
import SectionalPageHomeDD from './SectionalPageDD';
import './../css/SectionalPageHome.css';
import left from './../image/left.png';
import DealsCard from './DealsCard';
import right from './../image/right.png';


class SectionalPageHome extends React.Component {
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
                        Top {this.props.type === 'r' ? 'Restaurant' : 'Grocery'}
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

            </div>
            );
    }
}

export default SectionalPageHome;