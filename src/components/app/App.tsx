import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
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
import './App.css';


const App = () => {
    const isAuth = useSelector(selectIsAuth);
    let redirectToUrl;
    if ( !isAuth ) {
        redirectToUrl = <Redirect to='/sign-in'/>
    } else if ( isAuth ) {
        redirectToUrl = <Redirect to='/'/>
    }


  return (
    <Router>
        {
            window.location.pathname !== "/sign-in" &&
            window.location.pathname !== "/sign-up" ? null : <Header />
        }
        <div className="main-wrapper">
            {
                window.location.pathname !== '/sign-in' &&
                window.location.pathname !== '/sign-up' ? null : <PopUp/>
            }
            <div className="container-fluid height-100">
                <div className="row">
                    {
                        window.location.pathname !== '/sign-in' &&
                        window.location.pathname !== '/sign-up' ? null : <SideBar/>
                    }
                    {redirectToUrl}
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/sign-in" component={SignIn} />
                        <Route exact path="/sign-up" component={SignUp} />
                        <Route path="/team-card" component={CardTeams} />
                        <Route path="/adding-team" component={AddingTeam} />
                        <Route path="/new-team" component={NewTeam} />
                        <Route path="/details-team" component={DetailsTeam} />
                    </Switch>
                </div>
            </div>
        </div>
    </Router>
  );
};

export default App;