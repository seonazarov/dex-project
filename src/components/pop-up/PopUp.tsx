import React from 'react';
import './PopUp.css';

const PopUp = () => {
    return(
        <div className="wrapp-menu d-md-none">
            <div id="bg_layer"></div>
            <div className="menu__box">
                <div className="side-bar-top">
                    <a href="#" className="nav-profile side-bar-profile  d-flex">
                        <p>John Smith</p>
                        <img src="./image/profile.png" className="side-bar-img" alt="profile" />
                    </a>
                    <hr/>
                    <div className="side-bar-link">
                        <div className="side-bar-fa">
                            <i className="fas fa-user-friends" />
                            <a href="#" className="">Teams</a>
                        </div>
                        <div className="side-bar-left">
                            <i className="fas fa-user" />
                            <a href="#" className="">Players</a>
                        </div>
                    </div>
                </div>
                <div className="side-bar-bottom">
                    <i className="fas fa-sign-out-alt" />
                    <a href="#" className="">Sign out</a>
                </div>
            </div>
        </div>
    );
};

export default PopUp;