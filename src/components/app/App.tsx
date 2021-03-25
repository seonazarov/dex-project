import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";
import {selectIsAuth} from "../../store/signInSlice";
import SignIn from '../sign-in/SignIn';
import SignUp from '../sign-up/SignUp';
import Header from '../header/Header';
import Main from '../main/Main';
import CardTeams from '../card-teams/CardTeams';
import PopUp from "../pop-up/PopUp";
import SideBar from "../side-bar/SideBar";
import AddingTeam from "../adding-team/AddingTeam";
import NewTeam from "../new-team/NewTeam";
import DetailsTeam from "../details-team/DetailsTeam";
import CardPlayers from "../card-players/CardPlayers";
import DetailsPlayer from "../details-player/DetailsPlayer";
import AddingPlayer from "../adding-player/AddingPlayer";
import NewPlayer from "../new-player/NewPlayer";
import {selectBurger} from "../../store/burgerSlise";
import './App.css';


const App = () => {
    const isAuth = useSelector(selectIsAuth);
    const selBurger = useSelector(selectBurger);


    return(
        <Router>
            {!isAuth ? <Redirect to="/sign-in" /> : <Redirect to="/main" />}
            {isAuth ? <Header /> : null}
            <div className="main-wrapper">
                {!selBurger ? null : <PopUp selBurger={selBurger} />}
                <div className="container-fluid height-100">
                    <div className="row">
                        {isAuth ? <SideBar /> : null}
                        <Switch>
                            <Route exact path="/main" component={Main} />
                            <Route exact path="/sign-in" component={SignIn} />
                            <Route exact path="/sign-up" component={SignUp} />
                            <Route exact path="/main/team-card" component={CardTeams} />
                            <Route exact path="/main/team-card/adding-team" component={AddingTeam} />
                            <Route exact path="/main/team-card/details-team" component={DetailsTeam} />
                            <Route path="/main/team-card/adding-team/new-team" component={NewTeam} />
                            <Route exact path="/card-players/" component={CardPlayers} />
                            <Route exact path="/card-players/details-player" component={DetailsPlayer} />
                            <Route exact path="/card-players/adding-player" component={AddingPlayer} />
                            <Route path="/card-players/adding-player/new-player" component={NewPlayer} />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;