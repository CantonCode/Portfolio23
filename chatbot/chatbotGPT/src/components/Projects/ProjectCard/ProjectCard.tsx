import React from 'react'
import './ProejctCard.css'
import { Button, Card, Container } from 'react-bootstrap'
import ProjectModal from '../ProjectModal/ProjectModal';
import { Add,Info } from 'grommet-icons';




// const ProjectCard = (props) =>  {
const ProjectCard = (project: any) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container >
        <Card onClick={() => setModalShow(true)} style={{padding:'0rem',cursor: "pointer",height:'25vh',border:'2px solid grey',alignContent:'center',display:'flex'}}>
            <Card.Img src={project.image} style={{height:'80%',backgroundSize:'none'}}/>

            <Card.Body style={{borderTop:'2px solid black'}}>
                <Card.Title>{project.name}</Card.Title>
            </Card.Body>

            <div className="overlay" style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
              <div className='overlay-icon'>
                <Info color='white' size='medium'/>
                <div className="text" style={{color:'white'}}>View More</div>
              </div>
              
            </div>
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
