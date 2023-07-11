import React from 'react'
import { Button, Card, Container, Modal } from 'react-bootstrap'



// const ProjectCard = (props) =>  {
const ProjectModal = (project: any) => {
  return (
    <Container>
        <Modal
            {...project}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        ></Modal>
    </Container> 
  )
}

export default ProjectModal
