import React from 'react'
import {Container} from "react-bootstrap"
import Topnav from "./Topnav"
import Content from "./Content"

export default ({action, state}) => {

    return (
        <Container fluid id="body" className={state ? "fixed" : ""} onClick={() => action(!state)}>
            <Topnav action={action} state={state}/>
            <Content />
        </Container>
    )
}
