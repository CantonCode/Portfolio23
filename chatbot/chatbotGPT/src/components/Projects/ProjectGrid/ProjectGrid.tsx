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