import React from 'react';
import './../css/FilterByModal.css';
import { tsConstructorType, thisExpression } from '@babel/types';
import SectionalPageHome from './SectionalPageHome';


class FilterByModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            popularShow: true,
            lowToHigh: true,
            highToLow: true
        };
        this.chooseOptionPopular = this.chooseOptionPopular.bind(this);
        this.chooseOptionLowToHigh = this.chooseOptionLowToHigh.bind(this);
        this.chooseOptionHighToLow = this.chooseOptionHighToLow.bind(this);
    }

    componentDidMount() {

        const popular = document.getElementById('popular-id');
        if (popular && popular.className === 'options-filter' ) {
            this.setState({
                popularShow: true
            });
        }

        const low = document.getElementById('low-to-high-id');
        if (low && low.className === 'options-filter') {
            this.setState({
                lowToHigh: true
            });
        }

        const high = document.getElementById('high-to-low-id');
        if (high && high.className === 'options-filter') {
            this.setState({
                highToLow: true
            });
        }
    }

    chooseOptionPopular() {
        this.setState({
            popularShow: !this.state.popularShow
        });
    }

    chooseOptionLowToHigh() {
        this.setState({
            lowToHigh: !this.state.lowToHigh
        });
    }

    chooseOptionHighToLow() {
        this.setState({
            highToLow: !this.state.highToLow
        });
    }

    render() {
        const popular = this.state.popularShow ? "options-filter" : "blue-filter";
        const lowToHigh = this.state.lowToHigh ? "options-filter" : "blue-filter";
        const highToLow = this.state.highToLow ? "options-filter" : "blue-filter";

        return (
        <div className="main-filter-by">
            <div className="filter-by-heading">
                <div className="filter-by-span">  
                    Choose Filter By options 
                </div>
               
            </div>
            <div className="filter-by-body">
                <div className="btn-body-filter">
                    <button type="button" id="popular-id" className={popular} 
                    onClick={this.chooseOptionPopular}>
                        Sort by Popularity
                    </button>
                    <button type="button" id="low-to-high-id" className={lowToHigh}
                    onClick={this.chooseOptionLowToHigh}>
                        Sort Offer prices from Low to High
                    </button>
                    <button type="button" id="high-to-low-id" className={highToLow}
                    onClick={this.chooseOptionHighToLow}>
                        Sort Offer prices from High to Low
                    </button>
               </div>
            </div>    
        </div>
        ); 
    }

}

export default FilterByModal;