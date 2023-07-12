import React from 'react'
import { Badge, Button, Card, Col, Container, FloatingLabel, Modal, Row, Stack } from 'react-bootstrap'



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
                >
                <Row style={{justifyContent:'center'}}>
                    <Col sm={8}>
                    <Modal.Header style={{borderBottom:'0px'}} closeButton></Modal.Header>
                    <Modal.Body>
                    <h1>{project.name}</h1>
                    <hr></hr>

                    <p style={{margin:'2rem'}}>
                        {project.description}
                    </p>
                    </Modal.Body>
                    <Modal.Footer style={{justifyContent:'center',display:'flex'}}>
                            <Stack direction="horizontal" gap={2}>
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
