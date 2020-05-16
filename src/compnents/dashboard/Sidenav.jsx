import React from "react"
import {Link} from "react-router-dom"
import {RiDashboardLine} from "react-icons/ri"  
import {GiStethoscope} from "react-icons/gi"
import {GrMoney} from "react-icons/gr"
import {IoMdHelpCircleOutline, IoMdClose} from "react-icons/io"
import {FiShoppingCart, FiSettings } from "react-icons/fi"
import {MdPowerSettingsNew} from "react-icons/md"

export default ({state, action}) => {

    const PATH = window.location.pathname

    return (
        <div id="sidenav" className={state ? "show" : ""}>
            <h5>ReLaunch</h5>
           <ul>
               <li className={PATH === "/dashboard" ? "active" : ""}><Link to="/dashboard"><RiDashboardLine /> Dashboard</Link></li>
               <li className={PATH === "/account" ? "active" : ""}><Link to="/account"><GrMoney /> Account</Link></li>
               <li className={PATH === "/market" ? "active" : ""}><Link to="/market"><FiShoppingCart /> Market</Link></li>
               <li className={PATH === "/medicals" ? "active" : ""}><Link to="/medicals"><GiStethoscope /> Medicals</Link></li>
               <li className={PATH === "/settings" ? "active" : ""}><Link to="/settings"><FiSettings /> Settings</Link></li>
               <li className={PATH === "/help" ? "active" : ""}><Link to="/help"><IoMdHelpCircleOutline /> Help</Link></li>
               <li className={PATH === "/logout" ? "active" : ""}><Link to="logout"><MdPowerSettingsNew /> Logout</Link></li>
               <li className="d-block d-lg-none" onClick={() => action(!state)}><Link to={PATH}><IoMdClose /> Close</Link></li>
           </ul>
        </div>
    )
}

