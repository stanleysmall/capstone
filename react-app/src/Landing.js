import React, { Component } from "react";
import "./App.css";


class Landing extends Component {
	render() {
		return(
				<form>
				<h1>We make the creation of teaching <br/> evaluations and the reporting of<br/> student responses wicked easy!</h1><br/>
				
					We provide a secure open source platform available at no cost to any teacher or university<br/>
					caring to make use of it. Whether you are an individual instructor for an evening dance class or<br/>
					the assessment administrator at a major university with hundreds of semester long courses,<br/>
					this free and highly flexbile platform should greatly ease the process of gaining student<br/>
					feedback for assessing teacher performance and evaluating course success.<br/><br/>
					
					The software and databases are designed to ensure anonymity for student respondents. The<br/>
					system ensures that only validated class members may respond and each student may respond<br/>
					only with a single submission.<br/><br/>
				
				<button type="button"> Demo Teaching Evaluation </button>&nbsp;
				<button type="button"> Try it </button>
			</form>
		)
	}
}

export default Landing;
