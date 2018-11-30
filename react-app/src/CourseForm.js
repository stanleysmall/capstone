import React, { Component } from "react";
import "./App.css";

class CourseForm extends Component {
  render() {
    return (
	  <form>
	  <div class="container">
	  <a href="/login/">Sign out </a>
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
		<form>
          <a href="/questions">Next</a>
        </form>
		</div>
      </form>
    );
  }
}

export default CourseForm;