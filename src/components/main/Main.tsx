import React from 'react';
import SearchTeam from '../search-team/SearchTeam';
import CardTeams from "../card-teams/CardTeams";
import Pagination from '../pagination/Pagination';
import SelectPagesAmount from '../select-pages-amount/SelectPagesAmount';
import './Main.css';


const Main = () => {
    return(
        <div className="col-md-10 col-xl-11 bg-gray">
            <SearchTeam />
            <CardTeams />
            <div className="row">
                <Pagination />
                <SelectPagesAmount />
            </div>
        </div>
    );    
};
    
export default Main;