import React from "react"
import {FiMenu, FiMessageSquare} from "react-icons/fi"
import {AiOutlineUser} from "react-icons/ai"
import {BsBell} from "react-icons/bs"
import { RiUser6Line} from "react-icons/ri"
import {Navbar, Nav, Col} from "react-bootstrap"

export default ({action, state}) => {

    return (
        <Navbar id="topnav" fixed="top">
            <Navbar.Brand id="nav_div">
                <FiMenu onClick={() => action(!state)}  className="d-block d-lg-none" />
                Dashboard
            </Navbar.Brand>
                
            <div id="nav_item" className="ml-auto">
                <a href="/chats" id="chat"><BsBell /></a>
                <a href="/chats" id="chat"><FiMessageSquare /></a>
                <a href="http://"><AiOutlineUser /></a>
            </div>
           
        </Navbar>
    )
}