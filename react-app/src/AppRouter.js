import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Landing from "./pages/landing";
import Home from "./pages/home";
import Create from "./pages/create";
import About from "./pages/about";
import FAQ from "./pages/faq.js";
import Login from "./pages/login.js";
import Results from "./pages/results.js";
import Edit from "./pages/edit.js";

const AppRouter = () => (

    <Router>
        <Route path ="/" exact component={Landing}/>
        <Route path ="/home/" component = {Home}/>
        <Route path ="/create/" component = {Create}/>
        <Route path ="/about/" component = {About}/>
        <Route path ="/faq/" component = {FAQ}/>
        <Route path ="/login/" component = {Login}/>
        <Route path ="/results/" component = {Results}/>
        <Route path ="/edit/:evalName" component = {Edit}/>
    </Router>

);

export default AppRouter;
