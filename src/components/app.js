import React, { Component } from 'react';
import AccountPage from './AccountPage';

export default class App extends Component {
  render() {
    return (
      <div className="container" >
        <div className="jumbotron">
        </div>
        <div className="row">
          <div className="col-md-12">
            <AccountPage />
          </div>
        </div>
        <div className="row">
        </div>
        <div className="row">
          <div className="col-md-3">
          </div>
          <div className="col-md-6">
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </div>
    );
  }
}
