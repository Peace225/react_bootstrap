import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Go.Zone 4</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto ">
          <Nav.Link href="#accueil">Accueil</Nav.Link>
          <Nav.Link href="#apropos">Apropos</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link> 
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header