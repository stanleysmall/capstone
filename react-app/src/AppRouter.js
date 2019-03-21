import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Landing from "./pages/landing";
import Home from "./pages/home";
import Create from "./pages/create";

const AppRouter = () => (

    <Router>
        <Route path ="/" exact component={Landing}/>
        <Route path ="/home/" component = {Home}/>
        <Route path ="/create/" component = {Create}/>
    </Router>

);

export default AppRouter;
