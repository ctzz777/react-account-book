import React, { Component } from 'react';
import DatePicker from './datePicker';

export default class App extends Component {
  render() {
    return (
      <div className="container" >
        <div className="jumbotron">
        </div>
        <div className="row">
          <div className="col-md-4">
          </div>
          <div className="col-md-8">
            <DatePicker />
          </div>
        </div>
      </div>
    );
  }
}
