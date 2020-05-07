import React from 'react'
import {Row} from "react-bootstrap"

import AccountSettings from "./settings/AccountSettings"
import ContactSettings from "./settings/Contactsettings"
import PasswordSettings from "./settings/PasswordSettings"

export default () => {
    return (
        <div id="settings">
            <Row xs={1}>
               <AccountSettings />
               <ContactSettings />
               <PasswordSettings />
            </Row>
        </div> 
    )
}
