import React, {useState} from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import {FiEye, FiEyeOff, FiKey} from "react-icons/fi"
import {RiHome2Line, RiUser6Line} from "react-icons/ri"
import {BsAt} from "react-icons/bs"
import {Container, Row, Form, Col, Button} from "react-bootstrap"

export default () => {

    const [showPassword, changeShowPassword] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        window.location = "/bvn_verification"
        console.log("Submitted")
    }
    return (
        <React.Fragment>
            <Navbar />
            <Container fluid id="signup">
                <h5 className="text-center">Join Us Today!</h5>
                <Row className="justify-content-center">
                    <Col lg={5} md={7} xs={12}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label><BsAt />Email address</Form.Label>
                                <Form.Control type="email" placeholder="example@example.com" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><RiHome2Line />Home address</Form.Label>
                                <Form.Control type="text" placeholder="Enter home address" />
                                <Form.Text className="text-muted">
                                This is for deliveries
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><RiUser6Line />Username</Form.Label>
                                <Form.Control type="text" placeholder="username123" />
                            </Form.Group>
                            <Form.Group id="password_div">
                                <Form.Label><FiKey /> Password</Form.Label>
                                <Form.Control type={showPassword ? "text" : "password"} placeholder="Password" />
                                <span onClick={() => changeShowPassword(!showPassword)}>{showPassword ? <FiEyeOff /> : <FiEye />}</span>
                            </Form.Group>
                            <Button type="submit" className="form-control">Sign up</Button>
                        </Form>
                        <div id="signup_div">
                        <p>Already a member? <a href="login">Login now</a></p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />            
        </React.Fragment>
    )
}