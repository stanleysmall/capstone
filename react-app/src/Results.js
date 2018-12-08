import React, { Component } from "react";
import "./App.css";

class Results extends Component {
	render(){
		return(
			<form>
			<center>
			Evaluation Report for COS 125
			</center>
			<h3><u>Fall 2018, University of Maine, College of Liberal Arts and Sciences</u></h3>
			<hr/>
			
			<div class="container">
			<a href="/home/">Back</a>&nbsp;
			<a href="/login/">Logout</a>
			<InstructorResults />
			<hr/>
			</div>
			<button type="button">Download Results </button>
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
			</form>
		)
		
	}
	
}

export default Results;