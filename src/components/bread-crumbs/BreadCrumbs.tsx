import React from 'react';
import {Link} from "react-router-dom";
import './BreadCrumbs.css';


const BreadCrumbs = ({arrBreadCrumbs}:any) => {
    return (
        <nav aria-label="breadcrumb crambs">
            <ol className="breadcrumb crambs">
                {arrBreadCrumbs.map((item:any) => (
                    <li key={item.link+item.text}
                        className={`breadcrumb-item crambs-item ${item.claz}`}>
                        <Link to={item.link}>{item.text}</Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default BreadCrumbs;