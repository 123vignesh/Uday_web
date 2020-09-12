import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
import {  Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';

import styled from "styled-components";


export default class Navbar1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isNavOpen: false,
        isModalOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
}

toggleNav() {
    this.setState ({
        isNavOpen :!this.state.isNavOpen
    });
}

    render() {
        return (
            <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bing" sticky="top">
  <div className="container">
  <NavLink className="navbar-brand" to="/">Prof. Uday C. Patkar</NavLink>
  <NavbarToggler onClick ={this.toggleNav} />
    <Collapse isOpen={this.state.isNavOpen} navbar>
    <Nav navbar className="navbar-nav ml-auto">
     <NavItem>
        <NavLink activeClassName='menu_active' 
        exact 
        className="nav-link active"
        aria-current="page"
        to="/">Home</NavLink>
    </NavItem>
    <NavItem>
        <NavLink activeClassName='menu_active' 
        exact 
        className="nav-link active"
        aria-current="page"
        to="/Professionals">Professionals</NavLink>
    </NavItem>
    <NavItem>
        <NavLink activeClassName='menu_active' 
        exact 
        className="nav-link active"
        aria-current="page"
        to="/Religious">Religious</NavLink>
    </NavItem>
    <NavItem>
        <NavLink activeClassName='menu_active' 
        exact 
        className="nav-link active"
        aria-current="page"
        to="/News">News</NavLink>
     </NavItem>
    <NavItem>
        <NavLink activeClassName='menu_active' 
        exact 
        className="nav-link active"
        aria-current="page"
        to="/Gallery">Gallery</NavLink>
     </NavItem>
     <NavItem>
        <NavLink activeClassName='menu_active' 
        exact 
        className="nav-link active"
        aria-current="page"
        to="/Family">Family</NavLink>
     </NavItem>
    <NavItem>
        <NavLink activeClassName='menu_active' 
        exact 
        className="nav-link active"
        aria-current="page"
        to="/About">About</NavLink>
     </NavItem>
    <NavItem>
        <NavLink activeClassName='menu_active' 
        exact 
        className="nav-link active"
        aria-current="page"
        to="/Contact">Contact</NavLink>
    </NavItem> 
    </Nav>
</Collapse>
  </div>
    </nav>
</>
        )
    }
}