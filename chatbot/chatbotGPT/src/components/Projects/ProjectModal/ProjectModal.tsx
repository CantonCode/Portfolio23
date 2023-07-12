import React from 'react'
import { Badge, Button, Card, Col, Container, FloatingLabel, Modal, Row, Stack } from 'react-bootstrap'

import { Reactjs,Node, } from 'grommet-icons'

// const ProjectCard = (props) =>  {
const ProjectModal = (project: any) => {
  return (
    <Container>
                <Modal
                {...project}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{textAlign:'center',justifyContent:'center',alignItems:'center'}}
                scrollable={true}
                >
                <Row style={{justifyContent:'center',display:'flex'}}>
                    <Col sm={8}>
                        <Modal.Header style={{borderBottom:'0px'}} closeButton></Modal.Header>
                        <Modal.Body style={{overflowY:'auto',maxHeight:'60vh'}}>
                        <h1>{project.name}</h1>
                        <hr></hr>

                        <p style={{margin:'2rem'}}>
                            {project.description}
                        </p>
                        </Modal.Body >
                    </Col>
                </Row>
                <Row style={{justifyContent:'center'}}>
                    <Col style={{height:'auto'}}>
                        <Modal.Footer style={{justifyContent:'center',display:'flex',}}>
                                <Stack direction="horizontal" gap={2} style={{display:'flex'}}>
                                    {project.technologies.map((tech: any) => (
                                        <Badge pill bg="dark" text="white" style={{padding:'1rem'}}>
                                            {tech}
                                        </Badge>
                                    ))}
                                </Stack>
                        </Modal.Footer>
                    </Col>
                </Row>

                    
                </Modal>
    </Container> 
  )
}

export default ProjectModal
