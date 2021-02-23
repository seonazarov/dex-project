import React from 'react';
import { Link } from 'react-router-dom';
import DetailsTeamRoster from "./DetailsTeamRoster";
import imgDenverNuggets from '../../image/Denver-Nuggets.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import './DetailsTeam.css';


const DetailsTeam = () => {
    return (
        <div className="col-md-10 col-xl-11 bg-gray">
            <div className="row details-block-border">
                <div className="col-12">
                    <div className="details-bread-crumbs d-flex justify-content-between">
                        <div className="details-editing">
                            <div className="details-editing-text"><span>Main</span> / <span>Teams</span> / <span>Denver Nuggets</span></div>
                        </div>
                        <div className="details-icon-team">
                            <Link to="/">
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </Link>
                            <Link to="/">
                                <FontAwesomeIcon icon={faTrash} />
                            </Link>
                        </div>
                    </div>
                </div>
                {/*// <!--section-description-->*/}
                <div className="col-12">
                    <div className="details-info-team d-flex">
                        <img src={imgDenverNuggets} className="details-info-img" alt="" />
                        <div className="details-info-text">
                            <h2>Denver Nuggets</h2>
                            <div className="details-info-inner">
                                <div className="details-info-left">
                                    <p>Year of foundation</p>
                                    <span>1976</span>
                                </div>
                                <div className="details-info-right">
                                    <p>Division</p>
                                    <span>Northwestern</span>
                                </div>
                            </div>
                            <div className="details-info-wrapp">
                                <p>Conference</p>
                                <span>Western</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DetailsTeamRoster />
        </div>
    );
};

export default DetailsTeam;