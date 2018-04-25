import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import AccountBook from './AccountBook';
import AddAccount from './AddAccount';
import EditAccount from './EditAccount';
import Login from './Login';

const Nav = props => (
	<NavLink
		exact
		{...props}
		activeClassName="active"
	/>
);

const App = () => {
  return (
    <Router>
      <div>
        <Menu pointing secondary icon='labeled' color='blue' inverted>
          <Menu.Item 
            as={Nav}
            to='/'
            name='home' 
          >
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Item 
            as={Nav}
            to='/addAccount'
            name='addAccount' 
          >
            <Icon name='add circle' />
            Add
          </Menu.Item>
          <Menu.Item 
            as={Nav}
            to='/login'
            name='login' 
          >
            <Icon name='universal access' />
            Login
          </Menu.Item>
        </Menu>
        <Route path="/" exact component={AccountBook} />
        <Route path="/addAccount" component={AddAccount} />
        <Route path="/editAccount/:id" component={EditAccount} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;