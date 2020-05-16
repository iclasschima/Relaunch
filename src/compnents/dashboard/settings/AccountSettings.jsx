import React from 'react'
import {Col, Form} from "react-bootstrap"

export default () => {
    return (
        <Col>
        <div id="account">
            <h5>Account Settings</h5>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} lg={4} md={6}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" value="iClass" disabled="disabled"/>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={6}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" value="Chima" disabled="disabled"/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} lg={4} md={6}>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="text" value="iclasschima@gmail.com" disabled="disabled"/>
                    </Form.Group>
                    <Form.Group as={Col} lg={4} md={6}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value="iclasschima" disabled="disabled"/>
                    </Form.Group>
                    <span className="text-muted col-12">*You are not allowed to edit these information</span>
                </Form.Row>
            </Form>
        </div>
    </Col>

    )
}
