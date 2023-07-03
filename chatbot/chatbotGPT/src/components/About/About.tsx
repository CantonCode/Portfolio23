import React from 'react'
import './About.css'
import { Col, Container, Image, Row } from 'react-bootstrap'




function About() {
  return (
    <Container className='' style={{height:'50rem',color:'white'}} >       
      <Row style={{}}>
        <div style={{fontSize:"5rem", width:'100%',borderBottom:'dashed white',margin:'2rem'}}>
            <span>About Me</span>
        </div>
        <Col lg={{ span: 4, offset: 2 }}  style={{height:'100%',alignItems:'center',flexDirection:'column',justifyContent:'center',fontSize:'1.25rem', fontWeight:'300'}}>
            <p>I am a student in the University of Limerick,Ireland who is due to graduate with a 2.1 degree in May 2021. I am looking for some experience in the software industry. I am looking for work in the West of Ireland or I am willing to relocate
                        to a new location such as Barcelona or Lisbon.
            </p>
        </Col>
        <Col lg={{ span: 4, offset: 0 }} style={{height:'100%',alignItems:'center',flexDirection:'column',justifyContent:'center',fontSize:'1.25rem', fontWeight:'300'}}>
          <p>I am a student in the University of Limerick,Ireland who is due to graduate with a 2.1 degree in May 2021. I am looking for some experience in the software industry. I am looking for work in the West of Ireland or I am willing to relocate
                        to a new location such as Barcelona or Lisbon.
            </p>
        </Col> 
      </Row>

      <Row style={{}}>
        <div style={{fontSize:"5rem", width:'100%',borderBottom:'dashed white',margin:'2rem'}}>
            <span>About Me</span>
        </div>
        <Col lg={{ span: 4, offset: 2 }}  style={{height:'100%',alignItems:'center',flexDirection:'column',justifyContent:'center',fontSize:'1.25rem', fontWeight:'300'}}>
            <p>I am a student in the University of Limerick,Ireland who is due to graduate with a 2.1 degree in May 2021. I am looking for some experience in the software industry. I am looking for work in the West of Ireland or I am willing to relocate
                        to a new location such as Barcelona or Lisbon.
            </p>
        </Col>
        <Col lg={{ span: 4, offset: 0 }} style={{height:'100%',alignItems:'center',flexDirection:'column',justifyContent:'center',fontSize:'1.25rem', fontWeight:'300'}}>
          <p>I am a student in the University of Limerick,Ireland who is due to graduate with a 2.1 degree in May 2021. I am looking for some experience in the software industry. I am looking for work in the West of Ireland or I am willing to relocate
                        to a new location such as Barcelona or Lisbon.
            </p>
        </Col> 
      </Row>    
    </Container>

    
  )
}

export default About