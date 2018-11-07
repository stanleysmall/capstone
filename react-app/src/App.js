import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
        // Questions to select course attributes
      <form>
    Course Designator (e.g. MUS)
    <input type="text" name="coursedesignator" /> <br />
    Course Number (e.g. 200)
    <input type="text" name="coursenumber" /> <br />
    Course Section (e.g. 001)
    <input type="text" name="coursesection" /> <br />
    Closing Date
    <input type="date" /> <br />
    Time of Day 
    <input type="time" /> <br />
  <input type="submit" value="Submit" />
</form>
  
  // Instructor attributes
<form>
    How prepared was the instructor for class?
    <input type="checkbox" value="include" /> Include 
    <input type="checkbox" value="mandatory" /> Mandatory <br />
        <input type="submit" value="Submit" />
</form>
        </div>
    );
  }
}

export default App;
