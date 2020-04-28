import React from "react"
import {FiMapPin, FiPhoneCall, FiMail} from "react-icons/fi"
import {Container, Row, Col} from "react-bootstrap"

export default () => (
    <Container fluid id="footer">
        <Row sm="2" md="4" xs="1">
            <Col>
                <h5>RELAUNCH</h5>
                <p>Born in the midst of a global pandemic; we believe we have a part to play in this moment of uncertainty. </p>
            </Col>
            <Col>
                <h5>CONTACT US</h5>
                <ul id="contact_list">
                    <li><FiMapPin /> 312 Herbert Macualay way, Sabo Yaba, Lagos, Nigeria.</li>
                    <li><FiPhoneCall id="call"/> 0903 186 1100, 0708 890 5933</li>
                    <li><FiMail id="mail"/> info@relaunch.com</li>
                </ul>
            </Col>
            <Col>
                <h5>QUICK LINKS</h5>
                <ul className="list">
                    <li><a href="/"> Donate </a></li>
                    <li><a href="/howitworks"> How It Works </a></li>
                    <li><a href="/faqs"> FAQs </a></li>
                </ul>
            </Col>
            <Col>
                <h5>FOLLOW US</h5>
                <ul className="list">
                    <li><a href="/"> Facebook </a></li>
                    <li><a href="/"> Twitter </a></li>
                    <li><a href="/"> Instagram </a></li>
                </ul>
            </Col>
            
            
        </Row>
        <div id="bottom_footer">
            <p>Copyright &copy; {new Date().getFullYear()} ReLaunch. All rights reserved.</p>
        </div>
    </Container>
)