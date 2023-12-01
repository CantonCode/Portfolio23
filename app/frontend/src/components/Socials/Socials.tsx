import { Github, Linkedin } from 'grommet-icons'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'


function Socials() {
  return (
    <Container className='' style={{color:'white',justifyContent: 'flex-end',height:'20vh'}} >
        <Row style={{height:'100%'}}>
            <Col lg={{span:3,offset:3 }} xs={{span:6,offset:0 }}  style={{height:'100%',alignItems:'center',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                <a href='https://www.linkedin.com/in/ccanton/' target='_blank'><Linkedin size='large' /></a>
            </Col>
            <Col lg={{span:3,offset:0 }} xs={{span:6,offset:0 }} style={{height:'100%',alignItems:'center',display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <a href='https://github.com/CantonCode' target='_blank'><Github size='large' /></a>
            </Col>
        </Row>
    </Container>

    
  )
}

export default Socials