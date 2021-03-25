import React from 'react';
import Select from 'react-select';
import './SelectPagesAmount.css';


const SelectPagesAmount = ({getSelectValue}:any) => {

    const options = [
        { value: 6, label: 6 },
        { value: 12, label: 12 },
        { value: 24, label: 24 }
    ];


    return (
        <div className="col-4">
            <div className="pages-amount">
                <Select
                    className="basic-single"
                    options={options}
                    defaultValue={options[0]}
                    onChange={getSelectValue}/>
            </div>
        </div>
    );
};

export default SelectPagesAmount;