import React, {useState, useEffect} from "react"
import {Container, Row, Col, Form, Button} from "react-bootstrap"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default () => {
    const handleSubmit = e => {
        e.preventDefault();
        window.location = "/dashboard"
    }

    const [state, setState] = useState("00.00")
    const [time, setTime] = useState(60)

    const timer = time => {
        let minute = Math.floor(time / 60)
        let seconds = time % 60

        minute = minute < 10 ? "0" + minute : minute
        seconds = seconds < 10 ? "0" + seconds : seconds
        setTime(time => time - 1)

        setState(minute + " : " + seconds)
    }

     useEffect(() => {
        if (time >= 0) {
            setTimeout(() => {
                timer(time)
            }, 1000)
        }
        else {
            alert("Time is up")
            window.location = "/bvn_verification"
        }
    }, [time])

    return (
        <React.Fragment>
            <Navbar />
            <Container fluid id="bvn">
                <h5 className="text-center">Enter OTP</h5>
                <Row className="justify-content-center">
                    <Col lg={4} md={7} xs={12}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Enter OTP here" />
                                <Form.Text className="text-muted">
                                    Check number for sent OTP
                                </Form.Text>
                            </Form.Group>
                            <Form.Row className="justify-content-end">
                                <Col md={4} xs={5}>
                                    <a href="/">Resend OTP</a>
                                </Col>
                            </Form.Row>
                        
                            <Button type="submit" className="form-control">Confirm OTP</Button>
                        </Form>
                        <div className="mt-5 text-center">
                            <h4 className={time <= 30 ? "text-danger" : "text-success"}>{state}</h4>
                            <p>Time Left</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </React.Fragment>
    )
}