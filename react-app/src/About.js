import React, { Component } from "react";
import "./App.css";

class About extends Component {
	render(){
		return(
			<form>

			<h2> About Wicked Easy Teaching Evaluations </h2>
			<div>
				The Wicked Easy platform was created in the 2018-2019 academic year as a project<br/>
				within the two-semester computer science capstone course at the University of Maine.<br/>
				Our goals for Wicked Easy Teaching Evaluations are to:<br/>
				<ul>
				<li>Provide a clean and simple user interface for both course evaluation form<br/>
				creators and student respondents.<br/></li>
				<li>Provide a user-friendly yet flexible platform that lets a user prepare an evaluation<br/>
				form for a single course or for many different forms for different courses across<br/>
				many academic units.<br/></li>
				<li>Provide security, reliability and confidentiality.<br/></li>
				<li>Provide privacy. Student e-mail addresses are used only for the evaluation<br/>
				process and never shared.<br/></li>
				<li>Provide automated comparisons of each course assessed at indicated unit<br/>
				levels. That is, averages of accumulated student responses for each question are<br/>
				listed at the levels of course designator (e.g all Music courses), faculty unit (e.g.<br/>
				department or school), college, and university levels as indicated by the creator<br/>
				of multiple course evaluator forms during the same semester (or similar time<br/>
				period).<br/></li>
				<li>Promote the use of flexible and efficient course evaluations to readily assess not<br/>
				only the quality of the course content and teaching but also performance of<br/>
				teaching assistants, distance technologies, laboratory sessions, and similar<br/>
				matters as appropriate.<br/><br/></li>
				</ul>
				
			<h2>Meet the Creators</h2>
				Wicked Easy Teaching Evaluations was created by the capstone course student team<br/>
				of Jovon Craig, Robert Judkins, Sam Elliott, and Stanley Small. The course instructor<br/>
				was Dr. Terry Yoo, Associate Professor of Computer Science. The project client was<br/>
				Professor Harlan Onsrud.
			</div>
			</form>
		)
	}
	
}

export default About;