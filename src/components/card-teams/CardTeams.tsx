import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import imgPortland from '../../image/portland.png';
import axios from "axios";
import './CardTeams.css';


const CardTeams = () => {
    const url = 'http://dev.trainee.dex-it.ru/api/Team/GetTeams';

    useEffect(() => {

        // axios.get(url)
        //     .then(response => {
        //         console.log(response);
        //
        //     })
        //     .catch(error => console.log(error));


        // fetch(url, {
        //     method: 'GET',
        //     headers: {
        //         'accept': 'application/json',
        //         'Authorization': 'Bearer http://dev.trainee.dex-it.ru/api/Auth/SignIn'
        //     },
        //     body: JSON.stringify({}),
        // })
        //     .then(response => response.json())
        //     .then(response => console.log(response))

    }) ;


    return (
        <div className="row ">

            <div className="col-6 col-lg-4">
                <Link to="/details-team">
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