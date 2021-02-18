import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';

const SideBar = () => {
    return(
        <div className="d-none d-md-block col-md-2 col-xl-1">
            <div className="side-bar pop-up text-center">
                <div className="pop-up-top">
                    <div className="pop-up-fa">
                        <FontAwesomeIcon icon={faUserFriends} />
                        <Link to="/" className="">Teams</Link>
                    </div>
                    <div className="pop-up-bottom">
                        <FontAwesomeIcon icon={faUser} />
                        <Link to="/" className="">Players</Link>
                    </div>
                </div>
                <div className="pop-up-bottom pop-up-bot">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <Link to="/" className="">Sign out</Link>
                </div>
            </div>
        </div>
    );
};

export default SideBar;