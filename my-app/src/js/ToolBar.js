import React from 'react';
import go from './../image/blue-logo-flame.svg';

/* If mail or phone is needed
import mail from './../image/mail_.jpg';
import phone from './../image/phone.png';
*/

import search from './../image/search.webp';
import './../css/ToolBar.css';


class ToolBar extends React.Component {
    render() {
        return (
        <div className="main-tool-bar">
            <img className="logo" src={go} />
            <div className="mission-text"> Mission - C</div>
            <input type="text" className="search-text" placeholder="Enter your search here.." />
            <img src={search} className="search-logo" />
            <button type="button" className="post-button align-middle"> Post your ad </button>
            <button type="button" className="contact"> Contact </button>
            <div className="logged-in">
                Logged in user: 
                <span className="text-user">{this.props.name}</span>
            </div> 
        </div>
        );
    }
}

export default ToolBar;