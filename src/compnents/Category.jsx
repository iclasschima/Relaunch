import React from "react"
import shopping from "../assets/shop.svg"
import doctors from "../assets/med.svg"
import savings from "../assets/Savings2.svg"
import {Container, Row, Col, Button} from "react-bootstrap"

export default () => (
    <Container fluid id="category" className="text-center">
        <h4>Helping the nation fight against covid-19</h4>
        <Row md={3} xs={1}>
            <Col>
                <div>
                    <img src={savings} id="savings" alt="savings"/>
                    <h6>Crowd Fund & Donations</h6>
                    <p>No one has ever become poor by giving. Help another by donating, no matter how small.</p>
                    <Button>Donate now</Button>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={shopping} alt="shop"/>
                    <h6>Shop Online</h6>
                    <p>Obey lockdown order. Shop online and get it right at your doorstep. No need to leave your home to prevent contraction.</p>
                    <Button>Shop now</Button>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={doctors} id="savings" alt="medical attention"/>
                    <h6>Medical Aid</h6>
                    <p>Get medicines, medical attention and counselling without leaving your house.</p>
                    <Button>Get now</Button>
                </div>
            </Col>
        </Row>
    </Container>
)