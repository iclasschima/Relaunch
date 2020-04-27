import React from "react"
import {Container, Row, Col, Form, Button} from "react-bootstrap" 

export default () => (
    <Container fluid id="login">
        <h5 className="text-center">Log In</h5>
        <Row className="justify-content-center">
            <Col lg={4} md={7} xs={12}>
                <Form>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} md={5}>
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Col>
                            <a href="">Forgotten password?</a>
                        </Col>
                    </Form.Row>
                   
                    <Button type="submit" className="form-control">Log In</Button>
                </Form>
                <div id="signup_div">
                   <p>Not yet registered? <a href="signup">Register now</a></p>
                </div>
            </Col>
        </Row>
    </Container>
)