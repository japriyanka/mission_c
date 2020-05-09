import React from 'react';
import './../css/Ads.css';

const Ads = ({adsList}) => {

    return  (
        <div className="ads-zone_t">
            <div className="title_ad">
                Advertisements
            </div>
            <div className="three_restuarants-ad_t">
                {adsList.map((top_3, index) => {
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


export default Ads;