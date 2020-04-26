import React from "react"
import {Nav, Navbar} from "react-bootstrap"

export default () => {
    return (
        <Navbar sticky="top" expand="md" id="navbar">
            <Navbar.Brand href="/" className="pl-md-5">RELAUNCH</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/" className="px-md-4"> Home </Nav.Link>
                    <Nav.Link href="/about" className="px-md-4"> Donate </Nav.Link>
                    <Nav.Link href="/howitworks" className="px-md-4"> How It Works </Nav.Link>
                    <Nav.Link href="/login" className="px-md-4"> Log in </Nav.Link>
                    <Nav.Link href="/demo" className="px-md-4 text-primary"> Get Started</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}