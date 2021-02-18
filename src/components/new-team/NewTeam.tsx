// import React from 'react';
import imageAddPhoto from '../../image/add_a_photo_24px_rounded.png';
// import { Link } from "react-router-dom";
import './NewTeam.css';


const NewTeam = () => {
    return (
        <div className="col-md-10 col-xl-11 bg-gray w-max bg-100-vh">
            <div className="row details-block-border">
                <div className="col-12">
                    <div className="details-bread-crumbs d-flex justify-content-between">
                        <div className="details-editing">
                            <div className="details-editing-text"><span>Main</span> / <span>Players</span> / <span>Greg Whittington</span></div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="new-team-block">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="new-team-add-image">
                                    <a href="#" className="new-team-link">
                                        {/*<input type="file" />*/}
                                        <img src={imageAddPhoto} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <form className="new-team-form">
                                    <div className="new-team-wrapp">
                                        <label htmlFor="id-team">Team</label>
                                        <input type="text" id="id-team" />
                                    </div>
                                    <div className="new-team-wrapp">
                                        <label htmlFor="id-division">Division</label>
                                        <input type="text" id="id-division" />
                                    </div>
                                    <div className="new-team-wrapp">
                                        <label htmlFor="id-conferense">Conferense</label>
                                        <input type="text" id="id-conferense" />
                                    </div>
                                    <div className="new-team-wrapp">
                                        <label htmlFor="id-foundation">Year of foundation</label>
                                        <input type="number" id="id-foundation" />
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

export default NewTeam;