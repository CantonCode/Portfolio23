import React from 'react'
import './ProejctCard.css'
import { Button, Card, Container } from 'react-bootstrap'



// const ProjectCard = (props) =>  {
const ProjectCard = (project: any) => {
  return (
    <Container>
        <Card style={{padding:'0rem'}}>
            <Card.Img src="https://via.placeholder.com/150x75" />

            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
            </Card.Body>
        </Card>
    </Container> 
  )
}

export default ProjectCard
