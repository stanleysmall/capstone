import React, { Component } from "react";
import "./App.css";

class QuestionForms extends Component {
	render() {
    return (
      <form>
		<a href="/login/">Sign out </a>
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
		</form>
		)
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

          <a href="/questions/">Next </a>
		  </form>
		
		</form>
	);
	}
}	

export default QuestionForms;