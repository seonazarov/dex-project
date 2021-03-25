import React from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserFriends} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from "react-redux";
import {authorized, logOut} from '../../store/signInSlice';
import './SideBar.css';


const SideBar = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    const signOut = () => {
        dispatch(logOut(false));
        dispatch(authorized(false));
        localStorage.clear();
        history.push("/sign-in");
    };


    return(
        <div className="d-none d-md-block col-md-2 col-xl-1">
            <nav className="side-bar pop-up text-center">
                <div className="pop-up-top">
                    <NavLink
                        to="/main"
                        activeClassName="active"
                        className="pop-up-fa">
                        <FontAwesomeIcon icon={faUserFriends} className="faUser" />
                        <p>Teams</p>
                    </NavLink>

                    <NavLink
                        to="/card-players/"
                        activeClassName="active"
                        className="pop-up-bottom">
                        <FontAwesomeIcon icon={faUser} className="faUser"/>
                        <p>Players</p>
                    </NavLink>
                </div>
                <NavLink
                    to="/sign-in"
                    onClick={signOut}
                    className="pop-up-bottom pop-up-bot">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <p>Sign out</p>
                </NavLink>
            </nav>
        </div>
    );
};

export default SideBar;