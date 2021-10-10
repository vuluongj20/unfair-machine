import React, { Component } from "react"
import "./Demo.css"

import Model from "../model/Model"
import whatInput from "what-input"

import gsap from "gsap"

const introFunctions = {
  intro: direction =>
    `Imagine: you\'re a machine learning engineer at a commercial bank. One day, your manager gives you a large dataset and asks you to build an algorithm that classifies potential clients into two groups: those who earn more than $50K/year, and those who earn less. You have access to the variables ${direction}. Which of those variables would you use?`,
  introLabel: cta =>
    `${
      cta.charAt(0).toUpperCase() + cta.slice(1)
    } on variables to select/deselect them. When you're done, ${cta} \"Run model\" to start.`,
}
const outro =
  "Given the disparate set of predictions, do you think we have a responsibility to remove sex from the training process? Would doing so make the final predictions more equitable?"

const isBrowser = typeof window !== "undefined"

class Demo extends Component {
  getIntro() {
    if (isBrowser) {
      return {
        intro: introFunctions.intro(
          window.innerWidth > 768 ? "on the left" : "on top"
        ),
        introLabel: introFunctions.introLabel(
          whatInput.ask() === "touch" ? "tap" : "click"
        ),
      }
    } else {
      return null
    }
  }

  componentDidMount() {
    document.addEventListener(
      "media-loaded",
      () => {
        gsap.to(".gu-demo", { opacity: 1, ease: "expo.out", duration: 1.6 })
      },
      { once: true }
    )
  }

  render() {
    const { data } = this.props

    return (
      <div className="gu-demo article-section surface by no-padding">
        <div className="container">
          <Model id="gud" data={data} intro={this.getIntro()} outro={outro} />
        </div>
      </div>
    )
  }
}

export default Demo
