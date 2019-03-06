import React, { Component } from 'react';

import './App.css';
import CourseForm from './CourseForm';
import Tabs from './SimpleTabs'

class App extends Component {
  
  //State starts out with no fields however it will be built up when
  //onChange is called.  Should be reset to {} when a course form is submitted
  state = {
    fields: {}
  };

  //On change function taks a new value, unpakcs the state and the new value
  //and sets the state to the two
  onChange = newValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...newValue
      }
    });
  };

  render() {
    return (
      <div>
          <div>
            <Tabs />
          </div>

          <div className="App">
            
            < CourseForm onChange={fields =>this.onChange(fields)}/>
            <p>{JSON.stringify(this.state.fields, null, 2)}</p>
          </div>
        </div>
    );
  }
}

export default App;
