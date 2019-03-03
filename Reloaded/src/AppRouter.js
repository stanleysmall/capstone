import React, { Component } from "react";
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

class AppRouter extends Component {
	state= {
		fields: {}
	}

	onChange = newValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...newValue
      }
    });
  };
	render(){
		return( 
		<Router>
    <div>
      <Route path="/" exact component={Landing} />
      <Route path="/about/" component={About} />
      <Route path="/faq/" component={FAQ} />
	  <Route path="/login/" component={Login} />
	  <Route path="/create/" render = {(routeProps) => (<CourseForm onChange={fields =>this.onChange(fields)}/>)}/>
	  <Route path="/questions/" render = {(routeProps) => (<QuestionForms onChange={fields =>this.onChange(fields)}/>)}/>
	  <Route path="/enroll/" render = {(routeProps) => (<EnrollForm onChange={fields =>this.onChange(fields)}/>)}/>
	  <Route path="/home/" component={Home} />
	  <Route path="/edit/" component={EditCourse} />
	  <Route path="/results/" component={Results} /> 
    </div>
  </Router>
  )
		}
	
};



export default AppRouter;
