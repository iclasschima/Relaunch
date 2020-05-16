import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Homepage from "./compnents/Homepage"
import About from "./compnents/About"
import Dashboard from "./compnents/Dashboard"
import Contact from "./compnents/Contact";
import HowItWorks from "./compnents/HowItWorks"
import Signup from "./compnents/Signup"
import Login from "./compnents/Login"
import BVN from "./compnents/Bvn"
import OTP from "./compnents/Otp"
import FAQ from "./compnents/Faq"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path="/" component={Homepage} exact/>
            <Route path="/about" component={About} exact/>
            <Route path="/contact" component={Contact} exact/>
            <Route path="/howitworks" component={HowItWorks} exact/>
            <Route path="/faqs" component={FAQ} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/bvn_verification" component={BVN} />
            <Route path="/otp" component={OTP} />
            <Route path="/dashboard" component={Dashboard} exact/>
            <Route path="/market" component={Dashboard} exact/>
            <Route path="/settings" component={Dashboard} exact/>
            <Route path="/help" component={Dashboard} exact/>
            <Route path="/account" component={Dashboard} exact/>
            <Route path="/medicals" component={Dashboard} exact/>
            <Route path="/logout" component={Dashboard} exact/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
