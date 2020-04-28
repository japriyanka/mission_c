import React from 'react';
import './../css/Ads.css';

class Ads extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            top3D: [],
        };
    }

    componentDidMount() {
        /*
        fetch("http://localhost/details.json")
        .then ((response) => response.json())
        .then ((data) => { 
            this.setState({
                top3D: data,
            });
        });
        */  
       this.setState({
           top3D: ["Ad1", "Ad2", "Ad3", "Ad4"]
        });      
    }



    render() {
        return  (
        <div className="ads-zone_t">
            <div className="title_ad">
                Advertisements
            </div>
            <div className="three_restuarants-ad_t">
                {this.state.top3D.map((top_3, index) => {
                    return (<div key={index} className="image-full-body">
                        <div className="image-top">
                            {top_3}
                        </div>
                        <div className="image-name-text">
                            Name {index}
                        </div>
                        <div className="ad-symbol-full">
                            <div className="ad-symbol">
                                Ad 
                            </div>
                            <div className="visit-site">
                                <button type="button" className="visit-site-but">
                                    Visit site
                                </button>
                            </div>
                            </div>
                    </div>)
                })}
            </div>
        </div>);
    }

}


export default Ads;