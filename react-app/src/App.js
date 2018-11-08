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
          <InstructorForm />
        </div>
      </form>
    );
  }
}

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to EVAL! </h1>
        <button type="button">Start a Survey</button> <br />
        <br />
        <button type="button">Log In</button> <br />
      </div>
    );
  }
}

class CourseForm extends Component {
  render() {
    return (
      <form>
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
          <input type="text" name="facultyUnit" /> <br />
        </div>

        <div class="fieldLabel">Name of University ( e.g. Liberal Arts)</div>
        <div class="fieldEntry">
          <input type="text" name="facultyUnit" /> <br />
        </div>

        <div class="fieldLabel">Closing Date</div>
        <div class="fieldEntry">
          <input type="date" /> <br />
        </div>

        <div class="fieldLabel">Time of Day</div>
        <div class="fieldEntry">
          <input type="time" /> <br />
        </div>

      </form>
    );
  }
}

class InstructorForm extends Component {
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
			//Add question for instructor section
		*/}
        <button type="button">Add question</button> <br />
        <br />
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
			//Add question for instructor section
		*/}
        <button type="button">Add question</button> <br />
        <br />
		<div>
			<h2>The Laboratory Experience</h2>
		</div>
		<form>
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

export default App;