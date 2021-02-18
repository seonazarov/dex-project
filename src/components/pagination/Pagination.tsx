import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './Pagination.css';

const Pagination = () => {
    return(
        <div className="col-8">
            <div className="pages">
                <FontAwesomeIcon icon={faAngleLeft} />
                <span className="page-number">1</span>
                <span className="page-number pages-active">2</span>
                <span className="page-number">3</span>
                <span className="page-number">4</span>
                <span className="page-number">...</span>
                <span className="page-number">27</span>
                <FontAwesomeIcon icon={faAngleRight} />
            </div>
        </div>
    );
};

export default Pagination;