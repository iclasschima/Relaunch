import React from "react"
import {BsAt, BsPencilSquare} from "react-icons/bs"
import {GrPin} from "react-icons/gr"
import {RiUser6Line} from "react-icons/ri"
import {Container, Row, Col, Form, Button} from "react-bootstrap"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default () => (
    <React.Fragment>
        <Navbar />
        <Container fluid id="contact">
            <h5 className="text-center">Say Hi To Us!</h5>
            <Row className="justify-content-center">
                <Col lg={5} md={7} xs={12}>
                    <Form>
                        <Form.Group>
                            <Form.Label><RiUser6Line /> Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label><BsAt />Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label><GrPin /> Subject</Form.Label>
                            <Form.Control type="text" placeholder="Enter subject" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label><BsPencilSquare /> Message</Form.Label>
                            <Form.Control as="textarea" placeholder="Message" />
                        </Form.Group>
                            <Button className="form-control" type="submit">Send Message</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        <Footer />
    </React.Fragment>
)