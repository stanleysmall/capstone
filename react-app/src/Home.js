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
			<hr/>
			
			2. Edit an Existing Unpublished Course Evaluation Form<br/>
			<select id="editCourse">
				<option value="default">Select a Form</option>
				<option value="C1">COS 125 001 </option>
				<option value="C2">COS 140 001 </option>
				<option value="C3">COS 250 001 </option>
			</select>
			<a href="/edit/">Edit Course</a>
			<br/>
			<hr/>
			
			3. View Active Published Course Evaluations<br/>
			<select id="viewPubCourse">
				<option value="default">Select a Form</option>
				<option value="C1">COS 225 001</option>
			</select>
			<a href="/edit/">View Course</a>
			<br/>
			<hr/>
			
			4. View Inactive Course Evaluations<br/>
			<select id="viewInactiveCourse">
				<option value="default">Select a Form</option>
				<option value="C1">COS 301 001</option>
			</select>
			<a href="/edit/">View Course</a>
			<br/>
			<hr/>
			
			5. View Evaluation Results&emsp;
			<button type="button">Download All Results</button>
			<br/>
			<fieldset>
			<input type="radio" id="courseSec" name="viewEvail"></input>
			<label for="coursSec">Course Section</label><br/>
			<input type="radio" id="courseDes" name="viewEvail"></input>
			<label for="courseDes">Course Designator</label><br/>
			<input type="radio" id="ins" name="viewEvail"></input>
			<label for="ins">Instructor Last Name</label><br/>
			<input type="radio" id="fac" name="viewEvail"></input>
			<label for="fac">Faculty Unit</label><br/>
			<input type="radio" id="col" name="viewEvail"></input>
			<label for="col">College</label><br/>
			<input type="radio" id="uni" name="viewEvail"></input>
			<label for="uni">University</label><br/>
			</fieldset>

			<select id="viewResults">
				<option value="default">Select a Report</option>
				<option value="c1">COS 226 001</option>
			</select>
			<a href="/results/">View Results</a>
			</div>
			</form>
		)
	}
}

export default Home;