import React from "react"
import {Container, Row, Col, Button} from "react-bootstrap"

export default () => (
    <Container fluid id="giving">
        <Row md={2} xs={1}>
            <Col className="text-center">
                <h4>Together, we can beat this virus</h4>
                <p>"Give, but give until it hurts." ― <i>Mother Teresa</i> </p>
            </Col>
            <Col>
                <Button>Give Today</Button>
            </Col>
        </Row>
       
    </Container>
)