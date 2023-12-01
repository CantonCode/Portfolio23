import React from 'react'
import './About.css'
import { Col, Container, Image, Row } from 'react-bootstrap'




function About() {
  return (
    <Container id='about' className='' style={{color:'white',height:'100vh',display:'flex',alignItems:'center'}} >

      <Row style={{}}>

      <Col sm={{span:7,offset:2}} style={{display:'flex',textAlign:'center',alignItems:'center'}}>
                        <h1 style={{color:'white'}}>About Me</h1>
                        <hr style={{color:'white', width:'inherit',marginLeft:'3rem'}}/>
                    </Col>
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