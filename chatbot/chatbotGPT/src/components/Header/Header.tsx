import React from 'react'
import './Header.css'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { User, List } from 'grommet-icons'



function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark" style={{borderRadius:"20px",padding:'20px'}} >
    <Container>
      <Navbar.Brand href="#home">Conor's Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav" >
        <Nav className="" >
          <Nav.Link href="#about" style={{border: '1px solid white',borderRadius: '30px',margin:'5px'}}><User color='white' style={{padding:"2px"}}/>About Me</Nav.Link>
          <Nav.Link href="#Experience" style={{border: '1px solid white',borderRadius: '30px',margin:'5px'}}><List color='white' style={{padding:"2px"}}/>Experience</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
  )
}

export default Header