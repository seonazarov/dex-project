import React from 'react';
import Select from 'react-select';
import './SearchPlayers.css';

const SearchSelectPlayers = ({options}:any) =>{

    return(
        <Select
            isMulti
            name="colors"
            options={options}
            className="basic-multi-select multSelectTitle"
            classNamePrefix="select"/>
    );
};

export default SearchSelectPlayers;