import React from 'react'
import {FiShoppingCart} from "react-icons/fi"
import {MdDoneAll} from "react-icons/md"
import {AiOutlineHourglass} from "react-icons/ai"
import {Row, Col} from "react-bootstrap"

export default () => {
    return (
        <Row id="top_dashboard" xs={1}>
            <Col xs={12} > 
            <div id="welcome_banner">
            <h6>Welcome Michael Grace</h6>
            <ul>
                <li className="text-muted">Balance: 10,000 </li>
                <li><a href="http://">fund account</a></li>
                <li><a href="/account">Request Donation</a></li>
            </ul>
            </div>
                
            </Col>
            <Col md={4}>
                <a href="dashboard" id="total">
                    <span>Placed Orders</span>
                    <h1>23</h1>
                    <FiShoppingCart />
                </a>
            </Col>
            <Col md={4}>
                <a href="/dashboard" id="delivered">
                    <span>Delivered Orders</span>
                    <h1>19</h1>
                    <MdDoneAll />
                </a>
            </Col>
            <Col md={4}>
                <a href="/dashboard" id="pending">
                    <span>Pending Orders</span>
                    <h1>4</h1>
                    <AiOutlineHourglass />
                </a>
            </Col>
        </Row>
    )
}
