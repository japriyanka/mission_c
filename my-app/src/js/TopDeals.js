import React from 'react';
import Top3 from './top3Deals';
import './../css/TopDeals.css';
import go from './../image/favicon.ico';
import top3Deals from './top3Deals';
class TopDeals extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            top3D: []
        };
    }

    componentDidMount() {
        fetch("http://localhost/details.json")
        .then ((response) => response.json())
        .then ((data) => { 
            console.log(data);
            this.setState({
                top3D: data
            });
        });
    }


    render() {
        return  (
        <div>
            <div className="topic"> Top Deals </div>
            <div className="three_restuarants">
                {this.state.top3D.map((top_3) => {
                return <Top3 key={top_3.id} top3={top_3} />;
                })};
            </div>
            <button className="get-started"> Get Started </button>
        </div>);
    }

}

export default TopDeals;