import React from 'react'
import {Route, Switch} from "react-router-dom"
import Index from "./Index"
import Settings from "./Settings"
import {Container} from "react-bootstrap"

export default () => {
    
    return (
        <Container id="dashboard_content">
            <Switch>
                <Route path="/dashboard" component={Index} exact />
                <Route path="/settings" component={Settings} exact />
            </Switch>
        </Container>
    )
}
