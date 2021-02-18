import React from 'react';
import { Link } from "react-router-dom";
import './SearchTeam.css';


const SearchTeam = () => {
    return (
        <div className="row">
            <div className="col-12 col-lg-4">
                <div className="serch-menu">
                    <input type="search" placeholder="Search..." className="search-team"/>
                </div>
            </div>
            <div className="col-12 col-lg-8">
                <Link to="/adding-team" className="search-btn">Add +</Link>
            </div>
        </div>
    );
};

export default SearchTeam;