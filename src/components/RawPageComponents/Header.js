import React from "react";
import {Navbar,Nav} from 'react-bootstrap/';
import logo from './phoeinx.png'
export default function Header() {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="xl"variant="dark"
      style={{ backgroundColor: "rgb(31 31 31 / 70%)",
      position: "absolute",
        width: "100%",}}>
        <Navbar.Brand href="/" style={{color:"#f5d060"}}> <img
        src={logo}
        width="100"
        height="auto"
        className="d-inline-block align-top"
        alt="Phoeinx"
      /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link  style ={{color:"wheat"}} href="/">Home</Nav.Link>
            <Nav.Link style ={{color:"wheat"}} href="/Articles">Articles</Nav.Link>
            <Nav.Link style ={{color:"wheat"}} href="/Projects">Projects</Nav.Link>
            <Nav.Link style ={{color:"wheat"}} href="#contactUs">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
