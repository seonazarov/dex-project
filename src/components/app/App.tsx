import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../store/signInSlice";
import Header from '../header/Header';
import Main from '../main/Main';
import CardTeams from '../card-teams/CardTeams';
import PopUp from "../pop-up/PopUp";
import SideBar from "../side-bar/SideBar";
import AddingTeam from "../adding-team/AddingTeam";
import NewTeam from "../new-team/NewTeam";
import DetailsTeam from "../details-team/DetailsTeam";
import SignIn from '../sign-in/SignIn';
import SignUp from '../sign-up/SignUp';
import './App.css';



const App = () => {
    // const isAuth = useSelector(selectIsAuth);

  return (
    <Router>
      <Header />
        <div className="main-wrapper">
            <PopUp />
            <div className="container-fluid height-100">
                <div className="row">
                    <SideBar />
                    <Switch>
                        {/*<Route path="/sign-in" render={() => !isAuth ? <SignIn/> : <Main />}/>*/}

                        <Route exact path="/" component={Main} />
                        <Route path="/team-card" component={CardTeams} />
                        <Route path="/adding-team" component={AddingTeam} />
                        <Route path="/new-team" component={NewTeam} />
                        <Route path="/details-team" component={DetailsTeam} />
                        <Route path="/sign-in" component={SignIn} />
                        <Route path="/sign-up" component={SignUp} />
                    </Switch>
                </div>
            </div>
        </div>
    </Router>
  );
};

export default App;