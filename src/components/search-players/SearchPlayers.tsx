import React from 'react';
import { Link } from "react-router-dom";
import './SearchPlayers.css';
import AddingPlayer from "../adding-player/AddingPlayer";


const SearchPlayers = () => {
    return (
        <div className="row">
            <div className="col-12 col-lg-4">
                <div className="serch-menu">
                    <input type="search" placeholder="Search..." className="search-team player-search-team"/>
                </div>
            </div>

            <div className="col-12 col-lg-4">
                <form>
                    <div className="__mult__select" data-state="">
                        <div className="__mult__select__title" data-default="Option 0">Select...</div>
                        <div className="__mult__select__content">
                            <input id="singleMultSelect0" className="__mult__select__input" type="radio" name="multSingleSelect" checked />
                            <label htmlFor="singleMultSelect0" className="__mult__select__label"></label>
                            <input id="singleMultSelect1" className="__mult__select__input" type="radio" name="multSingleSelect" />
                            <label htmlFor="singleMultSelect1" className="__mult__select__label">Portland trail blazers</label>
                            <input id="singleMultSelect2" className="__mult__select__input" type="radio" name="multSingleSelect" />
                            <label htmlFor="singleMultSelect2" className="__mult__select__label">Minnesota timberwolves</label>
                            <input id="singleMultSelect3" className="__mult__select__input" type="radio" name="multSingleSelect" />
                            <label htmlFor="singleMultSelect3" className="__mult__select__label">Oklahoma city thunder</label>
                            <input id="singleMultSelect4" className="__mult__select__input" type="radio" name="multSingleSelect" />
                            <label htmlFor="singleMultSelect4" className="__mult__select__label">Memphis Grizzlies</label>
                            <input id="singleMultSelect5" className="__mult__select__input" type="radio" name="multSingleSelect" />
                            <label htmlFor="singleMultSelect5" className="__mult__select__label">Denver Nuggets</label>
                            <input id="singleMultSelect6" className="__mult__select__input" type="radio" name="multSingleSelect" />
                            <label htmlFor="singleMultSelect6" className="__mult__select__label">Philadelphia seventy sixers</label>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-12 col-lg-4">
                <Link to="/adding-player" className="search-btn">Add +</Link>
            </div>
        </div>
    );
};

export default SearchPlayers;