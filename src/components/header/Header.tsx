import React from 'react';
import { Link } from 'react-router-dom';
import imageHeaderLogo from '../../image/header-logo.png';
import imageHeaderProfile from '../../image/profile.png';
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../store/signInSlice";
import './Header.css';


const Header = () => {
    const currentUser = useSelector(selectCurrentUser);

    const myHandlerBurger = () => {
        // let menu = document.querySelector('.wrapp-menu').style;
        // if (menu.display === 'none') {
        //     menu.display = 'block';
        // } else {
        //     menu.display = 'none';
        // }
    };

    return(
        <header className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="d-md-none">
                        <div onClick={myHandlerBurger} className="hamburger-menu">
                            <a href="#" className="menu-btn">
                                <span></span>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="nav-menu">
                            <Link to="/"><img src={imageHeaderLogo} className="nav-logo" alt="logo" /></Link>
                        </div>
                    </div>
                    <div className="d-none d-md-block col-md-6">
                        <a href="#" className="nav-profile d-flex">
                            <p>{currentUser.name}</p>
                            <img src={imageHeaderProfile} className="profile-img" alt="profile" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;