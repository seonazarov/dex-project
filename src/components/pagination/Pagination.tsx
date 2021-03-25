import React from "react";
import ReactPaginate from 'react-paginate';
import './Pagination.css';


type Props = {
    selPage: number,
    selSize: number,
};

const Pagination = ({selPage, selSize}: Props) => {

    const handlePageClick = () =>{

    };

    return(
        <div className="col-8">
            <div className="pages">
                <ReactPaginate
                    previousLabel={'‹'}
                    nextLabel={'›'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={selPage}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}/>
            </div>
        </div>
    );
};

export default Pagination;