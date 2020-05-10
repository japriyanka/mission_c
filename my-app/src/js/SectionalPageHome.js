import React, {useState} from 'react';
import ToolBar from './ToolBar';
import SectionalPageHomeDD from './SectionalPageDD';
import './../css/SectionalPageHome.css';
import Cards from './Cards';
import Ads from './Ads';
import HeaderObj from './HeaderObj';
import FilterBy from './FilterBy';
import OtherCategories from './OtherCategories';
import SearchBar from 'material-ui-search-bar'


const SectionalPageHome = ({ip, type, listData, ads, name}) => {

    const [search, setSearch] = useState('');

    function handleSearchChange(val) {
        setSearch(val);
    }

    function cancelSearch() {
        setSearch('');
    }
    return (
        <div className="main-sectional-page-home">
            <div className="tool-bar">
                <HeaderObj ip={ip} />
            </div>
            <div className="body_section">
                <div className="options-tool-bar-first">
                    <FilterBy />
                </div>
                <div className="second-tool-bar">
                    <div className="options-tool-bar-sub">
                        <SectionalPageHomeDD type={type === 'r' ? 'r' : 'g'} />
                    </div>
                    <div className="top-deals-bar" id="sectional-view-id">
                        <div className="deals-bar-title">
                            <div className="deals_bar_title_name">
                                {type === 'r' ? 'Restaurants' : 'Groceries'} ({name})
                            </div>
                            <div className="deals_bar_search_box">
                                <SearchBar 
                                    className="search_bar_section"
                                    value={search}
                                    onChange={(newValue) => handleSearchChange(newValue)}
                                    onCancelSearch={cancelSearch}
                                />
                            </div>
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
                            <Cards ip={ip} cardInfo={listData} searchValue={search} from="section" />
                        </div>
                    </div>
                    <div className="ads-zone_insidehome">
                        <Ads adsList={ads} />
                    </div>
                    <div className="third-tool-bar-sectional">
                        <OtherCategories />
                    </div>
                </div>
                <div className="ads-zone">
                    <Ads adsList={ads} />
                </div>
            </div>
            <div className="footer-body">
                Mission C &copy; 2019
            </div>
        </div>
            
            );

}

export default SectionalPageHome;