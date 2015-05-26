import React from 'react';
import router from 'config/routes';
import { Navbar, CollapsibleNav, Nav, NavItem, DropdownButton, MenuItem } from 'react-bootstrap';
import { NavItemLink } from 'react-router-bootstrap';

let TopNavComponent = React.createClass({
  render() {
    return(
      <Navbar brand='React-Bootstrap' toggleNavKey={0}>
        <CollapsibleNav eventKey={0}> {/* This is the eventKey referenced */}
          <Nav navbar>
            <NavItemLink to="app" eventKey={1} href='#'>Home</NavItemLink>
            <NavItemLink to="sidebar" eventKey={2} href='#'>Sidebar</NavItemLink>
            <NavItemLink to="forms" eventKey={2} href='#'>Forms</NavItemLink>
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

export default TopNavComponent;
