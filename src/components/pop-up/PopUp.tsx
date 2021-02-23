import React from 'react';
import { Link } from "react-router-dom";
import './PopUp.css';


const PopUp = () => {
    return(
        <div className="wrapp-menu d-md-none">
            <div id="bg_layer"></div>
            <div className="menu__box">
                <div className="side-bar-top">
                    <Link to="/" className="nav-profile side-bar-profile d-flex">
                        <p>John Smith</p>
                        <img src="./image/profile.png" className="side-bar-img" alt="profile" />
                    </Link>
                    <hr/>
                    <div className="side-bar-link">
                        <div className="side-bar-fa">
                            <i className="fas fa-user-friends" />
                            <Link to="/" className="">Teams</Link>
                        </div>
                        <div className="side-bar-left">
                            <i className="fas fa-user" />
                            <Link to="/" className="">Players</Link>
                        </div>
                    </div>
                </div>
                <div className="side-bar-bottom">
                    <i className="fas fa-sign-out-alt" />
                    <Link to="/" className="">Sign out</Link>
                </div>
            </div>
        </div>
    );
};

export default PopUp;