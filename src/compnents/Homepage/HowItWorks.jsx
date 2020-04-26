import React from "react"
import {FiShoppingCart} from "react-icons/fi"
import {GiReceiveMoney, GiStethoscope, GiPayMoney} from "react-icons/gi"
import {Container, Row, Col} from "react-bootstrap"

export default () => (
    <Container fluid id="how_it_works">
        <h4 className="text-center">How it works</h4>
        <Row xs={1}>
            <Col className="hows">
                <h5><GiPayMoney id="fund"/>Donations</h5>
                <Row md={3} xs={1}>
                    <Col>
                        <span>01</span>
                        <p>If you decide to bless someone today, click on the <b>Donate</b> button.</p>
                    </Col>
                    <Col>
                        <span>02</span>
                        <p>You will be redirected to a page, provide details such as amount and card details.</p>
                    </Col>
                    <Col>
                        <span>03</span>
                        <p>Click on the <b>pay</b> button!</p>
                    </Col>
                </Row>
            </Col>
            <Col className="hows">
                <h5><GiReceiveMoney id="fund"/>Funds Disbursement & Funding</h5>
                <Row md={3} xs={1}>
                    <Col>
                        <span>01</span>
                        <p>Register with us, you will be requested to provide your BVN as part of our verification process.</p>
                    </Col>
                    <Col>
                        <span>02</span>
                        <p>Once registered, you can either fund your account or apply for funds.</p>
                    </Col>
                    <Col>
                        <span>03</span>
                        <p>Your account get credited and you can start shopping. Enjoy!</p>
                    </Col>
                </Row>
            </Col>
            <Col className="hows">
                <h5><FiShoppingCart />Shopping & Delivery</h5>
                <Row md={3} xs={1}>
                    <Col>
                        <span>01</span>
                        <p>Select any store of your choice provided on the platform.</p>
                    </Col>
                    <Col>
                        <span>02</span>
                        <p>Place your orders and checkout when done, we will take care of the rest for you.</p>
                    </Col>
                    <Col>
                        <span>03</span>
                        <p>Make sure to provide detailed home address with accurate landmarks to make delivery easy. Happy shopping!</p>
                    </Col>
                </Row>
            </Col>
            <Col className="hows">
                <h5><GiStethoscope id="med"/>Medical Consultation</h5>
                <Row md={3} xs={1}>
                    <Col>
                        <span>01</span>
                        <p>Select one of the medical experts provided on the platform.</p>
                    </Col>
                    <Col>
                        <span>02</span>
                        <p>Through our chat channel, consult experts and report needs.</p>
                    </Col>
                    <Col>
                        <span>03</span>
                        <p>Be detailed and honest about health issues. Stay healthy!</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
)