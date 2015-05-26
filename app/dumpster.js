#Just a file to keep testing code

//for LoginHandler
import { Alert } from 'react-bootstrap';
//for TopNavComponent
import { Navbar, CollapsibleNav, Nav, NavItem, DropdownButton, MenuItem } from 'react-bootstrap';
import { NavItemLink } from 'react-router-bootstrap'

import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

//components
//top navigation
//import TopNavComponent from './components/topnav.js'
//import routes from './components/routes.js'

//hero content
//footer

//<NavItemLink to="app" router="Router">Home</NavItemLink>
//<NavItemLink to="login" router="Router">Login</NavItemLink>


let LoginHandler = React.createClass({
  render() {
    return(
      <div>
      <Alert bsStyle="warning">
    <strong>Holy guacamole!</strong> Best check yo self, youre not looking too good.
  </Alert>
      Welcome to login</div>);
  }
});

let Login = React.createClass({
  render() {
    return(
      <div>
      <Alert bsStyle="warning">
    <strong>Holy guacamole!</strong> Best check yo self, youre not looking too good.
  </Alert>
      Welcome to login</div>);
  }
});

let TopNavComponent = React.createClass({
  render() {
    return(
      <Navbar brand='React-Bootstrap' toggleNavKey={0}>
        <CollapsibleNav eventKey={0}> {/* This is the eventKey referenced */}
          <Nav navbar>
            <NavItemLink to="app" eventKey={1} href='#'>Home</NavItemLink>
            <NavItemLink to="login" eventKey={2} href='#'>Login</NavItemLink>
            <DropdownButton eventKey={3} title='Dropdown'>
              <MenuItem eventKey='1'>Action</MenuItem>
              <MenuItem eventKey='2'>Another action</MenuItem>
              <MenuItem eventKey='3'>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey='4'>Separated link</MenuItem>
            </DropdownButton>
          </Nav>
          <Nav navbar right>
            <NavItem eventKey={1} href='#'>Link Right</NavItem>
            <NavItem eventKey={2} href='#'>Link Right</NavItem>
          </Nav>
        </CollapsibleNav>
      </Navbar>
    )
  }
});

//React.render(<App/>, document.body);
