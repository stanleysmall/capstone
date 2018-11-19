import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <form>
        <div class="container">
          <Welcome />
        </div>
        <br />

        <div class="container">
          <CourseForm />
        </div>
        <br />

        <div class="container">
          <InstructorQuestionForm />
        </div>
		<br />

        <div class="container">
          <CourseQuestionForm />
        </div>
		<br />
		
		<div class="container">
          <AssessmentQuestionForm />
        </div>
		<br />
		
		<div class="container">
        <LabQuestionForm />
        </div>
		<br />
		
		
		<div class="container">
          <TAQuestionForm />
        </div>
		<br />
		
		<div class="container">
          <OnlineQuestionForm />
        </div>
		<br />
		
		<div class="container">
          <OpenEndedQuestionForm />
        </div>
		<br />
		
		<div class="container">
			<EnrollForm />
		</div>
		<br />
		
		<div class="container">
			<InviteEmailForm />
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

class Welcome extends Component {
  render() {
    return (
	<form>
      <div>
        <h1>Welcome to EVAL! </h1>
        <button type="button">Start a Survey</button> <br />
        <br />
        <button type="button">Log In</button> <br />
      </div>
	  </form>
    );
  }
}

class CourseForm extends Component {
  render() {
    return (
      <form>
	  <form>
	  <h1>Course Information </h1>
        <div class="fieldLabel">Course Designator (e.g. MUS)</div>
        <div class="fieldEntry">
          <input type="text" name="coursedesignator" placeholder="" /> <br />
        </div>

        <div class="fieldLabel">Course Number (e.g. 200)</div>
        <div class="fieldEntry">
          <input type="text" name="coursenumber" /> <br />
        </div>

        <div class="fieldLabel">Course Section (e.g. 001)</div>
        <div class="fieldEntry">
          <input type="text" name="coursesection" /> <br />
        </div>

        <div class="fieldLabel">Course Title (e.g. Ballroom Dance)</div>
        <div class="fieldEntry">
          <input type="text" name="coursetitle" /> <br />
        </div>

        <div class="fieldLabel">Semester and Calendar Year (e.g Fall 2019)</div>
        <div class="fieldEntry">
          <input type="text" name="year" /> <br />
        </div>

        <div class="fieldLabel"> Name of Faculty Unit ( e.g. School of Music)</div>
        <div class="fieldEntry">
          <input type="text" name="facultyUnit" /> <br />
        </div>

        <div class="fieldLabel">Name of College ( e.g. Liberal Arts)</div>
        <div class="fieldEntry">
          <input type="text" name="nameOfCollece" /> <br />
        </div>

        <div class="fieldLabel">Name of University ( e.g. Liberal Arts)</div>
        <div class="fieldEntry">
          <input type="text" name="nameOfUniversity" /> <br />
        </div>
		
		<div class="fieldLabel">First and Last Name of Instructor ( e.g. Beth Smith)</div>
        <div class="fieldEntry">
          <input type="text" name="instructorName" /> <br />
        </div>

		<div class="fieldLabel">Instructor Email</div>
        <div class="fieldEntry">
          <input type="text" name="instructorEmail" /> <br />
        </div>
		<div class="fieldLabel">Instructor Phone</div>
        <div class="fieldEntry">
          <input type="text" name="instructorPhone" /> <br />
        </div>
		
		<div class="fieldLabel">Full Name of Course Evaluation Administrator</div>
        <div class="fieldEntry">
          <input type="text" name="adminName" /> <br />
        </div>
		
		<div class="fieldLabel">Email of Course Evaluation Administrator</div>
        <div class="fieldEntry">
          <input type="text" name="adminEmail" /> <br />
        </div>

		<div class="fieldLabel">Beginning Date of Assessments</div>
        <div class="fieldEntry">
          <input type="date" name ="beginDate" /> <br />
        </div>
		
        <div class="fieldLabel">Time of Day to send reminder emails</div>
        <div class="fieldEntry">
          <input type="time" /> <br />
        </div>
		
		<div class="fieldLabel">Closing Date of Assessments</div>
        <div class="fieldEntry">
          <input type="date" name = "closingDate" /> <br />
        </div>
		<br /><br /><br />
		</form>
		<form>
          <input type="submit" value="Submit" />
        </form>
      </form>
    );
  }
}

class InstructorQuestionForm extends Component {
  render() {
    return (
      <form>
	  <div>
		<h1>Questions</h1>
		<h2>The Instructor</h2>
		</div>
		
		{/*
		//
		////
		//QUESTION 1
		////
		//
		*/}
        <form>
          <div class="fieldLabel">How prepared was the instructor for the class?</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 2
		////
		//
		*/}
		<form>
          <div class="fieldLabel">How clearly were the objectives of the course presented? </div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 3
		////
		//
		*/}
		<form>
          <div class="fieldLabel">How enthusiastic was the instructor about the subject? </div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 4
		////
		//
		*/}
		<form>
          <div class="fieldLabel">How clearly did the instructor present concepts, principles and theories? </div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 5
		////
		//
		*/}
		<form>
          <div class="fieldLabel">How much were you encouraged to think for yourselves? </div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 6
		////
		//
		*/}
		<form>
          <div class="fieldLabel">How concerned was the instructor for the quality of student learning? </div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 7
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Did the instructor show respect for the questions and opinions of the students? </div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 8
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Did the instructor ensure an environment of respect for all groups of people in the classroom? </div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 9
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Did the instructor inspire confidence in his/her knowledge? </div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
			//Add question for instructor section
		*/}
        <button type="button">Add question</button> <br />
        <br />

		
		
		

      </form>
    );
  }
}

class CourseQuestionForm extends Component {
	render(){
	return(
		<form>
		<div>
			<h2>The Course</h2>
		</div>
		{/*
		//
		////
		//QUESTION 10
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Were class meetings profitable and worth attending? </div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 11
		////
		//
		*/}
		<form>
          <div class="fieldLabel">What is your overall rating of the primary readings? </div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 12
		////
		//
		*/}
		<form>
          <div class="fieldLabel">How much did this course challenge you intelectually? </div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 13
		////
		//
		*/}
		<form>
          <div class="fieldLabel">How much did you learn from this course? </div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
			//Add question for course section
		*/}
        <button type="button">Add question</button> <br />
        <br />
		
		<form>
          <input type="submit" value="Submit" />
        </form>
		
		</form>
	);
	}
}

class AssessmentQuestionForm extends Component {
	render(){
	return(
		<form>

		<div>
			<h2>Assessment</h2>
		</div>
		{/*
		//
		////
		//QUESTION 14
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Did the instructor let you know what was expected on the assessments (exams, assignments, projects, papers, etc.)?</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
		  <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 15
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Did the assessments reflect the important aspects of the course? </div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 16
		////
		//
		*/}
		<form>
          <div class="fieldLabel">How fair were the grading procedures?</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 17
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Overall how would you rate the assessment process (exams, assignments, projects, papers, etc.)?</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
			//Add question for assessment section
		*/}
        <button type="button">Add question</button> <br />
        <br />
		
		<form>
          <input type="submit" value="Submit" />
        </form>
		
		</form>
	);
	}
}

class OnlineQuestionForm extends Component {
	render(){
	return(
		<form>

				<div>
			<h2>Online Component Assessment</h2>
		</div>
		{/*
		//
		////
		//QUESTION 31
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Did you take this course as a distance learning student?</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 32
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Please indicate the primary online modality used with the course.</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 33
		////
		//
		*/}
		<form>
          <div class="fieldLabel">The online modality used with the course was well suited to my needs.</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 34
		////
		//
		*/}
		<form>
          <div class="fieldLabel">There was adequate opportunity for me to interact with the instructor.</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 35
		////
		//
		*/}
		<form>
          <div class="fieldLabel">There was adequate opportunity for me to interact with other students.</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 36
		////
		//
		*/}
		<form>
          <div class="fieldLabel">The online technologies used in this course worked the way they were supposed to.</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 37
		////
		//
		*/}
		<form>
          <div class="fieldLabel">The communication tools were easy to use (email, assignment delivery, exam delivery or proctoring, chat, web, etc.).</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
		  <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 38
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Technology support was there if I needed it.</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 39
		////
		//
		*/}
		<form>
          <div class="fieldLabel">The online expereince was well-suited to the way I like to learn.</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 40
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Which statement best characterizes your belief after having taken this course?</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 41
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Which statement best characterizes your belief about the grade you expect to receive in this course?</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
		  <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 42
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Please identify an e-learning aspect of the course that you found particularly valuable or beneficial.</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 43
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Please identify an e-learning aspect of the course that could be improved.</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
			//Add question for online component assessment section
		*/}
        <button type="button">Add question</button> <br />
        <br />
		
		<form>
          <input type="submit" value="Submit" />
        </form>
		
		</form>
	);
	}
}

class OpenEndedQuestionForm extends Component {
	render(){
	return(
		<form>

		<div>
			<h2>Open Ended Questions</h2>
		</div>
		{/*
		//
		////
		//QUESTION 44
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Please identify the aspects of this course that were of most value to you.</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 45
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Please mention at least one additional topic or component that you would like to see included in this course.</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
		  <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 46
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Please make any additional comments that you desire to make about the course instructor, maaterials or pedagogy.</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
		  <br />
          <questionCheckBoxes />
        </form>

		{/*
			//Add question for open ended section
		*/}
        <button type="button">Add question</button> <br />
        <br />
		
		<form>
          <input type="submit" value="Submit" />
        </form>
		
		</form>
	);
	}
}


class TAQuestionForm extends Component {
	render(){
	return(
		<form>

		<div>
			<h2>The Teaching Assistant</h2>
		</div>
		{/*
		//
		////
		//QUESTION 22
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Was there a teaching assistant supporting this course?</div>
          <input type="checkbox" value="yes" /> Yes <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 23
		////
		//
		*/}
		<form>
          <div class="fieldLabel">If there was more than one teaching assistant for the course, please name the TA you are evaluating.</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 24
		////
		//
		*/}
		<form>
          <div class="fieldLabel">How much did the teaching assistant contribute to your learning in this course?</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 25
		////
		//
		*/}
		<form>
          <div class="fieldLabel">How concerned was the teaching assistant for the quality of student learning?</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 26
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Did the teaching asssistant show respect for the questions and opinions of students?</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 27
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Would you want to have this teaching assistant in the future in another course?</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 28
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Would you recommend this teaching assistant to assist in this course in the future?</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 29
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Name something the teaching assistant did particularly well.</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 30
		////
		//
		*/}
		<form>
          <div class="fieldLabel">Name something the teaching assistant could do better in the future.</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
			//Add question for teaching assistant section
		*/}
		<form>
        <button type="button">Add question</button> <br />
        <br />

          <input type="submit" value="Submit" />
		  </form>
		
		</form>
	);
	}
}


class LabQuestionForm extends Component {
	render(){
	return(
		<form>
<div>
			<h2>The Laboratory Experience</h2>
		</div>
		{/*
		//
		////
		//Question 18
		////
		//
		*/}
		<form>
			<div class="fieldLabel">Did this course have one or more regularly scheduuled laboratory sessions?</div>
			<input type="checkbox" value="yes" /> Yes <br />
			<br />
			<br />
			<questionCheckBoxes />
		</form>
		{/*
		//
		////
		//QUESTION 19
		////
		//
		*/}
		<form>
          <div class="fieldLabel">How much did the laboratory experience contribute to your learning in this course></div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 20
		////
		//
		*/}
		<form>
          <div class="fieldLabel">What was done particularly well in the laboratory experience?</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
		//
		////
		//QUESTION 21
		////
		//
		*/}
		<form>
          <div class="fieldLabel">How could the laboratory be improved?</div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
		{/*
			//Add question for laboratory section
		*/}
		<form>
        <button type="button">Add question</button> <br />
        <br />

          <input type="submit" value="Submit" />
		  </form>
		
		</form>
	);
	}
}	




class questionCheckBoxes extends Component {
  render() {
    return (
      <form>
        <div class="fieldLabel">Add new question</div>
        <div class="fieldEntry">
          <input type="text" name="question" />
        </div>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

class EnrollForm extends Component {
	render(){
		return(
			<form>
				<div>
				<h2>Class Roll</h2>
				</div>
				<div>Please insert in the field below the first name, last name, and email of each student in the class. <br />
										The information for each student should appear in a separate row and be separated by commas. (e.g Mary, Smith, marysmith@qmail.com) <br />
										You may cut and paste into the window at your option.</div>
				<br />
				<div class="fieldEntry">
					<input type="text" name="question" />
					</div>
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
				
					Subject: Invitation to Complete Evaluation for (COURSEDESIGNATOR) (COURSENUMBER) (COURSETITLE) <br /> <br />

					Dear (FIRSTNAME), <br /><br />

					Please complete the teaching and course evaluation for (COURSEDESIGNATOR) (COURSENUMBER) (COURSETITLE). <br />

					This student evaluation of teaching is completely anonymous unless you purposefully identify yourself in response to one of the questions. <br />The software system will send you automatic reminders every few days until you complete the evaluation. <br />
					<br />
					To respond, simply click the link at the end of this message. <br /><br />

					Sincerely, <br />
					(ADMINNAME) <br />
					----------------------------------------------<br />
					Click here to complete the teaching and course evaluation: <br />
					(SURVEYURL) <br /> <br />

					(ADMINNAME) ((ADMINEMAIL) <br />  
				
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
				<input type ="checkbox" value="yes" /> Yes
				<br />
				<br />
				
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

				</form>
		);
	}
	
}

export default App;