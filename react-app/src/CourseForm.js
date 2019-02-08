import React, { Component } from "react";
import "./App.css";

class CourseForm extends Component {
  render() {
    return (
	  <form>
	  <div class="container">
	  <a href="/home/">Back </a>&nbsp;
	  <a href="/login/">Sign out </a>
	  <h1>Course Information </h1>
        <div class="fieldLabel">Course Designator (e.g. MUS)</div>
        <div class="fieldEntry">
          <input type="text" name="coursedesignator" placeholder="" id="des"/> <br />
        </div>

        <div class="fieldLabel">Course Number (e.g. 200)</div>
        <div class="fieldEntry">
          <input type="text" name="coursenumber" id="num"/> <br />
        </div>

        <div class="fieldLabel">Course Section (e.g. 001)</div>
        <div class="fieldEntry">
          <input type="text" name="coursesection" id="sec"/> <br />
        </div>

        <div class="fieldLabel">Course Title (e.g. Ballroom Dance)</div>
        <div class="fieldEntry">
          <input type="text" name="coursetitle" id="title"/> <br />
        </div>

        <div class="fieldLabel">Semester and Calendar Year (e.g Fall 2019)</div>
        <div class="fieldEntry">
          <input type="text" name="year" id="year"/> <br />
        </div>

        <div class="fieldLabel"> Name of Faculty Unit ( e.g. School of Music)</div>
        <div class="fieldEntry">
          <input type="text" name="facultyUnit" id="fac"/> <br />
        </div>

        <div class="fieldLabel">Name of College ( e.g. Liberal Arts)</div>
        <div class="fieldEntry">
          <input type="text" name="nameOfCollege" id="col"/> <br />
        </div>

        <div class="fieldLabel">Name of University ( e.g. Liberal Arts)</div>
        <div class="fieldEntry">
          <input type="text" name="nameOfUniversity" id="uni"/> <br />
        </div>
		
		<div class="fieldLabel">First and Last Name of Instructor ( e.g. Beth Smith)</div>
        <div class="fieldEntry">
          <input type="text" name="instructorName" id="iname"/> <br />
        </div>

		<div class="fieldLabel">Instructor Email</div>
        <div class="fieldEntry">
          <input type="text" name="instructorEmail" id="iemail"/> <br />
        </div>
		<div class="fieldLabel">Instructor Phone</div>
        <div class="fieldEntry">
          <input type="text" name="instructorPhone" id="iphone"/> <br />
        </div>
		
		<div class="fieldLabel">Full Name of Course Evaluation Administrator</div>
        <div class="fieldEntry">
          <input type="text" name="adminName" id="adname"/> <br />
        </div>
		
		<div class="fieldLabel">Email of Course Evaluation Administrator</div>
        <div class="fieldEntry">
          <input type="text" name="adminEmail" id="ademail"/> <br />
        </div>

		<div class="fieldLabel">Beginning Date of Assessments</div>
        <div class="fieldEntry">
          <input type="date" name ="beginDate" id="begdate"/> <br />
        </div>
		
        <div class="fieldLabel">Time of Day to send reminder emails</div>
        <div class="fieldEntry">
          <input type="time" id="time"/> <br />
        </div>
		
		<div class="fieldLabel">Closing Date of Assessments</div>
        <div class="fieldEntry">
          <input type="date" name = "closingDate" id="closdate"/> <br />
        </div>
		<br /><br /><br />
		<form>
		  <button type="button" onClick={this.createJSON}>Next</button>
          
        </form>
		</div>
      </form>
    );
  }
  
  createJSON(){
	  let newCourse = {
		  Designator: document.getElementById("des").value,
		  Number: document.getElementById("num").value,
		  Section: document.getElementById("sec").value,
		  Title: document.getElementById("title").value,
		  Year: document.getElementById("year").value,
		  Faculty: document.getElementById("fac").value,
		  College: document.getElementById("col").value,
		  University: document.getElementById("uni").value,
		  InstructorName: document.getElementById("iname").value,
		  InstructorEmail: document.getElementById("iemail").value,
		  InstructorPhone: document.getElementById("iphone").value,
		  AdminName: document.getElementById("adname").value,
		  AdminEmail: document.getElementById("ademail").value,
		  BeginDate: document.getElementById("begdate").value,
		  Time: document.getElementById("time").value,
		  CloseDate: document.getElementById("closdate").value
	}
	
	
	fetch('https://jsonplaceholder.typicode.com/posts',{
		method: 'POST',
		body: JSON.stringify(newCourse),
		headers: {
			'Content-type': 'application/json; charsett=UTF-8'
		}
		})
		.then(response => response.json())
		.then(json => console.log(json))
	
	document.location.href= "/questions/";
  }
  
  loadJSON(){
	  let course;
	  fetch('https://jsonplaceholder.typecode.com/posts')
	  .then(response => response.json())
	  .then(json => course=JSON.parse(json))
	  
	  document.getElementById("des").value='lemon!';
  }
  
}

export default CourseForm;