import React, {useEffect} from 'react';
import SearchTeam from '../search-team/SearchTeam';
import CardTeams from "../card-teams/CardTeams";
import Pagination from '../pagination/Pagination';
import SelectPagesAmount from '../select-pages-amount/SelectPagesAmount';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {pageTeamCount, sizeTeamCount, selectTeamPage, selectTeamSize} from '../../store/paginationSlice';
import {selectSizePage, sizePage} from "../../store/selectPageSlice";
import './Main.css';


const Main = () => {
    const dispatch = useDispatch();
    const select = useSelector(selectSizePage);

    const getSelectValue = (e:any) =>{
        dispatch(sizePage(e.value));
    };

    useEffect(() => {
        const token = localStorage.getItem('Bearer');
        const url = `http://dev.trainee.dex-it.ru/api/Team/GetTeams?Name=name&Page=27&PageSize=${select}`;

        axios.get(url, {
            headers: {"Authorization" : `Bearer ${token}`}
        })
            .then(response => {
                if(response.status === 200){
                    dispatch(pageTeamCount(response.data.page));
                    dispatch(sizeTeamCount(response.data.size));
                }
            })
            .catch(error => console.log(error));
    }, []) ;

    const selPage = useSelector(selectTeamPage);
    const selSize = useSelector(selectTeamSize);


    return(
        <div className="col-md-10 col-xl-11 bg-gray">
            <SearchTeam />
            <CardTeams />
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
    
export default Main;