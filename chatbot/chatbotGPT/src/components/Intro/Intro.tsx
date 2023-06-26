import React from 'react'
import './Intro.css'
import { Container } from 'react-bootstrap'
import { User, List } from 'grommet-icons'



function Intro() {
  return (
    <Container className='introText' style={{height:'50rem',color:'white', textAlign:"left"}} >
        <span>Conor Canton</span>
        <br></br>
        <div style={{fontSize:"4rem"}}>
            <span>Full-Stack Developer</span>
            <br></br>
            <span>Problem Solver</span>
            <br></br>
            <span>Adventourist</span>
        </div>
        
    </Container>

    
  )
}

export default Intro