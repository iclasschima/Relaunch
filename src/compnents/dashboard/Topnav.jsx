import React from "react"
import {FiMenu, FiMessageSquare} from "react-icons/fi"
import {AiOutlineUser} from "react-icons/ai"
import {BsBell} from "react-icons/bs"
import {Navbar} from "react-bootstrap"

export default ({action, state}) => {

    const PATH = window.location.pathname

    let header

    switch (PATH) {
        case "/dashboard":
            header = "Dashboard"
            break;
        case "/settings":
            header = "Settings"
            break;
        case "/medicals":
            header = "Medicals"
            break;
        case "/account":
            header = "Account"
            break;
        case "/market":
            header = "Market"
            break;
        case "/help":
            header = "Help"
            break;
    
        default:
            break;
    }



    return (
        <Navbar id="topnav" fixed="top">
            <Navbar.Brand id="nav_div">
                <FiMenu onClick={() => action(!state)}  className="d-block d-lg-none" />
                {header}
            </Navbar.Brand>
                
            <div id="nav_item" className="ml-auto">
                <a href="/chats" id="chat"><BsBell /></a>
                <a href="/chats" id="chat"><FiMessageSquare /></a>
                <a href="/settings"><AiOutlineUser /> </a>
            </div>
           
        </Navbar>
    )
}