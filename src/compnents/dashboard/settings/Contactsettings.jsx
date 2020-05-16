import React from 'react'
import {Col, Form, Button} from "react-bootstrap"

export default () => {
    return (
        <Col>
            <div id="contact">
                <h5>Contact Settings</h5>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} md={7} lg={5}>
                            <Form.Label>Home Address</Form.Label>
                            <Form.Control type="text" value="11 Abayomi street, Lawanson, Surulere, Lagos"/>
                        </Form.Group>
                        <Form.Group as={Col} md={5} lg={3}>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" value="09031861100"/>
                        </Form.Group>
                        <span className="text-muted col-12">*Please provide correct information as it would be used for deliveries</span>
                        <Button>Update contact</Button>
                    </Form.Row>
                </Form>
            </div>
        </Col>
    )
}
