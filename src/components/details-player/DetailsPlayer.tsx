import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import imgPhotoGreg from '../../image/Greg-Whittington.png';
import Breadcrumbs from '../bread-crumbs/BreadCrumbs';
import './DetailsPlayer.css';


const DetailsPlayer = () =>{
    const arrBreadCrumbs:any = [
        {text: 'Main', link: '/main'},
        {text: 'Players', link: '/card-players'},
        {text: 'Greg Whittington', link: '/card-players/details-player'},
    ];


  return(
      <div className="col-md-10 col-xl-11 bg-gray w-max bg-100-vh">
          <div className="row details-block-border">
              <div className="col-12">
                  <div className="details-bread-crumbs d-flex justify-content-between">
                      <div className="details-editing">
                          <Breadcrumbs
                              arrBreadCrumbs={arrBreadCrumbs}/>
                      </div>
                      <div className="details-icon-team">
                          <Link to="/main">
                              <FontAwesomeIcon icon={faPencilAlt} />
                          </Link>
                          <Link to="/main">
                              <FontAwesomeIcon icon={faTrash} />
                          </Link>
                      </div>
                  </div>
              </div>
              <div className="col-12">
                  <div className="details-info-team details-player-team d-flex">
                      <img src={imgPhotoGreg} className="details-player-img" alt="" />
                      <div className="details-info-text details-player-text">
                          <h2>Greg Whittington <span className="details-player-span">#22</span></h2>
                          <div className="details-info-inner">
                              <div className="details-info-left">
                                  <p>Position</p>
                                  <span>Forward</span>
                              </div>
                              <div className="details-info-right">
                                  <p>Team</p>
                                  <span>Denver Nuggets</span>
                              </div>
                          </div>
                          <div className="details-info-inner">
                              <div className="details-info-left">
                                  <p>Height</p>
                                  <span>206 cm</span>
                              </div>
                              <div className="details-info-right">
                                  <p>Weight</p>
                                  <span>95 kg</span>
                              </div>
                          </div>
                          <div className="details-info-wrapp">
                              <p>Age</p>
                              <span>27</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );  
};
    
export default DetailsPlayer;