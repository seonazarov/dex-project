import React from 'react';
import {Link} from 'react-router-dom';
import imageHeaderLogo from '../../image/header-logo.png';
import imageHeaderProfile from '../../image/profile.png';
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUser} from "../../store/signInSlice";
import {isPressed, selectBurger} from "../../store/burgerSlise";
import './Header.css';


const Header = () => {
    const currentUser = useSelector(selectCurrentUser);
    const selBurger = useSelector(selectBurger);
    const dispatch = useDispatch();

    const myHandlerBurger = () => {
        selBurger === false ?
            dispatch(isPressed(true)) :
            dispatch(isPressed(false));
    };

    return(
        <header className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="d-md-none">
                        <div onClick={myHandlerBurger} className="hamburger-menu">
                            <Link to="/main" className="menu-btn">
                                <span></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="nav-menu">
                            <Link to="/main"><img src={imageHeaderLogo} className="nav-logo" alt="logo" /></Link>
                        </div>
                    </div>
                    <div className="d-none d-md-block col-md-6">
                        <Link to="/main" className="nav-profile d-flex">
                            <p>{currentUser.name}</p>
                            <img src={imageHeaderProfile} className="profile-img" alt="profile" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;