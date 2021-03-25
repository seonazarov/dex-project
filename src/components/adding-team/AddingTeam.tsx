import React from 'react';
import imageAddTeams from '../../image/add-teams.png';
import {Link} from "react-router-dom";
import './AddingTeam.css';


const AddingTeam = () => {
    return(
        <div className="col-md-10 col-xl-11 bg-gray">
            <div className="add-block-teams d-flex">
                <div className="add-card-teams">
                    <img src={imageAddTeams} className="add-card-img" alt="" />
                    <h2 className="add-card-title">Empty here</h2>
                    <p className="add-card-text">Add new teams to continue</p>
                    <Link
                        to="/main/team-card/adding-team/new-team"
                        className="add-card-btn">
                        Add +
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AddingTeam;