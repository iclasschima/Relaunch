import React from "react"
import {FiMenu} from "react-icons/fi"
import {Navbar, Row, Col} from "react-bootstrap"

export default ({action, state}) => {

    return (
        <Navbar id="topnav" fixed="top">
            <Row id="nav_div" xs={1}>
                <Col id="toggler">
                    <p><FiMenu onClick={() => action(!state)}/>Dashboard</p>
                </Col>
            </Row>
           
        </Navbar>
    )
}