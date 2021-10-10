import React, { Component } from "react"
import "./Definition.css"

import Viz from "../viz/Viz"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import {
  // Caucasian
  caucasianData,
  caucasianConfig,
  // African-American
  africanAmericanData,
  africanAmericanConfig,
} from "./data"

import { parseReferenceLinks } from "../../../utils/references"

const combinedData = {
  caucasian: caucasianData,
  africanAmerican: africanAmericanData,
}

const body = [
  'The second conception of fairness that we are considering - Equality of Outcome - would require that we equalize the rate at which we classify defendants as "high-risk" (the high-risk classification rate, or HCR) among all demographic groups [2]. For example, if we want to have an HCR of 64% over the entire population, which is the true population average, then we must ensure that all demographic groups have an HCR of around 64%. This means we need to set the threshold at 3.2 for black defendants and 2.0 for white defendants, given their different score distributions.',
  "It is most likely the case that under Equality of Outcome, we would need different thresholds for different demographic groups. Try the fixed model below. It has been modified to always equalize the HCRs (numbers on the right-hand side). Move one of the thresholds up or down and see how the model automatically updates the other threshold in order to keep the HCRs equal among the two group.",
]

const lockIcon = {
  src: "/icons/lock-24px.svg",
  alt: "Lock",
}

class Definition extends Component {
  constructor(props) {
    super(props)
    this.setThreshold = this.setThreshold.bind(this)
    this.state = {
      threshold: {
        caucasian: 1,
        africanAmerican: 1,
      },
      acceptance: {
        caucasian: 1,
        africanAmerican: 1,
      },
    }
    this.stInstances = []
  }

  getAcceptanceRate(data, threshold) {
    let acceptance = 0
    const roundedThreshold = Math.floor(threshold - 1)

    data.slice(roundedThreshold + 1).forEach(datum => {
      acceptance += datum.y
    })
    acceptance +=
      data[roundedThreshold].y * (roundedThreshold + 1 - (threshold - 1))

    return Math.round(Math.min(acceptance, 1) * 1000) / 10
  }

  getThresholdFromAcceptanceRate(data, targetAcceptance) {
    let currentThreshold = 1
    let currentAcceptance = 100
    while (currentAcceptance > targetAcceptance && currentThreshold < 10) {
      currentThreshold += 1
      currentAcceptance = this.getAcceptanceRate(data, currentThreshold)
    }
    while (currentAcceptance < targetAcceptance && currentThreshold > 1) {
      currentThreshold -= 0.1
      currentAcceptance = this.getAcceptanceRate(data, currentThreshold)
    }
    return Math.round(Math.min(currentThreshold, 10) * 10) / 10
  }

  setThreshold(id, thresholdValue, callback) {
    const { threshold, acceptance } = this.state

    const newAcceptance = this.getAcceptanceRate(
      combinedData[id].content,
      thresholdValue
    )

    const newThresholds = { [id]: thresholdValue }
    const newAcceptances = { [id]: newAcceptance }

    const otherDataKeys = Object.keys(combinedData).filter(key => key !== id)

    otherDataKeys.forEach(key => {
      const otherData = combinedData[key].content
      const equalizedThreshold = this.getThresholdFromAcceptanceRate(
        otherData,
        newAcceptance
      )

      newThresholds[key] = equalizedThreshold
      newAcceptances[key] = this.getAcceptanceRate(
        otherData,
        equalizedThreshold
      )
    })

    this.setState(
      {
        threshold: newThresholds,
        acceptance: newAcceptances,
      },
      callback
    )
  }

  componentDidMount() {
    this.setThreshold("caucasian", 2)

    this.stInstances.push(
      ScrollTrigger.create({
        trigger: ".dp-definition .quote",
        start: "top bottom",
        end: "top top",
        scrub: 0.4,
        animation: gsap
          .timeline()
          .add(
            gsap.fromTo(
              ".dp-definition .quote",
              { opacity: 0 },
              { opacity: 1, ease: "expo.out", duration: 1 }
            ),
            0
          ),
      })
    )

    this.stInstances.push(
      ScrollTrigger.create({
        trigger: ".dp-def-interactive-wrap",
        start: "top bottom",
        end: "top top",
        scrub: 0.4,
        animation: gsap
          .timeline()
          .add(
            gsap.fromTo(
              ".dp-def-interactive-wrap",
              { opacity: 0 },
              { opacity: 1, ease: "expo.out", duration: 1 }
            ),
            0
          ),
      })
    )
  }

  componentWillUnmount() {
    this.stInstances.forEach(instance => instance.kill())
  }

  render() {
    const { threshold, acceptance } = this.state
    return (
      <div className="dp-definition article-wrap mt-4">
        <div className="heading-wrap center mt-3">
          <div className="heading-inner-wrap">
            <h1 className="heading-number">1.</h1>
            <h2 className="heading">Equalized Rates</h2>
            <div className="heading-quote-wrap mt-2">
              <div className="heading-quote-line" />
            </div>
          </div>
        </div>
        <div className="text-wrap center mt-2 mb-3">
          {body.map((para, ind) => {
            return <p key={ind}>{parseReferenceLinks(para)}</p>
          })}
        </div>
        <div className="dp-def-interactive-wrap surface by flex-center flex-col py-2">
          <div className="dp-def-interactive-inner-wrap flex-center">
            <Viz
              className="dp-def-african-american"
              data={africanAmericanData}
              config={africanAmericanConfig}
              threshold={threshold.africanAmerican}
              setThreshold={this.setThreshold}
              label="Black defendants"
            />
            <div className="dp-def-interactive-result-wrap flex-center">
              <div className="dp-def-interactive-result-acceptance-wrap">
                <p className="dp-def-interactive-label">
                  % classified as high-risk
                </p>
                <p className="dp-def-interactive-acceptance quote">
                  {`${acceptance.africanAmerican}`}
                  <span className="dp-def-interactive-acceptance-unit">%</span>
                </p>
              </div>
            </div>
            <div className="dp-def-interactive-lock-wrap flex-center flex-col">
              <div className="dp-def-interactive-lock-connector"></div>
              <img src={lockIcon.src} alt={lockIcon.alt} />
              <div className="dp-def-interactive-lock-connector"></div>
            </div>
          </div>
          <div className="dp-def-interactive-inner-wrap flex-center">
            <Viz
              className="dp-def-caucasian"
              data={caucasianData}
              config={caucasianConfig}
              threshold={threshold.caucasian}
              setThreshold={this.setThreshold}
              label="White defendants"
            />
            <div className="dp-def-interactive-result-wrap flex-center">
              <div className="dp-def-interactive-result-acceptance-wrap">
                <p className="dp-def-interactive-label">
                  % classified as high-risk
                </p>
                <p className="dp-def-interactive-acceptance quote">
                  {`${acceptance.caucasian}`}
                  <span className="dp-def-interactive-acceptance-unit">%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Definition
