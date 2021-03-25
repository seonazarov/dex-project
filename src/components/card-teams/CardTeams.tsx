import React from 'react';
import {Link} from 'react-router-dom';
import imgPortland from '../../image/portland.png';
import './CardTeams.css';


const CardTeams = () => {
    return (
        <div className="row ">
            <div className="col-6 col-lg-4">
                <Link to="/main/team-card/details-team">
                    <div className="team-card">
                        <img src={imgPortland} className="team-image" alt="team" />
                        <div className="card-min-box">
                            <p>Portland trail blazers</p>
                            <span>Year of foundation: 1970</span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-6 col-lg-4">
                <div className="team-card">
                    <img src={imgPortland} className="team-image" alt="team" />
                    <div className="card-min-box">
                        <p>Portland trail blazers</p>
                        <span>Year of foundation: 1970</span>
                    </div>
                </div>
            </div>
            <div className="col-6 col-lg-4">
                <div className="team-card">
                    <img src={imgPortland} className="team-image" alt="team" />
                    <div className="card-min-box">
                        <p>Portland trail blazers</p>
                        <span>Year of foundation: 1970</span>
                    </div>
                </div>
            </div>
            <div className="col-6 col-lg-4">
                <div className="team-card">
                    <img src={imgPortland} className="team-image" alt="team" />
                    <div className="card-min-box">
                        <p>Portland trail blazers</p>
                        <span>Year of foundation: 1970</span>
                    </div>
                </div>
            </div>
            <div className="col-6 col-lg-4">
                <div className="team-card">
                    <img src={imgPortland} className="team-image" alt="team" />
                    <div className="card-min-box">
                        <p>Portland trail blazers</p>
                        <span>Year of foundation: 1970</span>
                    </div>
                </div>
            </div>
            <div className="col-6 col-lg-4">
                <div className="team-card">
                    <img src={imgPortland} className="team-image" alt="team" />
                    <div className="card-min-box">
                        <p>Portland trail blazers</p>
                        <span>Year of foundation: 1970</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardTeams;