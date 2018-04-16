import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import AccountPage from './AccountPage';
import AddAccount from './AddAccount';
import EditAccount from './EditAccount';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state

    return (
      <Router>
        <div>
          <Menu pointing secondary icon='labeled'>
            <Menu.Item 
              as={NavLink}
              to='/'
              name='home' 
              activeClassName="selected"
              active={activeItem === 'home'} 
              onClick={this.handleItemClick}
              exact
            >
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item 
              as={NavLink}
              to='/addAccount'
              name='addAccount' 
              activeClassName="selected"
              active={activeItem === 'addAccount'} 
              onClick={this.handleItemClick}
              exact
            >
              <Icon name='add circle' />
              Add
            </Menu.Item>
          </Menu>
          <Route path="/" exact component={AccountPage} />
          <Route path="/addAccount" component={AddAccount} />
          <Route path="/editAccount/:id" component={EditAccount} />
        </div>
      </Router>
    );
  }
}
