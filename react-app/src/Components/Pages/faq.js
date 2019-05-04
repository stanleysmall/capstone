import React, { Component } from "react";
import {Redirect} from "react-router";
import { LoggedOutHeader, LoggedInHeader } from "../displayComponents";
import "../../CSS/App.css";

class FAQ extends Component {
	
	componentDidMount() {
		document.title = 'FAQ Page';
	  }
	
	  render() {

        if(this.props.match.params.loggedIn)
        {

            //If the user isnt logged in redirect them to the logged out faq page
            if(global.access_token === undefined)
            {
                return(<Redirect to ="/faq/"/>);
            }

            return(
                <form>
                    <LoggedInHeader/>
                    <div>
                        <div class="infoScreens">
				<h1> Frequently Asked Questions </h1>
				<h2>Where can I find the software supporting
					this open source platform?</h2>
				The Wicked Easy Teaching evaluation web site is an implementation of an open source
				application program interface (API) produced by the capstone course team that extends
				from the open source software LimeSurvey Version xxx. The API may be downloaded
				at xxx and LimeSurvey version xxx may be downloaded at xxx.<br/>
				
				<h2>Where can I find help in my use of Wicked Easy Teaching Evaluations?</h2>
				Some help issues may be addressed through the questions and responses that follow.
				For further issues, please read the disclaimer as shown at the bottom of every page of
				this web site.<br/>
				This is a one-off demonstration class project. It is free for you to use at your own risk.
				You should never use it where the results might urgently matter. Although the site and
				software were tested for security and use by a university with an expectation of 10,000
				students using it within a short period of time at the end of a semester, the software and
				platform are NOT under active technical support. There is no current intention to
				upgrade the site as new security issues may arise or upgrades of LimeSurvey might be
				implemented. The site may be maintained occasionally by future computer science
				student volunteers but you use it at your own risk. However, please feel free to use the
				open source software deployed by this demonstration site to host your own course
				evaluation site for your own purposes.<br/>
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
					<h1>Frequently Asked Questions</h1>
				<h2>Where can I find the software supporting
					this open source platform?</h2>
				The Wicked Easy Teaching evaluation web site is an implementation of an open source
				application program interface (API) produced by the capstone course team that extends
				from the open source software LimeSurvey Version 3.17.2. The API may be downloaded
				at xxx and LimeSurvey version 3.17.2 may be downloaded at xxx.<br/>
				
				<h2>Where can I find help in my use of Wicked Easy Teaching Evaluations?</h2>
				Some help issues may be addressed through the questions and responses that follow.
				For further issues, please read the disclaimer as shown at the bottom of every page of
				this web site.<br/>
				This is a one-off demonstration class project. It is free for you to use at your own risk.
				You should never use it where the results might urgently matter. Although the site and
				software were tested for security and use by a university with an expectation of 10,000
				students using it within a short period of time at the end of a semester, the software and
				platform are NOT under active technical support. There is no current intention to
				upgrade the site as new security issues may arise or upgrades of LimeSurvey might be
				implemented. The site may be maintained occasionally by future computer science
				student volunteers but you use it at your own risk. However, please feel free to use the
				open source software deployed by this demonstration site to host your own course
				evaluation site for your own purposes.<br/>
				</div>
                </div>
            </form>
            )
        }
    }
}
export default FAQ;