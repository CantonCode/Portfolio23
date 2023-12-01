import React from 'react'
import './Intro.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { User, List } from 'grommet-icons'



function Intro() {
  return (
    <Container id='home' className='' style={{height:'100%',color:'white',backgroundColor:'#10101a'}} >
      <Row style={{height:'100%'}}>
        <Col style={{height:'100%',alignItems:'center',display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <Image src="\public\picofme.png" fluid></Image>
        </Col>
        <Col style={{height:'100%',alignItems:'center',display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <div style={{fontSize:"5rem", width:'100%'}}>
            <span>Conor Canton</span>
          </div>
          <div style={{fontSize:"2rem"}}>
              <span>Full-Stack Developer</span>
              <br></br>
              <span>Problem Solver</span>
              <br></br>
              
          </div>
        </Col>     
      </Row>
        {/* <span>Conor Canton</span>
        <br></br>
        <div style={{fontSize:"4rem"}}>
            <span>Full-Stack Developer</span>
            <br></br>
            <span>Problem Solver</span>
            <br></br>
            <span>Adventourist</span>
        </div> */}
        
    </Container>

    
  )
}

export default Intro