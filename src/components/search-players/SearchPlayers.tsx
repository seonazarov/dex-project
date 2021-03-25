import React from 'react';
import {Link} from "react-router-dom";
import SearchSelectPlayers from "./SearchSelectPlayers";
import './SearchPlayers.css';


const SearchPlayers = () => {
    const options = [
        { value: 'Portland trail blazers', label: 'Portland trail blazers' },
        { value: 'Minnesota timberwolves', label: 'Minnesota timberwolves' },
        { value: 'Oklahoma city thunder', label: 'Oklahoma city thunder' },
        { value: 'Memphis Grizzlies', label: 'Memphis Grizzlies' },
        { value: 'Denver Nuggets', label: 'Denver Nuggets' },
        { value: 'Philadelphia seventy sixers', label: 'Philadelphia seventy sixers' },
    ];


    return (
        <div className="row">
            <div className="col-12 col-lg-4">
                <div className="serch-menu">
                    <input
                        type="search"
                        placeholder="Search..."
                        className="search-team player-search-team"/>
                </div>
            </div>

            <div className="col-12 col-lg-4">
                <SearchSelectPlayers
                    options={options}/>
            </div>
            <div className="col-12 col-lg-4">
                <Link
                    to="/card-players/adding-player"
                    className="search-btn">
                    Add +
                </Link>
            </div>
        </div>
    );
};

export default SearchPlayers;