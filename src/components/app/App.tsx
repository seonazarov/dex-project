import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {useSelector} from "react-redux";
import {selectIsAuth} from "../../store/signInSlice";
import useRoutes from '../routes/useRoutes';
import './App.css';


const App = () => {
    const isAuthenticated = useSelector(selectIsAuth);
    const routes = useRoutes(isAuthenticated);


    return (
        <Router>
            {routes}
        </Router>
    );
};

export default App;