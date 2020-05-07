import React, {useState} from "react"
import {BsAt} from "react-icons/bs"
import {FiKey, FiEye, FiEyeOff} from "react-icons/fi"
import {Container, Row, Col, Form, Button} from "react-bootstrap" 
import Navbar from "./Navbar"
import Footer from "./Footer"

export default () => {

    const [showPassword, changeShowPassword] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        window.location = "/dashboard"
    }

    return (
        <React.Fragment>
            <Navbar />
            <Container fluid id="login">
                <h5 className="text-center">Welcome back!</h5>
                <Row className="justify-content-center">
                    <Col lg={4} md={7} xs={12}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label><BsAt /> Username / Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter username or email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group id="password_div">
                                <Form.Label><FiKey /> Password</Form.Label>
                                <Form.Control type={showPassword ? "text" : "password"} placeholder="Password" />
                                <span onClick={() => changeShowPassword(!showPassword)}>{showPassword ? <FiEyeOff /> : <FiEye />}</span>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} md={5}>
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group>
                                <Col>
                                    <a href="/login">Forgotten password?</a>
                                </Col>
                            </Form.Row>
                        
                            <Button type="submit" className="form-control">Log In</Button>
                        </Form>
                        <div id="signup_div">
                        <p>Not yet registered? <a href="/signup">Register now</a></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        <Footer />
         </React.Fragment>
    )
}

