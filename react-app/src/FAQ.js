import React, { Component } from "react";
import "./App.css";

class FAQ extends Component {
	render(){
		return(
			<form>
				<h2>Where can I find the software supporting<br/>
					this open source platform?</h2>
				The Wicked Easy Teaching evaluation web site is an implementation of an open source<br/>
				application program interface (API) produced by the capstone course team that extends<br/>
				from the open source software LimeSurvey Version xxx. The API may be downloaded<br/>
				at xxx and LimeSurvey version xxx may be downloaded at xxx.<br/><br/>
				
				<h2>Where can I find help in my use of Wicked<br/> Easy Teaching Evaluations?</h2>
				Some help issues may be addressed through the questions and responses that follow.<br/>
				For further issues, please read the disclaimer as shown at the bottom of every page of<br/>
				this web site.<br/><br/>
				This is a one-off demonstration class project. It is free for you to use at your own risk.<br/>
				You should never use it where the results might urgently matter. Although the site and<br/>
				software were tested for security and use by a university with an expectation of 10,000<br/>
				students using it within a short period of time at the end of a semester, the software and<br/>
				platform are NOT under active technical support. There is no current intention to<br/>
				upgrade the site as new security issues may arise or upgrades of LimeSurvey might be<br/>
				implemented. The site may be maintained occasionally by future computer science<br/>
				student volunteers but you use it at your own risk. However, please feel free to use the<br/>
				open source software deployed by this demonstration site to host your own course<br/>
				evaluation site for your own purposes.<br/><br/>
				
			</form>
			
		)
	}
}

export default FAQ;