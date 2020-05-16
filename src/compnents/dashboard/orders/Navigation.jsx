import React from 'react'
import {Col, Form} from "react-bootstrap"

export default () => {
    return (
        <React.Fragment>
        <Col className="d-none d-md-block">
            <div id="orders_navigation">
                <a href="/market">All Orders</a>
                <a href="/market">Pending Orders</a>
                <a href="/market">Delivered Orders</a>
            </div>
        </Col>
        <Col className="d-block d-md-none">
        <h5>Select results to show: </h5>
            <Form.Control as="select">
                <option value="all">All Orders</option>
                <option value="pending">Pending Orders</option>
                <option value="delivered">Delivered Orders</option>
            </Form.Control>
        </Col>
        </React.Fragment>
    )
}
