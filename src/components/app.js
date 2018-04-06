import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import AccountPage from './AccountPage';
import AddAccount from './AddAccount';
import EditAccount from './EditAccount';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu pointing secondary>
            <Menu.Item as={NavLink} to='/'>
              Home
            </Menu.Item>
            <Menu.Item as={NavLink} to='/addAccount'>
              AddAccount
            </Menu.Item>
          </Menu>
          <hr />
          <Route path="/" exact component={AccountPage} />
          <Route path="/addAccount" component={AddAccount} />
          <Route path="/editAccount/:id" component={EditAccount} />
        </div>
      </Router>
    );
  }
}
