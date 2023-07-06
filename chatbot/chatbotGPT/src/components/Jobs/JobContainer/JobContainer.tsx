import React, { useState } from 'react'
import './JobContainer.css'
import { Button, Card, Col, Container, Nav, Row, Tab, TabContainer, Tabs } from 'react-bootstrap'
import { generateId } from '../../../helpers/generateIDHelper'
import JobDetails from './JobDetails/JobDetails';
import { Centos } from 'grommet-icons';

const defaultVal = [
    {
      id: generateId(),
      company: "JRI America",
      role: "Junior Software Engineer",
      date: "May 2022 - August 2023",
      tasks: [ "Developed a web application using React, Redux, and Typescript to display data from a REST API",
        "Created a REST API using Node.js and Express to serve data from a MySQL database",
        "Implemented a CI/CD pipeline using Jenkins to automate the deployment of the web application"],

    },
    {
      id: generateId(),
      company: "Dairymaster",
      role: "Graduate Software Engineer",
      date: "May 2021 - May 2022",
      tasks: [ "Developed a web application using React, Redux, and Typescript to display data from a REST API",
        "Created a REST API using Node.js and Express to serve data from a MySQL database",
        "Implemented a CI/CD pipeline using Jenkins to automate the deployment of the web application"],
    },
  ];


// const ProjectCard = (props) =>  {
function JobContainer(){
    const [jobs, setJob] = useState(defaultVal);

  return (
    <Container style={{height:'20rem',justifyItems:'center',marginTop:'5rem',marginBottom:'5rem',}} >
        <Container style={{display:'flex',paddingBottom:'2.5rem'}}>
                    <Col sm={{span:7,offset:2}} style={{display:'flex',textAlign:'center',alignItems:'center'}}>
                        <h1 style={{color:'white'}}>Experience</h1>
                        <hr style={{color:'white', width:'inherit',marginLeft:'3rem'}}/>
                    </Col>
                </Container>
        
        <TabContainer defaultActiveKey="0">
            
            <Row xs={12} sm={12} md={8} style={{maxWidth:'100%',justifyContent:'center',height:'100%',overflow:'auto'}}>
                
                
                <Col sm={{ span: 2, offset: 0 }} style={{}}>
                    <Nav className="flex-md-column" style={{alignItems:"start"}}>
                        {jobs.map((job, k) => (
                            <Nav.Item key={job.id} className='nav-items'>
                                <Nav.Link className='nav-links' eventKey={k}>{job.company}</Nav.Link>
                            </Nav.Item>
                        ))
                        }
                    </Nav>
                </Col>
                <Col sm={{ span: 6, offset: 0 }} >
                    <Tab.Content style={{color:'white'}}>
                        {jobs.map((job, k) => (
                            <JobDetails job={job} k={k}/>
                        ))}
                    </Tab.Content>
                </Col>
                
            </Row>
        </TabContainer>

        
    </Container> 
  )
}

export default JobContainer



// <Tab.Container id="left-tabs-example" defaultActiveKey="first">
// <Row>
//   <Col sm={3}>
//     <Nav variant="pills" className="flex-column">
//       <Nav.Item>
//         <Nav.Link eventKey="first">Tab 1</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="second">Tab 2</Nav.Link>
//       </Nav.Item>
//     </Nav>
//   </Col>
//   <Col sm={9}>
//     <Tab.Content>
//       <Tab.Pane eventKey="first">First tab content</Tab.Pane>
//       <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
//     </Tab.Content>
//   </Col>
// </Row>
// </Tab.Container>
// );