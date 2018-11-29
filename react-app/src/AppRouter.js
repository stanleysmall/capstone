import React from "react";
import "./App.css";
import Landing from "./Landing";
import About from "./About";
import FAQ from "./FAQ";
import Login from "./Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const about = () => <h2>About</h2>;
const faq = () => <h2>FAQ</h2>;
const login = () => <h2>Login</h2>;

const AppRouter = () => (
  <Router>
    <div>
		<right>
			<h3>Wicked Easy Teaching Evaluations</h3>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/about/">About</Link>&nbsp;
            <Link to="/faq/">FAQ</Link>&nbsp;
			<Link to="/login/">Login</Link><hr/>
		</right>


      <Route path="/" exact component={Landing} />
      <Route path="/about/" component={About} />
      <Route path="/faq/" component={FAQ} />
	  <Route path="/login/" component={Login} />
    </div>
  </Router>
);

export default AppRouter;
