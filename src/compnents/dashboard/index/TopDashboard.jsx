import React from 'react'
import {FiShoppingCart} from "react-icons/fi"
import {MdDoneAll} from "react-icons/md"
import {AiOutlineHourglass} from "react-icons/ai"
import {Row, Col} from "react-bootstrap"

export default () => {
    return (
        <Row id="top_dashboard" xs={1} md={3}>
        <Col>
            <a href="dashboard" id="total">
                <span>Placed Orders</span>
                <h1>23</h1>
                <FiShoppingCart />
            </a>
        </Col>
        <Col>
            <a href="/dashboard" id="delivered">
                <span>Delivered Orders</span>
                <h1>19</h1>
                <MdDoneAll />
            </a>
        </Col>
        <Col>
            <a href="/dashboard" id="pending">
                <span>Pending Orders</span>
                <h1>4</h1>
                <AiOutlineHourglass />
            </a>
        </Col>
    </Row>
    )
}
