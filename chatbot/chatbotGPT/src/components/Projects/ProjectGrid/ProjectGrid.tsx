import React from 'react'
import './ProjectGrid.css'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import ProjectCard from '../ProjectCard/ProjectCard'

const projectData = [
    {
        "name": "Project 1",
        "image": "https://via.placeholder.com/150x75"
    },
    {
        "name": "Project 2",
        "image": "https://via.placeholder.com/150x75"
    },
    {
        "name": "Project 3",
        "image": "https://via.placeholder.com/150x75"
    },
    {
        "name": "Project 4",
        "image": "https://via.placeholder.com/150x75"
    },

]


function MyVerticallyCenteredModal(props:any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


// const ProjectCard = (props) =>  {
function ProjectGrid(){
  return (
    <Container id='projects' style={{height:'75vh',alignItems:'center',display:'flex'}}>
        <Row>
            <Col sm={{span:7,offset:2}} style={{display:'flex',textAlign:'center',alignItems:'center'}}>
                            <h1 style={{color:'white'}}>Projects</h1>
                            <hr style={{color:'white', width:'inherit',marginLeft:'3rem'}}/>
            </Col>
        {projectData.map((projectData, k) => (
                    <Col key={k} xs={12} md={6} lg={4} style={{height:'100%',paddingTop:'1rem',paddingBottom:'1rem'}}>
                        <ProjectCard onClick={() => setModalShow(true)} {...projectData} />
                    </Col>
        ))}
        </Row>
    </Container> 
  )
}

export default ProjectGrid