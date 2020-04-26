import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Navbar from "./Homepage/Navbar"
import Banner from "./Homepage/Banner"
import Category from "./Homepage/Category"
import Getstarted from "./Homepage/Giving"
import Sponsors from "./Homepage/Sponsors"
import HowItWorks from "./Homepage/HowItWorks"
import Login from "./Homepage/Login"
import Footer from "./Homepage/Footer"

export default () => (
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <div id="content_container">
                <Route path="/" component={Banner} exact/>
                <Route path="/" component={Category} exact/>
                <Route path="/" component={Getstarted} exact/>
                <Route path="/" component={Sponsors} exact/>
                <Route path="/login" component={Login} exact/>
                <Route path="/howitworks" component={HowItWorks}/>
            </div>   
        </Switch>
        <Footer />
    </BrowserRouter>
)