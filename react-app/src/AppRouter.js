import React from "react";
import "./App.css";
import Landing from "./Landing";
import About from "./About";
import FAQ from "./FAQ";
import Login from "./Login";
import CourseForm from "./CourseForm";
import QuestionForms from "./QuestionForms";
import EnrollForm from "./EnrollForm";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";



const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={Landing} />
      <Route path="/about/" component={About} />
      <Route path="/faq/" component={FAQ} />
	  <Route path="/login/" component={Login} />
	  <Route path="/create/" component={CourseForm} />
	  <Route path="/questions/" component={QuestionForms} />
	  <Route path="/enroll/" component={EnrollForm} />
	  <Route path="/home/" component={Home} />
    </div>
  </Router>
);



export default AppRouter;
