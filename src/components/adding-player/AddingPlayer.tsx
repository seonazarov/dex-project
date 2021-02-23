import React from 'react';
import imageAddPlayer from '../../image/add-players.png';
import { Link } from "react-router-dom";
import './AddingPlayer.css';


const AddingPlayer = () => {
    return(
        <div className="col-md-10 col-xl-11 bg-gray bg-fluid">
            <div className="add-block-teams d-flex">
                <div className="add-card-teams add-card-players">
                <img src={imageAddPlayer} className="add-card-img" alt="" />
                    <h2 className="add-card-title">Empty here</h2>
                    <p className="add-card-text">Add new players to continue</p>
                    <Link to="/new-player" className="add-card-btn">Add +</Link>
                </div>
            </div>
        </div>
    );
};

export default AddingPlayer;