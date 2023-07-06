import React from 'react'
import './ProjectGrid.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
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


// const ProjectCard = (props) =>  {
function ProjectGrid(){
  return (
    <Container>
        <Container style={{display:'flex',paddingBottom:'2.5rem'}}>
                    <Col sm={{span:7,offset:2}} style={{display:'flex',textAlign:'center',alignItems:'center'}}>
                        <h1 style={{color:'white'}}>Projects</h1>
                        <hr style={{color:'white', width:'inherit',marginLeft:'3rem'}}/>
                    </Col>
        </Container>
        <Row>
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