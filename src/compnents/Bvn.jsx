import React from "react"
import {Container, Row, Col, Form, Button} from "react-bootstrap"
import Navbar from "./Navbar"
import Footer from "./Footer"


export default () => {

    const handleSubmit = e => {
        e.preventDefault();

        window.location = "/otp"
    }

    return (
        <React.Fragment>
            <Navbar />
            <Container fluid id="bvn">
                <h5 className="text-center">Enter BVN for Identification</h5>
                <Row className="justify-content-center">
                    <Col lg={4} md={7} xs={12}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Enter BVN" />
                                <Form.Text className="text-muted">
                                    OTP would be sent to number associated this BVN
                                </Form.Text>
                            </Form.Group>
                            <Button type="submit" className="form-control">Send OTP</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer />              
        </React.Fragment>
    )
}