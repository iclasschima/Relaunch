import React from "react"
import {NavLink} from "react-router-dom"
import {Nav, Navbar} from "react-bootstrap"

export default () => {
    return (
        <Navbar sticky="top" expand="lg" id="navbar">
            <Navbar.Brand href="/" className="pl-md-5">ReLaunch</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink to="/" className="nav-link px-md-4"> Home </NavLink>
                    <NavLink to="/about" className="nav-link px-md-4"> About Us </NavLink>
                    <NavLink to="/contact" className="nav-link px-md-4"> Contact Us </NavLink>
                    <NavLink to="/about" className="nav-link px-md-4"> Donate </NavLink>
                    <NavLink to="/howitworks" className="nav-link px-md-4"> How It Works </NavLink>
                    <NavLink to="/signup" className="nav-link px-md-4 text-primary"> Get Started</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}