import React, { Component } from "react";
import {Redirect} from "react-router";
import {LoggedOutHeader, LoggedInHeader} from "../displayComponents";
import "../../CSS/App.css";

class Landing extends Component {
    
    render() {

        if(this.props.match.params.loggedIn)
        {

            //If the user isnt logged in redirect them to the logged out about page
            if(global.access_token === undefined)
            {
                return(<Redirect to ="/about/"/>);
            }


            return(
                <form>
                    <LoggedInHeader/>
                    <div>
                        <div class="infoScreens">
			<h2> About Wicked Easy Teaching Evaluations </h2>
				The Wicked Easy platform was created in the 2018-2019 academic year as a project
				within the two-semester computer science capstone course at the University of Maine.
				Our goals for Wicked Easy Teaching Evaluations are to:
				<ul>
				<li>Provide a clean and simple user interface for both course evaluation form
				creators and student respondents.</li>
				<li>Provide a user-friendly yet flexible platform that lets a user prepare an evaluation
				form for a single course or for many different forms for different courses across
				many academic units.</li>
				<li>Provide security, reliability and confidentiality.</li>
				<li>Provide privacy. Student e-mail addresses are used only for the evaluation
				process and never shared.</li>
				<li>Provide automated comparisons of each course assessed at indicated unit
				levels. That is, averages of accumulated student responses for each question are
				listed at the levels of course designator (e.g all Music courses), faculty unit (e.g.
				department or school), college, and university levels as indicated by the creator
				of multiple course evaluator forms during the same semester (or similar time
				period).</li>
				<li>Promote the use of flexible and efficient course evaluations to readily assess not
				only the quality of the course content and teaching but also performance of
				teaching assistants, distance technologies, laboratory sessions, and similar
				matters as appropriate.<br/></li>
				</ul>
				
			<h2>Meet the Creators</h2>
				Wicked Easy Teaching Evaluations was created by the capstone course student team
				of Jovon Craig, Robert Judkins, Sam Elliott, and Stanley Small. The course instructor
				was Dr. Terry Yoo, Associate Professor of Computer Science. The project client was
				Professor Harlan Onsrud.
				
				</div>
                    </div>
                </form>
                ) 
        }
        else{
        return(
            <form>
                <LoggedOutHeader/>
                <div>
                    <div class="infoScreens">
			<h2> About Wicked Easy Teaching Evaluations </h2>
				The Wicked Easy platform was created in the 2018-2019 academic year as a project
				within the two-semester computer science capstone course at the University of Maine.
				Our goals for Wicked Easy Teaching Evaluations are to:
				<ul>
				<li>Provide a clean and simple user interface for both course evaluation form
				creators and student respondents.</li>
				<li>Provide a user-friendly yet flexible platform that lets a user prepare an evaluation
				form for a single course or for many different forms for different courses across
				many academic units.</li>
				<li>Provide security, reliability and confidentiality.</li>
				<li>Provide privacy. Student e-mail addresses are used only for the evaluation
				process and never shared.</li>
				<li>Provide automated comparisons of each course assessed at indicated unit
				levels. That is, averages of accumulated student responses for each question are
				listed at the levels of course designator (e.g all Music courses), faculty unit (e.g.
				department or school), college, and university levels as indicated by the creator
				of multiple course evaluator forms during the same semester (or similar time
				period).</li>
				<li>Promote the use of flexible and efficient course evaluations to readily assess not
				only the quality of the course content and teaching but also performance of
				teaching assistants, distance technologies, laboratory sessions, and similar
				matters as appropriate.<br/></li>
				</ul>
				
			<h2>Meet the Creators</h2>
				Wicked Easy Teaching Evaluations was created by the capstone course student team
				of Jovon Craig, Robert Judkins, Sam Elliott, and Stanley Small. The course instructor
				was Dr. Terry Yoo, Associate Professor of Computer Science. The project client was
				Professor Harlan Onsrud.
				
				</div>
                </div>
            </form>
            )
        }
    }
}
export default Landing;