import React from "react"
import {FiShoppingCart} from "react-icons/fi"
import {BsQuestionCircle} from "react-icons/bs"
import {GiReceiveMoney, GiStethoscope, GiPayMoney} from "react-icons/gi"
import {Container, Row, Col} from "react-bootstrap"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default () => (
    <React.Fragment>
        <Navbar />
        <Container fluid id="how_it_works">
            <h4 className="text-center">How it works</h4>
            <Row xs={1}>
                <Col className="hows">
                    <h5><GiPayMoney id="fund"/>Donations</h5>
                    <Row md={3} xs={1}>
                        <Col className="row">
                            <span className="col-3">01</span>
                            <p className="col-9">If you decide to bless someone today, click on the <b>Donate</b> button.</p>
                        </Col>
                        <Col className="row">
                            <span className="col-3">02</span>
                            <p className="col-9">You will be redirected to a page, provide details such as amount and card details.</p>
                        </Col>
                        <Col className="row">
                            <span className="col-3">03</span>
                            <p className="col-9">Click on the <b>pay</b> button. Thank you!</p>
                        </Col>
                    </Row>
                </Col>
                <Col className="hows">
                    <h5><GiReceiveMoney id="fund"/>Funds Disbursement & Funding</h5>
                    <Row md={3} xs={1}>
                        <Col className="row">
                            <span className="col-3">01</span>
                            <p className="col-9">Register with us, you will be requested to provide your BVN as part of our verification process.</p>
                        </Col>
                        <Col className="row">
                            <span className="col-3">02</span>
                            <p className="col-9">Once registered, you can either fund your account or apply for funds.</p>
                        </Col>
                        <Col className="row">
                            <span className="col-3">03</span>
                            <p className="col-9">Your account get credited and you can start shopping. Enjoy!</p>
                        </Col>
                    </Row>
                </Col>
                <Col className="hows">
                    <h5><FiShoppingCart />Shopping & Delivery</h5>
                    <Row md={3} xs={1}>
                        <Col className="row">
                            <span className="col-3">01</span>
                            <p className="col-9">Select any store of your choice provided on the platform.</p>
                        </Col>
                        <Col className="row">
                            <span className="col-3">02</span>
                            <p className="col-9">Place your orders and checkout when done, we will take care of the rest for you.</p>
                        </Col>
                        <Col className="row">
                            <span className="col-3">03</span>
                            <p className="col-9">Make sure to provide detailed home address with accurate landmarks to make delivery easy. Happy shopping!</p>
                        </Col>
                    </Row>
                </Col>
                <Col className="hows">
                    <h5><GiStethoscope id="med"/>Medical Consultation</h5>
                    <Row md={3} xs={1}>
                        <Col className="row">
                            <span className="col-3">01</span>
                            <p className="col-9">Select one of the medical experts provided on the platform.</p>
                        </Col>
                        <Col className="row">
                            <span className="col-3">02</span>
                            <p className="col-9">Through our chat channel, consult experts and report needs.</p>
                        </Col>
                        <Col className="row">
                            <span className="col-3">03</span>
                            <p className="col-9">Be detailed and honest about health issues. Stay healthy!</p>
                        </Col>
                    </Row>
                </Col>
                <Col id="faq_link">
                    <a href="/faqs"><BsQuestionCircle /> See Frequently Asked Questions</a>
                </Col>
            </Row>
        </Container>
        <Footer />
    </React.Fragment>
)