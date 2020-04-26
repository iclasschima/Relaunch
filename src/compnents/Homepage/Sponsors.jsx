import React from "react"
import paystack from "../../assets/paystack.png"
import hotels from "../../assets/hotels.png"
import semicolon from "../../assets/semicolon.png"
import {Container} from "react-bootstrap"

export default () => (
    <Container fluid className="text-center" id="sponsors">

        <h5>These guys have been of great help</h5>
        <div>
            <ul>
                <li><img src={paystack} alt="paystack"/></li>
                <li><img src={semicolon} alt="semicolon"/></li>
                <li><img src={hotels} alt="hotelsNG"/></li>                
            </ul>
        </div>
    </Container>
)