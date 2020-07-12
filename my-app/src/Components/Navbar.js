import React, { Component } from 'react'

import styled from "styled-components";
export default class Navbar extends Component {
    render() {
        return (
            <NavbarContainer>
                <nav className="navbar navbar-expand-lg">
  <a className="navbar-brand" href="#">Udhay</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">Professionals <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">Religious</a>
      <a className="nav-item nav-link" href="#">News</a>
      <a className="nav-item nav-link" href="#">Gallery</a>
      <a className="nav-item nav-link" href="#">About</a>
      <a className="nav-item nav-link" href="#">Contact us</a>
    </div>
  </div>
</nav>
                
            </NavbarContainer>
        )
    }
}
//NabarContainer

const NavbarContainer = styled.div`
background: var(--dark-blue);
.nav-link{
    &:hover{
        background:var(--light-green);
    }
}
`;