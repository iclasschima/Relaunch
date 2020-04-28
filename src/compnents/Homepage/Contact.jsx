import React from "react"
import {Container, Row, Col, Form, Button} from "react-bootstrap"

export default () => (
    <Container fluid id="contact">
         <h5 className="text-center">Say Hi To Us!</h5>
        <Row className="justify-content-center">
            <Col lg={5} md={7} xs={12}>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Enter subject" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" placeholder="Message" />
                    </Form.Group>
                        <Button className="form-control" type="submit">Send Message</Button>
                </Form>
            </Col>
        </Row>
    </Container>
)