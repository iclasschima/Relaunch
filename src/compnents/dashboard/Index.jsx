import React from 'react'
import {FiShoppingCart} from "react-icons/fi"
import {MdDoneAll} from "react-icons/md"
import {AiOutlineHourglass} from "react-icons/ai"
import {Row, Col} from "react-bootstrap"

export default () => {
    return (
        <React.Fragment>
            <Row id="top_dashboard" xs={1}>
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
            <Row>
                <Col>
                    <div>
                        <h5>Most Recent Activities</h5>
                    </div>
                </Col>
                <Col>
                    <div id="vendors">
                        <h5>Top Vendors</h5>
                        <ul>
                            <li><a href="/dashboard">Shopmania</a></li>
                            <li><a href="/dashboard">JumiaFoods</a></li>
                            <li><a href="/dashboard">OurMarket</a></li>
                            <li><a href="/dashboard"> </a></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}
