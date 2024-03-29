import React, { useState } from 'react'
import './JobContainer.css'
import { Button, Card, Col, Container, Nav, Row, Tab, TabContainer, Tabs } from 'react-bootstrap'
import { generateId } from '../../../helpers/generateIDHelper'
import JobDetails from './JobDetails/JobDetails';
import { Centos } from 'grommet-icons';

const defaultVal = [
    {
        id: generateId(),
        company: "3VA Studios",
        role: "Full-Stack Software Developer",
        date: "August 2023 - Current",
        tasks: [ "Webflow API Integration",
          "Creating MVP products for clients and bringing their idea to life from paper to the web",
          "React",
          "NodeJS and MongoDB database implementations",
            "Google Cloud, Git workflows, Zapier and CI/CD integrations"],
      },
    {
      id: generateId(),
      company: "JRI America",
      role: "Junior Software Engineer",
      date: "May 2022 - August 2023",
    tasks: [ "Responsible for contribiuting to the software development life cycle(SDLC) for various software projects.Primary focus on development, testing, deployment of critical middleware interfaces. Providing secure and reliable communication between banking applications.",
        "Microsoft Power Automate, IBM Tools, Tivoli Workload Scheduler(TWS), Managed File Transfers(MFT),XML, WebSphere MQ, Linux, SFTP",],
    },
    {
      id: generateId(),
      company: "Dairymaster",
      role: "Graduate Software Engineer",
      date: "May 2021 - May 2022",
      tasks: [ "Developed a web application using Angular and Bootstrap",
        "Building, testing and debugging RESTful APIs with ASP.NET ",
        "Interactive and complex data viisualisation with use of Highcharts JS",
    "Use of Zeplin to work with our UX designer to create well-structured web pages."],
    },
   

  ];


// const ProjectCard = (props) =>  {
function JobContainer(){
    const [jobs, setJob] = useState(defaultVal);

  return (
    <Container id='experience' style={{height:'100%',justifyItems:'center',alignItems:'center',display:'flex',backgroundColor:'#10101a'}} >
        
        <TabContainer defaultActiveKey="0">
            
            <Row xs={12} sm={12} md={8} style={{maxWidth:'100%',justifyContent:'center',overflow:'auto'}}>
                <Col sm={{span:7,offset:2}} style={{display:'flex',textAlign:'center',alignItems:'center'}}>
                            <h1 style={{color:'white'}}>Experience</h1>
                            <hr style={{color:'white', width:'inherit',marginLeft:'3rem'}}/>
                </Col>
                <Col sm={3}>
                </Col>
                
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