import React, {useEffect} from 'react';
import SearchPlayers from "../search-players/SearchPlayers";
import imgPhoto from '../../image/photo.png';
import Pagination from '../pagination/Pagination';
import SelectPagesAmount from '../select-pages-amount/SelectPagesAmount';
import {Link} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {pagePlayersCount, sizePlayersCount,
        selectPlayersPage, selectPlayersSize} from "../../store/paginationSlice";
import {sizePage} from "../../store/selectPageSlice";
import './CardPlayers.css';


const CardPlayers = () => {
    const url = 'http://dev.trainee.dex-it.ru/api/Player/GetPlayers?Name=name&Page=15&PageSize=6';
    const token = localStorage.getItem('Bearer');
    const dispatch = useDispatch();

    const getSelectValue = (e:any) =>{
        dispatch(sizePage(e.value));
    };

    useEffect(() => {
        axios.get(url, {
            headers: {"Authorization" : `Bearer ${token}`}
        })
            .then(response => {
                if(response.status === 200){
                    dispatch(pagePlayersCount(response.data.page));
                    dispatch(sizePlayersCount(response.data.size));
                }
            })
            .catch(error => console.log(error));
    }, []) ;

    const selPage = useSelector(selectPlayersPage);
    const selSize = useSelector(selectPlayersSize);

    return(
        <div className="col-md-10 col-xl-11 bg-gray">
            <SearchPlayers />
            <div className="row ">
                <div className="col-6 col-lg-4">
                    <Link to="/card-players/details-player">
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
                <Pagination
                    selPage={selPage}
                    selSize={selSize}/>
                <SelectPagesAmount
                    getSelectValue={getSelectValue}/>
            </div>
        </div>
    );
};

export default CardPlayers;