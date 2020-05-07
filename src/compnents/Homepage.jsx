import React from "react"
import Navbar from "./Navbar"
import Banner from "./Banner"
import Category from "./Category"
import Getstarted from "./Giving"
import Sponsors from "./Sponsors"
import Footer from "./Footer"

export default () => (
    <div>
        <Navbar />
            <div id="content_container">
                <Banner />
                <Category />
                <Getstarted />
                <Sponsors />
            </div>   
        <Footer />
    </div>
)