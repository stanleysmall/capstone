import React, { Component } from "react";
import "./App.css";

class EnrollForm extends Component {
		render(){
			return(
				<form>
				<div class="container">
				<a href="/questions/">Back </a>&nbsp;
				<a href="/login/">Sign out </a>
				<Enroll />
				<hr/>
				</div>
				<br />
				
				<div class="container">
					<InviteEmailForm />
					<hr/>
				</div>
				<br />
				
				<div class="container">
					<ReminderEmailForm />
				</div>
				<br />
				
			  </form>
    );
  }
}

class Enroll extends Component {
	render(){
		return(
			<form>
				<div>
				<h2>Class Roll</h2>
				</div>
				<div>Please insert in the field below the first name, last name, and email of each student in the class. <br />
										The information for each student should appear in a separate row and be separated by commas. (e.g Mary, Smith, marysmith@qmail.com) <br />
										You may cut and paste into the window at your option.</div>
				<button type="button">Upload .csv</button>
				<br/><br/>
				<textarea  name="students"></textarea>
					<br />
			</form>
		);
	}
}

class InviteEmailForm extends Component {
	render(){
		return(
			<form>
				<div>
				<h2>Emails to be sent to students</h2>
				<h3>Initial Email invitation to Participate</h3>
				</div>
				<div>Although we recommend that you do not change the following email text, you may edit the Invitation to Participate as <br />
					appropriate for your purposes if needed. Do NOT change any item listed as (VARIABLE) because this will cause an <br />
					error in your submission that you will be forced to correct prior to successful submission. <br />
					This email will be sent to each student on the begin date you specified above.
				</div>
				<br />
					<textarea name="inviteEmail">
					Subject: Invitation to Complete Evaluation for (COURSEDESIGNATOR) (COURSENUMBER) (COURSETITLE) 

					Dear (FIRSTNAME), 

					Please complete the teaching and course evaluation for (COURSEDESIGNATOR) (COURSENUMBER) (COURSETITLE). 

					This student evaluation of teaching is completely anonymous unless you purposefully identify yourself in response to one of the questions. The software system will send you automatic reminders every few days until you complete the evaluation.
					
					To respond, simply click the link at the end of this message.

					Sincerely, 
					(ADMINNAME) 
					----------------------------------------------
					Click here to complete the teaching and course evaluation:
					(SURVEYURL) 

					(ADMINNAME) ((ADMINEMAIL) "
				</textarea>
				<br /> <br />
				</form>
		);
	}
}

class ReminderEmailForm extends Component {
	render(){
		return(
			<form>
				<div>
				<h2>Reminder Emails</h2>
				</div>
				<div class="fieldLabel">Do you want one or more remminder emails sent to students who have yet to repond after a few days?</div>
				<br/><br/><input type ="checkbox" value="yes" /> Yes
				<br />
				<br />
				<br />
				<br />
				<br />
				<textarea name="reminderEmail">
				Subject: Reminder to Complete Evaluation for (COURSEDESIGNATOR) (COURSENUMBER) (COURSETITLE)

				Dear (FIRSTNAME),

				Recently we invited you to complete a teaching evaluation for “(COURSEDESIGNATOR) (COURSENUMBER) (COURSETITLE)”. We note that you have not yet completed the evaluation, and wish to remind you that it is still available should you wish to take part.

				To participate, please click on the link below.

				The deadline for completing the evaluation is (CLOSINGDATE) at (TIM).

				Your participation is extremely important to the improvement of teaching and courses at the (UNIVERSITYNAME)

				Sincerely,
				(ADMINNAME)
				----------------------------------------------
				Click here to complete the teaching and course evaluation:
				(SURVEYURL)

				</textarea>
				<br/><br/>
				
				<a href="/home/">Submit </a>
				</form>
		);
	}
	
}

export default EnrollForm;