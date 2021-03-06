import React, {useState} from 'react'
import {FiEye, FiEyeOff} from "react-icons/fi"
import {Col, Form, Button} from "react-bootstrap"

export default () => {

    const [showPassword, changeShowPassword] = useState(false)
    const [showConfirm, changeShowConfirm] = useState(false)

    return (
        <Col>
            <div id="password">
                <h5>Password Settings</h5>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} lg={4} md={6} className="password_div">
                            <Form.Label>Old Password</Form.Label>
                            <Form.Control type={showPassword ? "text" : "password"} placeholder="Enter old password"/>
                            <span onClick={() => changeShowPassword(!showPassword)}>{showPassword ? <FiEyeOff /> : <FiEye />}</span>
                        </Form.Group>
                        <Form.Group as={Col} lg={4} md={6} className="password_div">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type={showConfirm ? "text" : "password"} placeholder="Enter new password"/>
                            <span onClick={() => changeShowConfirm(!showConfirm)}>{showConfirm ? <FiEyeOff /> : <FiEye />}</span>
                        </Form.Group>
                        <Col xs={12}>
                        <a href="/settings">I have forgotten my password</a>
                        </Col>
                       
                        <Button>Change password</Button>
                    </Form.Row>
                </Form>
            </div>
        </Col>
    )
}
