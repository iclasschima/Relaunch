import React from 'react'
import {Row, Col} from "react-bootstrap"

export default () => {
    return (
        <Row xs={1}>
            <Col md={8}>
            
            </Col>
            <Col md={4}>
                <div id="recent_activity">
                    <h5>Recent Activities</h5>
                    <Row xs={1}>
                        <Col className="activity shade">
                            <h6>Placed Order</h6>
                            <span>Shopmania.com.ng</span>
                            <i>Today</i>
                        </Col>
                        <Col className="activity">
                            <h6>Account Update</h6>
                            <span>Donation recieved</span>
                            <i>7 May 20</i>
                        </Col>
                        <Col className="activity shade">
                            <h6>Items Delivery</h6>
                            <span>Delivered Successfully</span>
                            <i>1 May 20</i>
                        </Col>
                        <Col className="activity">
                            <h6>Account Update</h6>
                            <span>Donation recieved</span>
                            <i>29 Apr 20</i>
                        </Col>
                        <Col className="activity shade">
                            <h6>Items Delivery</h6>
                            <span>Delivered Successfully</span>
                            <i>24 Apr 20</i>
                        </Col>
                        <a href="/dashboard" className="col btn">
                            View more
                        </a>
                    </Row>
                </div>
            </Col>
            <Col>
               
            </Col>
        </Row>
    )
}
