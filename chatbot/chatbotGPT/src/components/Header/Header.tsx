import React from 'react'
import './Header.css'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { User, List, Projects } from 'grommet-icons'
import { Link } from 'react-scroll'


function Header() {
  return (
    <Navbar sticky='top' collapseOnSelect expand="lg" className="backdropFilter"  style={{borderRadius:"2rem",border:".2rem solid #2a2b37",padding:'1rem 2rem',backgroundColor:'rgba(42,43,56,.5)',top:'0.5rem',bottom:'0.5rem'}} >
    <Container>
      <Navbar.Brand href="#home" style={{color:"white"}}>Conor's Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav" >
        <Nav>
          <Link spy={true} smooth={true} duration={500} activeClass="active-link" to='about' offset={0} style={{padding:'0.5rem', border: '1px solid rgba(205, 205, 205, 0.5)',borderRadius: '30px',margin:'5px', color:'rgba(205, 205, 205, 0.5)'}}><User color='rgba(205, 205, 205, 0.5)' style={{padding:"2px"}}/>About Me</Link>
          <Link spy={true} smooth={true} duration={500} activeClass="active-link" to='experience' offset={0} style={{padding:'0.5rem',border: '1px solid rgba(205, 205, 205, 0.5)',borderRadius: '30px',margin:'5px',color:'rgba(205, 205, 205, 0.5)'}}><List color='rgba(205, 205, 205, 0.5)' style={{padding:"2px"}}/>Experience</Link>
          <Link spy={true} smooth={true} duration={500} activeClass="active-link" to='projects' offset={0} style={{padding:'0.5rem',border: '1px solid rgba(205, 205, 205, 0.5)',borderRadius: '30px',margin:'5px',color:'rgba(205, 205, 205, 0.5)'}}><Projects color='rgba(205, 205, 205, 0.5)' style={{padding:"2px"}}/>Projects</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

    
  )
}

export default Header