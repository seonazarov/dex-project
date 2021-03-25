import React from 'react';
import imageAddPhoto from '../../image/add_a_photo_24px_rounded.png';
import {Link} from "react-router-dom";
import BreadCrumbs from "../bread-crumbs/BreadCrumbs";
import './NewPlayer.css';


const NewPlayer = () => {
    const arrBreadCrumbs:any = [
        {text: 'Players', link: '/card-players'},
        {text: 'Adding Player', link: '/card-players/adding-player'},
        {text: 'New Player', link: '/card-players/adding-player/new-player'},
    ];


    return (
        <div className="col-md-10 col-xl-11 bg-gray w-max bg-100-vh">
            <div className="row details-block-border">
                <div className="col-12">
                    <div className="details-bread-crumbs d-flex justify-content-between">
                        <div className="details-editing">
                            <BreadCrumbs
                                arrBreadCrumbs={arrBreadCrumbs}/>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="new-team-block">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="new-team-add-image">
                                    <Link to="#" className="new-team-link">
                                        <img src={imageAddPhoto} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <form className="new-team-form">
                                    <div className="new-team-wrapp">
                                        <label htmlFor="id-name">Name</label>
                                        <input type="text" id="id-name" />
                                    </div>
                                    <div className="new-team-wrapp">
                                        <label htmlFor="id-position">Position</label>
                                        <input type="text" id="id-position" />
                                    </div>
                                    <div className="new-team-wrapp">
                                        <label htmlFor="id-player-team">Team</label>
                                        <input type="text" id="id-player-team" />
                                    </div>
                                    <div className="d-flex justify-content-between form-min-input">
                                        <div className="new-player-block">
                                            <label htmlFor="id-player-team">Height</label>
                                            <input type="text" id="id-height" />
                                        </div>
                                        <div className="new-player-block">
                                            <label htmlFor="id-player-team">Weight</label>
                                            <input type="text" id="id-weight" />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between form-min-input">
                                        <div className="new-player-block">
                                            <label htmlFor="id-player-team">Age</label>
                                            <input type="text" id="id-age" />
                                        </div>
                                        <div className="new-player-block">
                                            <label htmlFor="id-player-team">Number</label>
                                            <input type="text" id="id-number" />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button className="new-team-btn">Cancel</button>
                                        <button className="new-team-btn">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPlayer;