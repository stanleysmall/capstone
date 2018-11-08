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
        <h2>Welcome to EVAL! </h2>
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

        <div class="fieldLabel">
          Name of Faculty Unit ( e.g. School of Music)
        </div>
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

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class InstructorForm extends Component {
  render() {
    return (
      <form>
        <form>
          <div class="fieldLabel">
            <input
              type="text"
              name="question"
              value="How prepared was the instructor for class?"
            />
            <br />
          </div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
        <form>
          <div class="fieldLabel">
            <input type="text" name="question" />
            <br />
          </div>
          <input type="checkbox" value="include" /> Include
          <input type="checkbox" value="mandatory" /> Mandatory <br />
          <br />
          <br />
          <questionCheckBoxes />
        </form>
        <button type="button">Add question</button> <br />
        <br />
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