import React, { Component } from "react";
import "./App.css";

class Results extends Component {
	render(){
		return(
			<form>
			<center>
			<h2>
			Evaluation Report for COS 125
			</h2>
			</center>
			<h3><u>Fall 2018, University of Maine, College of Liberal Arts and Sciences</u></h3>
			<hr/>
			
			<div class="container">
			<a href="/home/">Back</a>&nbsp;
			<a href="/login/">Logout</a>
			<InstructorResults />
			<hr/>
			</div>
			
			<div class="container">
			<CourseResults />
			<hr/>
			</div>
			
			<div class="container">
			<AssessmentResults />
			
			<button type="button">Download Results </button>
			<hr/>
			</div>
			
			
			</form>
		
		)
	}
}

class InstructorResults extends Component {
	render(){
		return(
			<form>
			<h2>The Instructor</h2>
			{/*
			/////QUESTION 1
			*/}
			
			<div class="fieldLabel">"How prepared was the instructor for the course?"<br/>
									(1: "often unprepared", 5: "well prepared")</div>
			<br/>
			<br/>
			<br/>
			<table>
				<tr>
					<th>Course</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>COS 120 (Section 003) Instructor: Turner</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>57</td>
				</tr>
				<tr>
					<td>COS 490 (Section 001) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
				<tr>
					<td>COS 601 (Section 002) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Undergraduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>353</td>
				</tr>
				<tr>
					<td>All SCIS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>628</td>
				</tr>
				<tr>
					<td>All CLAS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>1,530</td>
				</tr>
				<tr>
					<td>All Umaine undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>15,213</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Graduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>43</td>
				</tr>
				<tr>
					<td>All SCIS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>109</td>
				</tr>
				<tr>
					<td>All CLAS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>342</td>
				</tr>
				<tr>
					<td>All Umaine graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>876</td>
				</tr>
			</table>
			<hr/>
			{/*
			/////QUESTION 2
			*/}
			
			<div class="fieldLabel">"How clearly were the objectives of the course presented?"<br/>
									(1: "unclear", 5: "very clear")</div>
			<br/>
			<br/>
			<br/>
			<table>
				<tr>
					<th>Course</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>COS 120 (Section 003) Instructor: Turner</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>57</td>
				</tr>
				<tr>
					<td>COS 490 (Section 001) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
				<tr>
					<td>COS 601 (Section 002) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Undergraduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>353</td>
				</tr>
				<tr>
					<td>All SCIS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>628</td>
				</tr>
				<tr>
					<td>All CLAS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>1,530</td>
				</tr>
				<tr>
					<td>All Umaine undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>15,213</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Graduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>43</td>
				</tr>
				<tr>
					<td>All SCIS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>109</td>
				</tr>
				<tr>
					<td>All CLAS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>342</td>
				</tr>
				<tr>
					<td>All Umaine graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>876</td>
				</tr>
			</table>
			<hr/>
			
			{/*
			/////QUESTION 3
			*/}
			
			<div class="fieldLabel">"How enthusiastic was the instructor about the subject?"<br/>
									(1: "very little", 5: "very much")</div>
			<br/>
			<br/>
			<br/>

			<table>
				<tr>
					<th>Course</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>COS 120 (Section 003) Instructor: Turner</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>57</td>
				</tr>
				<tr>
					<td>COS 490 (Section 001) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
				<tr>
					<td>COS 601 (Section 002) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Undergraduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>353</td>
				</tr>
				<tr>
					<td>All SCIS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>628</td>
				</tr>
				<tr>
					<td>All CLAS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>1,530</td>
				</tr>
				<tr>
					<td>All Umaine undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>15,213</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Graduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>43</td>
				</tr>
				<tr>
					<td>All SCIS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>109</td>
				</tr>
				<tr>
					<td>All CLAS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>342</td>
				</tr>
				<tr>
					<td>All Umaine graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>876</td>
				</tr>
			</table>
			
			<hr/>
			
			{/*
			/////QUESTION 4
			*/}
			
			<div class="fieldLabel">"How clearly did the instructor present concepts, principles, and theories?"<br/>
									(1: "unclear", 5: "very clear")</div>
			<br/>
			<br/>
			<br/>

			<table>
				<tr>
					<th>Course</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>COS 120 (Section 003) Instructor: Turner</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>57</td>
				</tr>
				<tr>
					<td>COS 490 (Section 001) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
				<tr>
					<td>COS 601 (Section 002) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Undergraduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>353</td>
				</tr>
				<tr>
					<td>All SCIS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>628</td>
				</tr>
				<tr>
					<td>All CLAS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>1,530</td>
				</tr>
				<tr>
					<td>All Umaine undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>15,213</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Graduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>43</td>
				</tr>
				<tr>
					<td>All SCIS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>109</td>
				</tr>
				<tr>
					<td>All CLAS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>342</td>
				</tr>
				<tr>
					<td>All Umaine graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>876</td>
				</tr>
			</table>
			
			<hr/>
			
			{/*
			/////QUESTION 5
			*/}
			
			<div class="fieldLabel">"How much were you encouraged to think for yourself?"<br/>
									(1: "very little", 5: "very much")</div>
			<br/>
			<br/>
			<br/>

			<table>
				<tr>
					<th>Course</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>COS 120 (Section 003) Instructor: Turner</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>57</td>
				</tr>
				<tr>
					<td>COS 490 (Section 001) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
				<tr>
					<td>COS 601 (Section 002) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Undergraduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>353</td>
				</tr>
				<tr>
					<td>All SCIS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>628</td>
				</tr>
				<tr>
					<td>All CLAS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>1,530</td>
				</tr>
				<tr>
					<td>All Umaine undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>15,213</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Graduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>43</td>
				</tr>
				<tr>
					<td>All SCIS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>109</td>
				</tr>
				<tr>
					<td>All CLAS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>342</td>
				</tr>
				<tr>
					<td>All Umaine graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>876</td>
				</tr>
			</table>
			
			<hr/>
			
			{/*
			/////QUESTION 6
			*/}
			
			<div class="fieldLabel">"How concerned was the intructor for the quality of student learning?"<br/>
									(1: "unconcerned", 5: "very concerned")</div>
			<br/>
			<br/>
			<br/>

			<table>
				<tr>
					<th>Course</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>COS 120 (Section 003) Instructor: Turner</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>57</td>
				</tr>
				<tr>
					<td>COS 490 (Section 001) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
				<tr>
					<td>COS 601 (Section 002) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Undergraduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>353</td>
				</tr>
				<tr>
					<td>All SCIS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>628</td>
				</tr>
				<tr>
					<td>All CLAS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>1,530</td>
				</tr>
				<tr>
					<td>All Umaine undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>15,213</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Graduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>43</td>
				</tr>
				<tr>
					<td>All SCIS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>109</td>
				</tr>
				<tr>
					<td>All CLAS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>342</td>
				</tr>
				<tr>
					<td>All Umaine graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>876</td>
				</tr>
			</table>
			
			<hr/>
			
			{/*
			/////QUESTION 7
			*/}
			
			<div class="fieldLabel">"Did the instructor show respect for the questions and opinions of the students?"<br/>
									(1: "rarely", 5: "always")</div>
			<br/>
			<br/>
			<br/>

			<table>
				<tr>
					<th>Course</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>COS 120 (Section 003) Instructor: Turner</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>57</td>
				</tr>
				<tr>
					<td>COS 490 (Section 001) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
				<tr>
					<td>COS 601 (Section 002) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Undergraduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>353</td>
				</tr>
				<tr>
					<td>All SCIS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>628</td>
				</tr>
				<tr>
					<td>All CLAS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>1,530</td>
				</tr>
				<tr>
					<td>All Umaine undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>15,213</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Graduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>43</td>
				</tr>
				<tr>
					<td>All SCIS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>109</td>
				</tr>
				<tr>
					<td>All CLAS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>342</td>
				</tr>
				<tr>
					<td>All Umaine graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>876</td>
				</tr>
			</table>
			
			<hr/>
			
			{/*
			/////QUESTION 8
			*/}
			
			<div class="fieldLabel">"Did the instructor ensure an environment of respect for all groups of people in the classroom?"<br/>
									(1: "rarely", 5: "always")</div>
			<br/>
			<br/>
			<br/>

			<table>
				<tr>
					<th>Course</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>COS 120 (Section 003) Instructor: Turner</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>57</td>
				</tr>
				<tr>
					<td>COS 490 (Section 001) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
				<tr>
					<td>COS 601 (Section 002) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Undergraduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>353</td>
				</tr>
				<tr>
					<td>All SCIS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>628</td>
				</tr>
				<tr>
					<td>All CLAS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>1,530</td>
				</tr>
				<tr>
					<td>All Umaine undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>15,213</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Graduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>43</td>
				</tr>
				<tr>
					<td>All SCIS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>109</td>
				</tr>
				<tr>
					<td>All CLAS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>342</td>
				</tr>
				<tr>
					<td>All Umaine graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>876</td>
				</tr>
			</table>
			
			<hr/>
			
			{/*
			/////QUESTION 9
			*/}
			
			<div class="fieldLabel">"Did the instructor inspire confidence in his/her knowledge?"<br/>
									(1: "very little", 5: "very much")</div>
			<br/>
			<br/>
			<br/>

			<table>
				<tr>
					<th>Course</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>COS 120 (Section 003) Instructor: Turner</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>57</td>
				</tr>
				<tr>
					<td>COS 490 (Section 001) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
				<tr>
					<td>COS 601 (Section 002) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Undergraduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>353</td>
				</tr>
				<tr>
					<td>All SCIS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>628</td>
				</tr>
				<tr>
					<td>All CLAS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>1,530</td>
				</tr>
				<tr>
					<td>All Umaine undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>15,213</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Graduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>43</td>
				</tr>
				<tr>
					<td>All SCIS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>109</td>
				</tr>
				<tr>
					<td>All CLAS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>342</td>
				</tr>
				<tr>
					<td>All Umaine graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>876</td>
				</tr>
			</table>
			
			<hr/>
			
			{/*
			/////QUESTION 10
			*/}
			
			<div class="fieldLabel">"Overall, how would you rate the instructor>"<br/>
									(1: "poor", 5: "excellent")</div>
			<br/>
			<br/>
			<br/>

			<table>
				<tr>
					<th>Course</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>COS 120 (Section 003) Instructor: Turner</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>57</td>
				</tr>
				<tr>
					<td>COS 490 (Section 001) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
				<tr>
					<td>COS 601 (Section 002) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Undergraduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>353</td>
				</tr>
				<tr>
					<td>All SCIS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>628</td>
				</tr>
				<tr>
					<td>All CLAS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>1,530</td>
				</tr>
				<tr>
					<td>All Umaine undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>15,213</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Graduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>43</td>
				</tr>
				<tr>
					<td>All SCIS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>109</td>
				</tr>
				<tr>
					<td>All CLAS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>342</td>
				</tr>
				<tr>
					<td>All Umaine graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>876</td>
				</tr>
			</table>
			
			<hr/>
			
			</form>
		)
		
	}
	
}

class  CourseResults extends Component {
	render(){
		return(
			<form>
				<h2>The Course</h2>
				
			{/*
			/////QUESTION 1
			*/}
			
			<div class="fieldLabel">"Were class meetings profitable and worth attending?"<br/>
									(1: "rarely", 5: "always")</div>
			<br/>
			<br/>
			<br/>
			<table>
				<tr>
					<th>Course</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>COS 120 (Section 003) Instructor: Turner</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>57</td>
				</tr>
				<tr>
					<td>COS 490 (Section 001) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
				<tr>
					<td>COS 601 (Section 002) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Undergraduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>353</td>
				</tr>
				<tr>
					<td>All SCIS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>628</td>
				</tr>
				<tr>
					<td>All CLAS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>1,530</td>
				</tr>
				<tr>
					<td>All Umaine undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>15,213</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Graduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>43</td>
				</tr>
				<tr>
					<td>All SCIS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>109</td>
				</tr>
				<tr>
					<td>All CLAS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>342</td>
				</tr>
				<tr>
					<td>All Umaine graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>876</td>
				</tr>
			</table>
			<hr/>
			
			{/*
			/////QUESTION 2
			*/}
			
			<div class="fieldLabel">"What is your overall rating of the primary readings?"<br/>
									(1: "poor", 5: "excellent")</div>
			<br/>
			<br/>
			<br/>
			<table>
				<tr>
					<th>Course</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>COS 120 (Section 003) Instructor: Turner</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>57</td>
				</tr>
				<tr>
					<td>COS 490 (Section 001) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
				<tr>
					<td>COS 601 (Section 002) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Undergraduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>353</td>
				</tr>
				<tr>
					<td>All SCIS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>628</td>
				</tr>
				<tr>
					<td>All CLAS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>1,530</td>
				</tr>
				<tr>
					<td>All Umaine undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>15,213</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Graduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>43</td>
				</tr>
				<tr>
					<td>All SCIS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>109</td>
				</tr>
				<tr>
					<td>All CLAS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>342</td>
				</tr>
				<tr>
					<td>All Umaine graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>876</td>
				</tr>
			</table>
			<hr/>
			
			{/*
			/////QUESTION 3
			*/}
			
			<div class="fieldLabel">"How much did this course challenge you intellectually?"<br/>
									(1: "very little", 5: "very much")</div>
			<br/>
			<br/>
			<br/>
			<table>
				<tr>
					<th>Course</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>COS 120 (Section 003) Instructor: Turner</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>57</td>
				</tr>
				<tr>
					<td>COS 490 (Section 001) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
				<tr>
					<td>COS 601 (Section 002) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Undergraduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>353</td>
				</tr>
				<tr>
					<td>All SCIS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>628</td>
				</tr>
				<tr>
					<td>All CLAS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>1,530</td>
				</tr>
				<tr>
					<td>All Umaine undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>15,213</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Graduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>43</td>
				</tr>
				<tr>
					<td>All SCIS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>109</td>
				</tr>
				<tr>
					<td>All CLAS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>342</td>
				</tr>
				<tr>
					<td>All Umaine graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>876</td>
				</tr>
			</table>
			<hr/>
			
			{/*
			/////QUESTION 4
			*/}
			
			<div class="fieldLabel">"How much did you learn from this course?"<br/>
									(1: "very little", 5: "very much")</div>
			<br/>
			<br/>
			<br/>
			<table>
				<tr>
					<th>Course</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>COS 120 (Section 003) Instructor: Turner</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>57</td>
				</tr>
				<tr>
					<td>COS 490 (Section 001) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
				<tr>
					<td>COS 601 (Section 002) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Undergraduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>353</td>
				</tr>
				<tr>
					<td>All SCIS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>628</td>
				</tr>
				<tr>
					<td>All CLAS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>1,530</td>
				</tr>
				<tr>
					<td>All Umaine undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>15,213</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Graduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>43</td>
				</tr>
				<tr>
					<td>All SCIS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>109</td>
				</tr>
				<tr>
					<td>All CLAS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>342</td>
				</tr>
				<tr>
					<td>All Umaine graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>876</td>
				</tr>
			</table>
			<hr/>
			
			{/*
			/////QUESTION 5
			*/}
			
			<div class="fieldLabel">"What is your overall rating of this course?"<br/>
									(1: "poor", 5: "excellent")</div>
			<br/>
			<br/>
			<br/>
			<table>
				<tr>
					<th>Course</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>COS 120 (Section 003) Instructor: Turner</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>57</td>
				</tr>
				<tr>
					<td>COS 490 (Section 001) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
				<tr>
					<td>COS 601 (Section 002) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Undergraduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>353</td>
				</tr>
				<tr>
					<td>All SCIS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>628</td>
				</tr>
				<tr>
					<td>All CLAS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>1,530</td>
				</tr>
				<tr>
					<td>All Umaine undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>15,213</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Graduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>43</td>
				</tr>
				<tr>
					<td>All SCIS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>109</td>
				</tr>
				<tr>
					<td>All CLAS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>342</td>
				</tr>
				<tr>
					<td>All Umaine graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>876</td>
				</tr>
			</table>
			<hr/>
			</form>
		)
	}
}

class AssessmentResults extends Component {
	render(){
		return(
			<form>
			<h2>Assessment</h2>
		
		
			{/*
			/////QUESTION 1
			*/}
			
			<div class="fieldLabel">"Did the instructor let you know what was expected on the assessments (exams, assignments, projects, papers, etc.)?"<br/>
									(1: "unclear", 5: "very clear")</div>
			<br/>
			<br/>
			<br/>
			<table>
				<tr>
					<th>Course</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>COS 120 (Section 003) Instructor: Turner</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>57</td>
				</tr>
				<tr>
					<td>COS 490 (Section 001) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
				<tr>
					<td>COS 601 (Section 002) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Undergraduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>353</td>
				</tr>
				<tr>
					<td>All SCIS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>628</td>
				</tr>
				<tr>
					<td>All CLAS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>1,530</td>
				</tr>
				<tr>
					<td>All Umaine undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>15,213</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Graduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>43</td>
				</tr>
				<tr>
					<td>All SCIS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>109</td>
				</tr>
				<tr>
					<td>All CLAS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>342</td>
				</tr>
				<tr>
					<td>All Umaine graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>876</td>
				</tr>
			</table>
			<hr/>
			
			{/*
			/////QUESTION 2
			*/}
			
			<div class="fieldLabel">"Did the assessments reflect the important aspects of the course?"<br/>
									(1: "rarely", 5: "always")</div>
			<br/>
			<br/>
			<br/>
			<table>
				<tr>
					<th>Course</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>COS 120 (Section 003) Instructor: Turner</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>57</td>
				</tr>
				<tr>
					<td>COS 490 (Section 001) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
				<tr>
					<td>COS 601 (Section 002) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Undergraduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>353</td>
				</tr>
				<tr>
					<td>All SCIS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>628</td>
				</tr>
				<tr>
					<td>All CLAS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>1,530</td>
				</tr>
				<tr>
					<td>All Umaine undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>15,213</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Graduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>43</td>
				</tr>
				<tr>
					<td>All SCIS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>109</td>
				</tr>
				<tr>
					<td>All CLAS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>342</td>
				</tr>
				<tr>
					<td>All Umaine graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>876</td>
				</tr>
			</table>
			<hr/>
			
			{/*
			/////QUESTION 3
			*/}
			
			<div class="fieldLabel">"How fair were the grading procedures"<br/>
									(1: "unfair", 5: "completely")</div>
			<br/>
			<br/>
			<br/>
			<table>
				<tr>
					<th>Course</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>COS 120 (Section 003) Instructor: Turner</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>57</td>
				</tr>
				<tr>
					<td>COS 490 (Section 001) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
				<tr>
					<td>COS 601 (Section 002) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Undergraduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>353</td>
				</tr>
				<tr>
					<td>All SCIS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>628</td>
				</tr>
				<tr>
					<td>All CLAS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>1,530</td>
				</tr>
				<tr>
					<td>All Umaine undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>15,213</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Graduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>43</td>
				</tr>
				<tr>
					<td>All SCIS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>109</td>
				</tr>
				<tr>
					<td>All CLAS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>342</td>
				</tr>
				<tr>
					<td>All Umaine graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>876</td>
				</tr>
			</table>
			<hr/>
			
			{/*
			/////QUESTION 4
			*/}
			
			<div class="fieldLabel">"Overall, how would you rate the assessment process (exams, assignments, projects, papers, etc.)?"<br/>
									(1: "poor", 5: "excellent")</div>
			<br/>
			<br/>
			<br/>
			<table>
				<tr>
					<th>Course</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>COS 120 (Section 003) Instructor: Turner</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>57</td>
				</tr>
				<tr>
					<td>COS 490 (Section 001) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
				<tr>
					<td>COS 601 (Section 002) Instructor: Turner</td>
					<td>2</td>
					<td>3</td>
					<td>1.6</td>
					<td>13</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Undergraduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>353</td>
				</tr>
				<tr>
					<td>All SCIS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>628</td>
				</tr>
				<tr>
					<td>All CLAS undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>1,530</td>
				</tr>
				<tr>
					<td>All Umaine undergraduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>15,213</td>
				</tr>
			</table>
			<hr/>
			<table>
				<tr>
					<th>Comparitive Graduate Course Results</th>
					<th>Median</th>
					<th>Mean</th>
					<th>St. Dev</th>
					<th>n</th>
				</tr>
				<tr>
					<td>All COS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>43</td>
				</tr>
				<tr>
					<td>All SCIS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>109</td>
				</tr>
				<tr>
					<td>All CLAS graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>342</td>
				</tr>
				<tr>
					<td>All Umaine graduate courses</td>
					<td>3</td>
					<td>3</td>
					<td>1.2</td>
					<td>876</td>
				</tr>
			</table>
			<hr/>
			
			</form>
		)
	}
	
}

export default Results;