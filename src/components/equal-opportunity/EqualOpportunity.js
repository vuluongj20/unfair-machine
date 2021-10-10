import React, { Component } from "react"
import "./EqualOpportunity.css"

import Hero from "./hero/Hero"
import Demo from "./demo/Demo"
import Definition from "./definition/Definition"
import Fairness from "./fairness/Fairness"
import Desert from "./desert/Desert"
import Summary from "./summary/Summary"
import Footer from "../../layouts/footer/Footer"

import ScrollTrigger from "gsap/ScrollTrigger"

import gsap from "gsap"

class EqualOpportunity extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Demo />
        <Definition />
        <Fairness />
        <hr />
        <Desert />
        <hr />
        <Summary />
        <Footer />
      </div>
    )
  }
}

export default EqualOpportunity
