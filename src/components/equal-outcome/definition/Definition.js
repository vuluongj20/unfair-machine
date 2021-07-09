import React, { Component } from 'react'
import './Definition.css'

import Viz from '../viz/Viz'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import {
  // Caucasian
  caucasianData,
  caucasianConfig,
  // African-American
  africanAmericanData,
  africanAmericanConfig
} from './data'

const combinedData = {
  caucasian: caucasianData,
  africanAmerican: africanAmericanData
}

const quote = 'If we set the thresholds in a way such that the percentage of \"high-risk\" classifications is roughly equal among all groups, then the algorithm would satisfy demographic parity.'

const body = 'Here, \"parity\" means equality. We want the positive prediction rate (i.e. the rate at which defendants receive a \"high-risk\" classification) to be equal among demographic groups. That means that the rate for Caucasian defendants should be roughly the same as that for African American defendants. The following algorithm has been modified to satisfy demographic parity. Move any of the thresholds and see how the other one also moves in order to maintain the rate equality.'

const lockIcon = {
  src: '/icons/lock-24px.svg',
  alt: 'Lock'
}

class Definition extends Component {
  constructor(props) {
    super(props)
    this.setThreshold = this.setThreshold.bind(this)
    this.state = {
      threshold: {
        caucasian: 1,
        africanAmerican: 1
      },
      acceptance: {
        caucasian: 1,
        africanAmerican: 1
      }
    }
    this.stInstances = []
  }

  getAcceptanceRate(data, threshold) {
    let acceptance  = 0
    const roundedThreshold = Math.floor(threshold - 1)

    data.slice(roundedThreshold + 1).forEach(datum => { acceptance += datum.y })
    acceptance += data[roundedThreshold].y * ((roundedThreshold + 1) - (threshold - 1))

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

    const newAcceptance = this.getAcceptanceRate(combinedData[id].content, thresholdValue)

    const newThresholds = { [id]: thresholdValue }
    const newAcceptances = { [id]: newAcceptance }

    const otherDataKeys = Object.keys(combinedData).filter(key => key !== id)

    otherDataKeys.forEach(key => {
      const otherData = combinedData[key].content
      const equalizedThreshold = this.getThresholdFromAcceptanceRate(otherData, newAcceptance)

      newThresholds[key] = equalizedThreshold
      newAcceptances[key] = this.getAcceptanceRate(otherData, equalizedThreshold)
    })

    this.setState({
      threshold: newThresholds,
      acceptance: newAcceptances
    }, callback)
  }

  componentDidMount() {
    this.setThreshold('caucasian', 5)

    this.stInstances.push(
      ScrollTrigger.create({
        trigger: '.dp-definition .quote',
        start: 'top bottom',
        end: 'top top',
        scrub: 0.4,
        animation: gsap.timeline()
          .add(gsap.fromTo('.dp-definition .quote', 
            { opacity: 0 }, { opacity: 1, ease: 'expo.out', duration: 1 }), 0)
      })
    )

    this.stInstances.push(
      ScrollTrigger.create({
        trigger: '.dp-def-interactive-wrap',
        start: 'top bottom',
        end: 'top top',
        scrub: 0.4,
        animation: gsap.timeline()
          .add(gsap.fromTo('.dp-def-interactive-wrap', 
            { opacity: 0 }, { opacity: 1, ease: 'expo.out', duration: 1 }), 0)
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
        <div className="quote-wrap center no-bt">
          <p className="quote">{quote}</p>
        </div>
        <div className="text-wrap center my-3">
          <p>{body}</p>
        </div>
        <div className="dp-def-interactive-wrap surface by flex-center flex-col py-2">
          <div className="dp-def-interactive-inner-wrap flex-center">
            <Viz
              className="dp-def-caucasian"
              data={caucasianData}
              config={caucasianConfig}
              threshold={threshold.caucasian}
              setThreshold={this.setThreshold}
              label="Caucasian" 
            />
            <div className="dp-def-interactive-result-wrap flex-center">
              <div className="dp-def-interactive-result-acceptance-wrap">
                <p className="dp-def-interactive-label">% classified as high-risk</p>
                <p className="dp-def-interactive-acceptance quote">
                  {`${acceptance.caucasian}`}
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
              className="dp-def-african-american"
              data={africanAmericanData}
              config={africanAmericanConfig}
              threshold={threshold.africanAmerican}
              setThreshold={this.setThreshold}
              label="African-American" 
            />
            <div className="dp-def-interactive-result-wrap flex-center">
              <div className="dp-def-interactive-result-acceptance-wrap">
                <p className="dp-def-interactive-label">% classified as high-risk</p>
                <p className="dp-def-interactive-acceptance quote">
                  {`${acceptance.africanAmerican}`}
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
