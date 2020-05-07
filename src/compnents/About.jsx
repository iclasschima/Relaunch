import React from "react"
import {GiPalmTree, GiScales} from "react-icons/gi"
import {FiHeart, FiAnchor, FiAward, FiCheck} from "react-icons/fi"
import {Container, Row, Col} from "react-bootstrap"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default () => (
    <React.Fragment>
        <Navbar />

    <Container fluid id="about">
        <Row xs={1}>
            <Col>
                <h5>We Are ReLaunch</h5>
                <p>Born in the midst of a global pandemic; we believe we have a part to play in this moment of uncertainty. 
                    The framework behind ReLaunch is that of empathy, community support and essential business resuscitation</p>
            </Col>
            <Col>
                <h5>Here Is Our Mission</h5>
                <p>To create a path of prosperity, Self-reliance and self sufficiency to our people, 
                    our communities, our states and Nation through a radical innovative journey map guided by a design thinking compass.</p>
            </Col>
            <Col>
                <h5>Our Vision</h5>
                <p>Our vision is to create a responsive ecosystem that will respond to our present challenges and realities, 
                    help entities crippled by this unprecedented realities find their path back to growth and Sustainability through an innovative driven approach.</p>
            </Col>
            <Col>
                <h5> Core Values</h5>
                <Row md={3} xs={1} id="core"> 
                    <Col>
                        <h6><GiPalmTree /> Growth</h6>
                        <p>To create a path of prosperity for our clients, partners, communities and ourselves.</p>
                    </Col>
                    <Col>
                        <h6><FiHeart /> Empathy</h6>
                        <p>We design and build with love; placing our clients and consumers at the centre of every phase of development.</p>
                    </Col>
                    <Col>
                        <h6><FiAnchor /> Integrity</h6>
                        <p>To demonstrate high level of leadership founded on the principle of honesty.</p>
                    </Col>
                    <Col>
                        
                        <h6><FiCheck /> Accountability</h6>
                        <p>To be accountable to ourselves, our clients, our partners and our community.</p>
                    </Col>
                    <Col>
                        
                        <h6><FiAward /> Hardwork</h6>
                        <p>To give in all our best at whatever task that is given or chosen.</p>
                    </Col>
                    <Col>
                        <h6><GiScales /> Transperency</h6>
                        <p>To inculcate and live the virtue of openness as we sojourn on this path.</p>
                    </Col>
                </Row>
            </Col>
                
        </Row>
    </Container>
    <Footer />
    </React.Fragment>
)