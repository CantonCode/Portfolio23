import React from 'react'
import { Button, Card, Col, Container, Row, Tab } from 'react-bootstrap'



function JobDetails({job, k}:any) {
  return (
    <Tab.Pane key={job.id} eventKey={k}>
        <Container>
            <Row style={{textAlign:'start'}}>
                <Col xs={12}>
                    {job.role}
                </Col>
                <Col xs={12}>
                    {job.date}
                </Col>
                <Col xs={12}>
                    <ul>
                        {job.tasks.map((task:any) => (
                            <li>{task}</li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    </Tab.Pane> 
  )
}

export default JobDetails
