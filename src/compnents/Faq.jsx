import React from "react"
import Navbar from "./Navbar";
import Footer from "./Footer"
import {Container, Row, Accordion, Card} from "react-bootstrap"

export default() => (
    <React.Fragment>   
        <Navbar /> 
         <Container fluid id="faq">
            <h5 className="text-center">Frequently Asked Questions</h5>
            <Row xs={1} className="justify-content-center mt-4">
                <Accordion defaultActiveKey="0" className="col-md-8">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        <span>Q</span> Why do I need to provide my BVN?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>We require that you provide your BVN for verification purpose.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        <span>Q</span> Who is eligible to access fund?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Anyone is eligible as long as you provide needed information.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                        <span>Q</span> How much do I get when I request for funds?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>Amount per head is dependent on the inflow of donations we get.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                        <span>Q</span> How much can I donate?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body>No amount is too small, no amount is too much.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                        <span>Q</span> How does this work?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                        <Card.Body>Please click <a href="/howitworks">here</a> to see how it works.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="5">
                        <span>Q</span> What if I don’t need funds but I want to access other services?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                        <Card.Body>You can fund your account with us to make transactions.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="6">
                        <span>Q</span> Will the money be disbursed into my bank account?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="6">
                        <Card.Body>No. The funds you will get is not withdrawable. You will be able to see your balance on your profile and make transactions with it directly from our platform.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="7">
                        <span>Q</span> How long will it take for my orders to be delivered to me?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="7">
                        <Card.Body>You will receive your order within 2-4 days.</Card.Body>
                        </Accordion.Collapse>
                    </Card> 
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="8">
                        <span>Q</span> How can I contact ReLaunch or ask a question?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="8">
                        <Card.Body>Click <a href="/contact">here</a> to contact us now.</Card.Body>
                        </Accordion.Collapse>
                    </Card>  
                </Accordion>
            </Row>
        </Container>
        <Footer />
    </React.Fragment>
   
)