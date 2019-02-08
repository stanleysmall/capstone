import React from "react";
import "./App.css";
import Landing from "./Landing";
import About from "./About";
import FAQ from "./FAQ";
import Login from "./Login";
import CourseForm from "./CourseForm";
import QuestionForms from "./QuestionForms";
import EnrollForm from "./EnrollForm";
import EditCourse from "./EditCourse";
import Home from "./Home";
import Results from "./Results";
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
	  <Route path="/edit/" component={EditCourse} />
	  <Route path="/results/" component={Results} />
    </div>
  </Router>
);



export default AppRouter;
