import React from 'react'
import './ProjectGrid.css'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import ProjectCard from '../ProjectCard/ProjectCard'
import { useState, useEffect } from 'react'
import { Project } from '../../../models/project.model'

const projectData = [
    {
        "name": "Surfboard Rental App",
        "image": "public/projects/SurfRental.png",
        "description":"This app was created to provide a central place for the UL Surf Club ( http://www.ulsurf.com/ ) gear rental system. Currently this app provides a gear rental functionality along with an in app messaging system for all surf club related items. This app can easily be expanded upon to provide a blog for all related surf club events and activities. This app also has the potential to be modified and not only cater for the surf club but also many other clubs among the university e.g. kayak club where large gear inventories also come into play.I was the Team Leader for this project. I helped to break down the what exactly we wanted and the apps functionality. I then ensured that each member knew how their assigned feature was to be impleneted and helped when they had questions and issues. I also took responsibility of the user authentication and database initlization along with creating an in-app messaging service.",
        "technologies": ["Reactjs","Firebase","Bootstrap","Node.js","MongoDB","Express","Heroku"],
        "github":"https://github.com/CantonCode/ULsurf-Rental-Application#surf-club-app"
    },
    {
        "name": "Elderly Dating Site",
        "image": "public/projects/DatingSite.png",
        "description":"For this project we were split into groups of 4. We were given the task of designing a full stack dating website. We decieded to create a site that was for people over the age of 60.I was in charge of connecting the database along with configuring user authenication using Google Firebase. I also helped debug some issues that the other members were having.The user can register an account on the dating website and view other users that meet their criteria (age, gender, county and interests) or else users with similar interests are automatically suggested for them. If they see a user they like, they can invite them to connect with them and then once the connection is made the messaging featue becomes available.",
        "technologies": ["Reactjs","Firebase","Bootstrap","Node.js"],
        "github":"https://github.com/CantonCode/CS4116-Dating-Website-Angular"
    },
    {
        "name": "Covid 19 - Data Visualization",
        "image": "public/projects/Covid19.jpg",
        "description":"create place holder text for description",
        "technologies": ["Reactjs","Firebase","Bootstrap","Node.js"]
    },
    {
        "name": "LocalBids - MVP",
        "image": "public/projects/3VA.png",
        "technologies": ["React","Firebase","Bootstrap","Node.js"]
        
    },

]

const url = 'http://localhost:5000/projects/';


function ProjectGrid(){
    const [projects, setProjects] = useState<Project[]>([]);

    const fetchUserData = () => {
        fetch(url+'getAll')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setProjects(data)
        })
    }

    useEffect(() => {
        fetchUserData()
    }, [])

  return (
    <Container id='projects' style={{alignItems:'center',display:'grid',justifyContent:'center',marginTop:'5rem',backgroundColor:'#10101a'}}>

        <Row>
            
            <Col sm={{span:7,offset:2}} style={{display:'flex',textAlign:'center',alignItems:'center'}}>
                            <h1 style={{color:'white'}}>Projects</h1>
                            <hr style={{color:'white', width:'inherit',marginLeft:'3rem'}}/>
            </Col>

        {projects.map((proj, k) => (
                    <Col key={k} xs={12} md={6} lg={4} style={{height:'100%',paddingTop:'1rem',paddingBottom:'1rem'}}>
                        <ProjectCard {...proj}/>
                    </Col>                    
        ))}
        </Row>
    </Container> 
  )
}

export default ProjectGrid