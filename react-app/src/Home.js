import React, { Component } from "react";
import "./App.css";

class Home extends Component {
	render(){
		return (
			<form>
			<div>
			<h3>Wicked Easy Teaching Evaluations&emsp;
			<a href="/about/">About</a>&nbsp;
			<a href="/faq/">FAQ</a>&nbsp;
			<a href="/login/">Logout</a>&nbsp;
			<hr/></h3>
			</div>
			
			<div>
			Choose one of the following actions: <br/><br/>
			1. <a href="/create/">Create a New Course & Teaching Evaluation Form</a><br/><br/>
			2. Edit an Existing Unpublished Course Evaluation Form<br/>
			<select id="editCourse">
				<option value="default">Select a Form</option>
				<option value="C1">COS 125 001 </option>
				<option value="C2">COS 140 001 </option>
				<option value="C3">COS 250 001 </option>
			</select>
			<a href="/home/">Edit Course</a>
			<br/>
			3. View Active Published Course Evaluations<br/>
			<select id="viewPubCourse">
				<option value="default">Select a Form</option>
				<option value="C1">COS 225 001</option>
			</select>
			<a href="/home/">View Course</a>
			<br/>
			4. View Inactive Course Evaluations<br/>
			<select id="viewInactiveCourse">
				<option value="default">Select a Form</option>
				<option value="C1">COS 301 001</option>
			</select>
			<a href="/home">View Course</a>
			<br/>
			5. View Evaluation Results&nbsp;
			<button type="button">Download All Results</button>
			<br/>
			<fieldset>
			<input type="radio" id="courseSec"></input>
			<label for="coursSec">Course Section</label><br/>
			<input type="radio" id="courseDes"></input>
			<label for="courseDes">Course Designator</label><br/>
			<input type="radio" id="ins"></input>
			<label for="ins">Instructor Last Name</label><br/>
			<input type="radio" id="fac"></input>
			<label for="fac">Faculty Unit</label><br/>
			<input type="radio" id="col"></input>
			<label for="col">College</label><br/>
			<input type="radio" id="uni"></input>
			<label for="uni">University</label><br/>
			</fieldset>
			</div>
			</form>
			
		)
	}
}

export default Home;