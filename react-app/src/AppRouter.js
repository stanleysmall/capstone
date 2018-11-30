import React from "react";
import "./App.css";
import Landing from "./Landing";
import About from "./About";
import FAQ from "./FAQ";
import Login from "./Login";
import App from "./App";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const about = () => <h2>About</h2>;
const faq = () => <h2>FAQ</h2>;
const login = () => <h2>Login</h2>;

const AppRouter = () => (
  <Router>
    <div id="nav">
			<h3>Wicked Easy Teaching Evaluations&emsp;
            <a href="/">Home</a>&nbsp;
            <a href="/about/">About</a>&nbsp;
            <a href="/faq/">FAQ</a>&nbsp;
			<a href="/login/">Login</a><hr/></h3>
			
      <Route path="/" exact component={Landing} />
      <Route path="/about/" component={About} />
      <Route path="/faq/" component={FAQ} />
	  <Route path="/login/" component={Login} />
	  <Route path="/select/" component={App} />
    </div>
  </Router>
);

function hideNav(){
	var element = document.getElementById("nav");
	if(element.style.display === "none"){
		element.style.display = "block";
	}else{
		element.style.display = "none";
	}
}

export default AppRouter;
