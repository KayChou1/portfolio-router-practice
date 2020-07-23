import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

function NavBar(){

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Home Page</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav> 
                   
            <Nav>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
                <NavDropdown.Item href="https://kaychou1.github.io/Space-Kirby/"target="blank">Space Kirby</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
        
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default NavBar;