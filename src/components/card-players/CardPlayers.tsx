import React from 'react';
import SearchPlayers from "../search-players/SearchPlayers";
import imgPhoto from '../../image/photo.png';
import Pagination from '../pagination/Pagination';
import SelectPagesAmount from '../select-pages-amount/SelectPagesAmount';
import { Link } from "react-router-dom";
import './CardPlayers.css';


const CardPlayers = () => {

    return(
        <div className="col-md-10 col-xl-11 bg-gray">
            <SearchPlayers />
            <div className="row ">
                <div className="col-6 col-lg-4">
                    <Link to="/details-player">
                        <div className="team-card">
                            <img src={imgPhoto} className="team-players" alt="team" />
                            <div className="card-min-box">
                                <p>Jaylen Adams <span className="card-min-id">#10</span></p>
                                <span>Portland trail blazers</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 col-lg-4">
                    <div className="team-card">
                        <img src={imgPhoto} className="team-players" alt="team" />
                        <div className="card-min-box">
                            <p>Portland trail blazers</p>
                            <span>Year of foundation: 1970</span>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4">
                    <div className="team-card">
                        <img src={imgPhoto} className="team-players" alt="team" />
                        <div className="card-min-box">
                            <p>Portland trail blazers</p>
                            <span>Year of foundation: 1970</span>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4">
                    <div className="team-card">
                        <img src={imgPhoto} className="team-players" alt="team" />
                        <div className="card-min-box">
                            <p>Portland trail blazers</p>
                            <span>Year of foundation: 1970</span>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4">
                    <div className="team-card">
                        <img src={imgPhoto} className="team-players" alt="team" />
                        <div className="card-min-box">
                            <p>Portland trail blazers</p>
                            <span>Year of foundation: 1970</span>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4">
                    <div className="team-card">
                        <img src={imgPhoto} className="team-players" alt="team" />
                        <div className="card-min-box">
                            <p>Portland trail blazers</p>
                            <span>Year of foundation: 1970</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <Pagination />
                <SelectPagesAmount />
            </div>
        </div>
    );
};

export default CardPlayers;