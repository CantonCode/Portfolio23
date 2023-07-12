import React from 'react'
import './ProejctCard.css'
import { Button, Card, Container } from 'react-bootstrap'
import ProjectModal from '../ProjectModal/ProjectModal';



// const ProjectCard = (props) =>  {
const ProjectCard = (project: any) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container>
        <Card onClick={() => setModalShow(true)} style={{padding:'0rem',cursor: "pointer",height:'25vh',border:'2px solid grey'}}>
            <Card.Img src={project.image} style={{height:'80%',backgroundSize:'none'}}/>

            <Card.Body style={{borderTop:'2px solid black'}}>
                <Card.Title>{project.name}</Card.Title>
            </Card.Body>
        </Card>

        <ProjectModal
        {...project}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container> 
  )
}

export default ProjectCard
