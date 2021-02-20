import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { logOut } from '../../store/signInSlice';
import './SideBar.css';


const SideBar = () => {
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(logOut(false));
        localStorage.clear();
    };


    return(
        <div className="d-none d-md-block col-md-2 col-xl-1">
            <div className="side-bar pop-up text-center">
                <div className="pop-up-top">
                    <Link to="/" className="pop-up-fa">
                        <FontAwesomeIcon icon={faUserFriends} />
                        <Link to="/" className="">Teams</Link>
                    </Link>
                    <Link to="/" className="pop-up-bottom">
                        <FontAwesomeIcon icon={faUser} />
                        <Link to="/" className="">Players</Link>
                    </Link>
                </div>
                <Link to="/sign-in"
                      onClick={signOut}
                      className="pop-up-bottom pop-up-bot"
                >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <p className="">Sign out</p>
                </Link>
            </div>
        </div>
    );
};

export default SideBar;