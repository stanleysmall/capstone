import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Landing from "./Components/Pages/landing";
import Home from "./Components/Pages/home";
import Create from "./Components/Pages/create";
import About from "./Components/Pages/about";
import FAQ from "./Components/Pages/faq";
import Login from "./Components/Pages/login";
import Results from "./Components/Pages/results";
import Edit from "./Components/Pages/edit";

const AppRouter = () => (

    <Router>
        <Route path ="/" exact component={Landing}/>
        <Route path ="/home/" component = {Home}/>
        <Route path ="/create/" component = {Create}/>
        <Route path ="/about/:loggedIn?" component = {About}/>
        <Route path ="/faq/:loggedIn?" component = {FAQ}/>
        <Route path ="/login/" component = {Login}/>
        <Route path ="/results/" component = {Results}/>
        <Route path ="/edit/:evalName" component = {Edit}/>
    </Router>

);

export default AppRouter;
