import React from 'react';
import './../css/Introduction.css';
import Discover from './Discover';
import AvailableCity from './AvailableCity';
import AvailableCuisine from './AvailableCuisine';
import HeaderObj from './HeaderObj';
import BusinessContact from './businessContact';


class Introduction extends React.Component {

    state = {
        city: '',
        ip: '',
        suburb: '',
        cuisine: ''
    };

    handleCityChange = async(cityName) => {
        this.setState({city: cityName});
    }
    handleSuburbChange = async(suburbName) => {
        this.setState({suburb: suburbName});
    }
    handleCuisineChange = async(cuisineName) => {
        this.setState({cuisine: cuisineName});
    }

    render() {
        const {ip, city, suburb, cuisine} = this.state; 

        const listNames = ['Canberra', 'Perth', 'Sydney', 'Canberra', 'Perth', 'Sydney'];
        const cuisineList = ['Thai', 'Indian', 'Korean', 'Thai', 'Indian', 'Korean'];
        return (
            <div className="introduction-page">
                <HeaderObj ip={this.props.ipaddress} />
                <div className="introduction-page-body">
                    <div className="discover-intro-body">
                        <Discover ip={this.props.ipaddress}
                        handleCityChange={this.handleCityChange}
                        handleSuburbChange={this.handleSuburbChange}
                        handleCuisineChange={this.handleCuisineChange} />
                    </div>                    
                    <div className="available-city-body">
                        <AvailableCity ip={this.props.ipaddress} name="Cities" option={city} listNames={listNames} />
                    </div>
                    <div className="available-city-body">
                        <AvailableCuisine ip={this.props.ipaddress} name="Cuisines" value={cuisine} listNames={cuisineList} />
                    </div>
                    <div class="style_business_information">
                        <BusinessContact />
                    </div>
                </div>
                <div className="footer-body">
                    Mission C &copy; 2019
                </div>

            </div>
        );
    }

}

export default Introduction;