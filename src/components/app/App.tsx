import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector} from "react-redux";
import { selectIsAuth } from "../../store/signInSlice";
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
import './App.css';



const App = () => {
    const isAuth = useSelector(selectIsAuth);

    return(
        <Router>
            {!isAuth ? <Redirect to="/sign-in" /> : <Redirect to="/" />}
            {isAuth ? <Header /> : null}
            <div className="main-wrapper">
                {isAuth ? <PopUp /> : null}
                <div className="container-fluid height-100">
                    <div className="row">
                        {isAuth ? <SideBar /> : null}
                        <Switch>
                            <Route exact path="/" component={Main} />
                            <Route exact path="/sign-in" component={SignIn} />
                            <Route exact path="/sign-up" component={SignUp} />
                            <Route path="/team-card" component={CardTeams} />
                            <Route path="/adding-team" component={AddingTeam} />
                            <Route path="/adding-player" component={AddingPlayer} />
                            <Route path="/new-team" component={NewTeam} />
                            <Route path="/new-player" component={NewPlayer} />
                            <Route path="/details-team" component={DetailsTeam} />
                            <Route path="/card-players" component={CardPlayers} />
                            <Route path="/details-player" component={DetailsPlayer} />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;