import React from 'react'
import './JobContainer.css'
import { Button, Card, Col, Container, Nav, Row, Tab, TabContainer, Tabs } from 'react-bootstrap'



// const ProjectCard = (props) =>  {
function JobContainer(){
  return (
    <Container >
        <TabContainer defaultActiveKey="first" >
            <Row xs={12} sm={12} md={8} style={{maxWidth:'100%',justifyContent:'center'}}>
                <Col sm={{ span: 2, offset: 0 }}>
                    <Nav className="flex-md-column" style={{}}>
                    <Nav.Item className='nav-items'>
                        <Nav.Link className='nav-links' eventKey="first">JRI America</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='nav-items'>
                        <Nav.Link className='nav-links' eventKey="second">Dairymaster</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='nav-items'>
                        <Nav.Link className='nav-links' eventKey="third">WP Engine</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={{ span: 6, offset: 0 }}>
                    <Tab.Content style={{color:'white'}}>
                        <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                        <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
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