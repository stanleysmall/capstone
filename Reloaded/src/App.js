import React, { Component } from 'react';


import './App.css';
import Form from './Form';
import Tabs from './SimpleTabs'


class App extends Component {
  
  state = {
    fields: {}
  };

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
            
            < Form onChange={fields =>this.onChange(fields)}/>
            <p>{JSON.stringify(this.state.fields, null, 2)}</p>
          </div>
        </div>
    );
  }
}

export default App;
