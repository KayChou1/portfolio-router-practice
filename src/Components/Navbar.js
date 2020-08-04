import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import BrainPic from '../Assets/braingif.gif';


function NavBar(){

    return (
        <Navbar sticky="top" className="Navigation" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Kayas Portfolio <img src={BrainPic} height="40px" alt="BrainPic" ></img> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav> 
                   
            <Nav>
            
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
                <NavDropdown.Divider/>

                <NavDropdown.Item href="https://kaychou1.github.io/Space-Kirby/"target="blank">Space Kirby</NavDropdown.Item>
                <NavDropdown.Item href="https://kaychou1.github.io/calculatorProject/"target="blank">Online Calculator</NavDropdown.Item>
                <NavDropdown.Item href="https://kaychou1.github.io/IMDB-Movie-Fetch/"target="blank">Movie Fetch</NavDropdown.Item>
                <NavDropdown.Item href="https://kaychou1.github.io/Lakai-sneaker-API/"target="blank">Sneaker API</NavDropdown.Item>
                <NavDropdown.Item href="https://kaychou1.github.io/OMDb-API/"target="blank">Movie API</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Photos">Photos</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/kayaa/"target="blank">LinkedIn</Nav.Link>
            <Nav.Link href="https://github.com/KayChou1/"target="blank">Github</Nav.Link>
        
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default NavBar;