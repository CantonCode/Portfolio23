import React from 'react'
import './About.css'
import { Col, Container, Image, Row } from 'react-bootstrap'




function About() {
  return (
    <Container id='about' className='' style={{color:'white',height:'100%',display:'flex',alignItems:'center',backgroundColor:'#10101a'}} >

      <Row style={{}}>

      <Col sm={{span:7,offset:2}} style={{display:'flex',textAlign:'center',alignItems:'center'}}>
                        <h1 style={{color:'white'}}>About Me</h1>
                        <hr style={{color:'white', width:'inherit',marginLeft:'3rem'}}/>
                    </Col>
        <Col lg={{ span: 4, offset: 2 }}  style={{height:'100%',alignItems:'center',flexDirection:'column',justifyContent:'center',fontSize:'1.25rem', fontWeight:'300'}}>
            <p>I am a software developer with a wide variety of experience from essential corporate applications to complicated backend and data visualization solutions. I have a 1.1 bachelor's degree in Computer Systems from the University of Limerick, Ireland.
               Currently working on a business endeavor, 3VA Studios, with a business associate but also looking for a permanent job to develop my skills in cloud computing.
              </p>
        </Col>
        <Col lg={{ span: 4, offset: 0 }} style={{height:'100%',alignItems:'center',flexDirection:'column',justifyContent:'center',fontSize:'1.25rem', fontWeight:'300'}}>
          <p>I am looking to specialize in backend solutions and I am currently upskilling in this area. The main technologies I am currently working with are React, NodeJS, Express, and MongoDB.
              Recently I have begun to work on the migration of applications to the cloud with the use of Google Cloud and AWS. I would like to pursue a career in this area and would be grateful for any opportunity
           </p>
        </Col> 
      </Row>
    </Container>

    
  )
}

export default About