import React, { Component } from "react"
import "./EqualOutcome.css"

import Hero from "./hero/Hero"
import Demo from "./demo/Demo"
import Definition from "./definition/Definition"
import Fairness from "./fairness/Fairness"
import Responses from "./responses/Responses"
import Summary from "./summary/Summary"
import InternalMenu from "../../layouts/nav/internal-menu/InternalMenu"
import Footer from "../../layouts/footer/Footer"

import gsap from "gsap"

class EqualOutcome extends Component {
  render() {
    const { location } = this.props

    return (
      <div>
        <Hero />
        <Demo />
        <Definition />
        <Fairness />
        <hr />
        <Responses />
        <hr />
        <Summary />
        <hr />
        <div className="article-next-chapter-wrap container pt-4 pb-4">
          <p className="artcile-next-chapter-prompt fc-dark fw-medium">
            Read Chapter 3
          </p>
          <div className="article-next-chapter-inner-wrap">
            <InternalMenu
              location={location}
              showOnly={["chap-3"]}
              centerText
            />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default EqualOutcome
