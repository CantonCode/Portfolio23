import React from 'react'
import './ProjectGrid.css'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import ProjectCard from '../ProjectCard/ProjectCard'

const projectData = [
    {
        "name": "Surfboard Rental App",
        "image": "public/projects/SurfRental.png"
    },
    {
        "name": "Elderly Dating Site",
        "image": "public/projects/DatingSite.png"
    },
    {
        "name": "Covid 19 - Data Visualization",
        "image": "public/projects/Covid19.jpg"
    },
    {
        "name": "LocalBids - MVP",
        "image": "public/projects/3VA.png"
    },

]



// const ProjectCard = (props) =>  {
function ProjectGrid(){
  return (
    <Container id='projects' style={{height:'75vh',alignItems:'center',display:'flex',justifyContent:'center'}}>
        <Row>
            <Col sm={{span:7,offset:2}} style={{display:'flex',textAlign:'center',alignItems:'center'}}>
                            <h1 style={{color:'white'}}>Projects</h1>
                            <hr style={{color:'white', width:'inherit',marginLeft:'3rem'}}/>
            </Col>
        {projectData.map((projectData, k) => (
                    <Col key={k} xs={12} md={6} lg={4} style={{height:'100%',paddingTop:'1rem',paddingBottom:'1rem'}}>
                        <ProjectCard {...projectData} />
                    </Col>
                    
        ))}
        </Row>
    </Container> 
  )
}

export default ProjectGrid