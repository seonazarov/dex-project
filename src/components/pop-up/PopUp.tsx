import React, {useEffect, useRef} from 'react';
import {Link, NavLink, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {authorized, logOut, selectCurrentUser} from "../../store/signInSlice";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignOutAlt, faUser, faUserFriends} from '@fortawesome/free-solid-svg-icons';
import imageHeaderProfile from '../../image/profile.png';
import {isPressed} from "../../store/burgerSlise";
import './PopUp.css';


interface Props {
    selBurger: boolean,
}

const PopUp = ({selBurger}:Props) => {
    const currentUser = useSelector(selectCurrentUser);
    const displayBurger = useRef<any>(null);
    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() =>{
        if(selBurger) {
            displayBurger.current.classList.add('d-block');
        }
    }, [selBurger]);

    const signOut = () => {
        dispatch(logOut(false));
        dispatch(authorized(false));
        dispatch(isPressed(false));
        localStorage.clear();
        history.push("/sign-in");
    };

    const linkHide = () => {
        dispatch(isPressed(false));
    };

    return(
        <div className="wrapp-menu d-md-none" ref={displayBurger}>
            <div id="bg_layer"></div>
            <div className="menu__box">
                <div className="side-bar-top">
                    <NavLink
                        to="/main"
                        className="nav-profile side-bar-profile d-flex"
                        activeClassName="active">
                        <p>{currentUser.name}</p>
                        <img
                            src={imageHeaderProfile}
                            className="side-bar-img"
                            alt="profile" />
                    </NavLink>
                    <hr/>
                    <div className="side-bar-link">
                        <div className="side-bar-fa">
                            <FontAwesomeIcon icon={faUserFriends} />
                            <NavLink
                                to="/main"
                                activeClassName="active"
                                onClick={linkHide}>
                                Teams
                            </NavLink>
                        </div>
                        <div className="side-bar-left">
                            <FontAwesomeIcon icon={faUser} />
                            <NavLink
                                to="/card-players"
                                onClick={linkHide}
                                className="">
                                Players
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="side-bar-bottom">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <Link to="/sign-in" onClick={signOut}>Sign out</Link>
                </div>
            </div>
        </div>
    );
};

export default PopUp;