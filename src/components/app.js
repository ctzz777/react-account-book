import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AccountPage from './AccountPage';
import AddAccount from './AddAccount';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/addAccount">AddAccount</Link>
          <hr />
          <Route path="/" exact component={AccountPage} />
          <Route path="/addAccount" component={AddAccount} />
        </div>
      </Router>
    );
  }
}
