import React from "react"
import {Link} from "react-router-dom"
import {RiDashboardLine} from "react-icons/ri"  
import {GrMoney} from "react-icons/gr"
import {IoMdHelpCircleOutline, IoMdClose} from "react-icons/io"
import {FiShoppingCart, FiSettings,FiMessageSquare } from "react-icons/fi"
import {MdPowerSettingsNew} from "react-icons/md"

export default ({state, action}) => {

    const PATH = window.location.pathname

    return (
        <div id="sidenav" className={state ? "show" : ""}>
            <h5>ReLaunch</h5>
           <ul>
               <li className={PATH === "/dashboard" ? "active" : ""}><Link to="/dashboard"><RiDashboardLine /> Dashboard</Link></li>
               <li className={PATH === "/account" ? "active" : ""}><Link to="/account"><GrMoney /> Account</Link></li>
               <li className={PATH === "/orders" ? "active" : ""}><Link to="/orders"><FiShoppingCart /> Orders</Link></li>
               <li className={PATH === "/chats" ? "active" : ""}><Link to="/chats"><FiMessageSquare /> Chats</Link></li>
               <li className={PATH === "/settings" ? "active" : ""}><Link to="/settings"><FiSettings /> Settings</Link></li>
               <li className={PATH === "/help" ? "active" : ""}><Link to="/help"><IoMdHelpCircleOutline /> Help</Link></li>
               <li className={PATH === "/logout" ? "active" : ""}><Link to="logout"><MdPowerSettingsNew /> Logout</Link></li>
               <li onClick={() => action(!state)}><Link to={PATH}><IoMdClose /> Close</Link></li>
           </ul>
        </div>
    )
}

