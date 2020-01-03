import React from 'react';
import Top3 from './top3Deals';
import './../css/Ads.css';

class Ads extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            top3D: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost/details.json")
        .then ((response) => response.json())
        .then ((data) => { 
            this.setState({
                top3D: data,
            });
        });        
    }

    render() {
        return  (
        <div className="ads-zone">
            <div className="three_restuarants-ad">
                {this.state.top3D.map((top_3) => {
                return <Top3 key={top_3.id} top3={top_3} />;
                })};
            </div>
        </div>);
    }

}


export default Ads;