import React, { Component } from 'react';
import DatePicker from './datePicker';

export default class App extends Component {
  render() {
    return (
      <div className="container" >
        <div className="jumbotron">
          <h1>Bootstrap Tutorial</h1>
        </div>
        <div className="row">
          <div className="col-md-6">
          </div>
          <div className="col-md-6">
            <DatePicker />
          </div>
        </div>
      </div>
    );
  }
}
