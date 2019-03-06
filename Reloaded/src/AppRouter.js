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


//The main class of the application that routes the website to the correct components
class AppRouter extends Component {
	
	//State starts out with no fields however it will be built up when
  //onChange is called.  Should be reset to {} when a course form is submitted
	state= {
		fields: {}
	}

	//On change function taks a new value, unpakcs the state and the new value
  //and sets the state to the two
	onChange = newValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...newValue
      }
    });
	};
	
	//Return what should be rendered
	render(){
		return( 
		<Router>
    <div>
			
			{/* 
				Writes the state on the screen, used for dev purpose
				<p>{JSON.stringify(this.state.fields, null, 2)}</p> 
			*/}
			
		{/* Route to the correct component, pass the onchange function as a prop to the pages which need to make changes to the state */}
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
