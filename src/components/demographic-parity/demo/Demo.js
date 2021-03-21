import React, { Component } from 'react'
import './Demo.css'

import Viz from '../viz/Viz'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as d3 from 'd3'

import {
  scrollContent,
  // General
  generalData,
  generalConfig,
  generalAnimations,
  // Caucasian
  caucasianData,
  caucasianConfig,
  caucasianAnimations,
  // African-American
  africanAmericanData,
  africanAmericanConfig,
  africanAmericanAnimations,
  endAnimations,
  interactiveContent
} from './data'

const combinedData = {
  general: generalData,
  caucasian: caucasianData,
  africanAmerican: africanAmericanData
}

class Demo extends Component {
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
  }

  getAcceptanceRate(data, threshold) {
    let acceptance  = 0
    const roundedThreshold = Math.floor(threshold - 1)

    data.slice(roundedThreshold + 1).forEach(datum => { acceptance += datum.y })
    acceptance += data[roundedThreshold].y * ((roundedThreshold + 1) - (threshold - 1))

    return Math.round(Math.min(acceptance, 1) * 1000) / 10
  }

  setThreshold(id, thresholdValue, callback) {
    const { threshold, acceptance } = this.state

    const data = combinedData[id].content

    this.setState({
      threshold: {
        ...threshold,
        [id]: thresholdValue
      },
      acceptance: {
        ...acceptance,
        [id]: this.getAcceptanceRate(data, thresholdValue)
      }
    }, callback)
  }

  componentDidMount() {
    ScrollTrigger.create({
      trigger: '.dpd-scroll-area',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.2,
      pin: '.dpd-viz-wrap',
      onLeave: () => gsap.to([`.dpd-scroll-arrow`, `.dpd-scroll-arrow-label`], { opacity: 0, ease: 'expo.out', duration: 0.6 })
    })

    scrollContent.forEach(section => {
      ScrollTrigger.create({
        trigger: `#dpd-scroll-section-${section.id}  > .dpd-scroll-text-wrap`,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.2,
        animation: gsap.timeline()
          .add(gsap.to(
            `#dpd-scroll-section-${section.id} > .dpd-scroll-text-wrap`, 
            { opacity: 1, scale: 1, duration: 0.5, ease: 'power4.out' }), 0)
          .add(gsap.to(
            `#dpd-scroll-section-${section.id} > .dpd-scroll-text-wrap`, 
            { opacity: 0, scale: 0.8, duration: 0.5, ease: 'power4.in' }), 0.5)
      })
    })

    this.setThreshold(
      'caucasian', 5, 
      () => this.setThreshold('africanAmerican', 5))

    // Interactive

    setTimeout(() => {
      const target = '.dpd-viz-discrepancy'
      const onLeaveBack = () => {
        gsap.to(`${target} defs .threshold-mask-rect`, 
          { scaleX: 0.56, ease: 'expo.out', duration: 0.6 })
        gsap.to(`${target} .threshold-g > .threshold-line-g`, 
          { x: 204, ease: 'expo.out', duration: 0.6 })
        d3.select(`${target} .threshold-g > .threshold-line-g > .threshold-label-text`)
          .text('Threshold: 5.0')
        gsap.to(
          [`${target} .threshold-g > .threshold-line-g > .threshold-label-rect`,
          `${target} .threshold-g > .threshold-line-g > .threshold-label-text`,
          `${target} .threshold-g > .threshold-line-g > .threshold-handle-rect`,
          `${target} .threshold-g > .threshold-line-g > .threshold-handle-arrow`,
          `.dpd-interactive-prompt-wrap`,
          `.dpd-scroll-arrow`,
          `.dpd-scroll-arrow-label`], 
          { opacity: 0, ease: 'expo.out', duration: 0.6 })
        gsap.to('.dpd-interactive-results-wrap', { opacity: 0, ease: 'expo.out', duration: 0.6 })
      }

      const endTimeline = gsap.timeline().set({}, {}, 1)

      endAnimations[0].animations.forEach(animation => {
        const toObject = Object.assign({
          ease: animation.ease || 'expo.out',
          duration: animation.duration || 0.5,
          stagger: animation.stagger ? 0.02 : 0,
          delay: animation.delay || 0
        }, animation.to)
        const insertionTime = animation.location === 'start' ? 0 : 0.5

        if (animation.from) {
          endTimeline.add(gsap.fromTo(`${animation.externalTarget ? '' : target} ${animation.target}`, animation.from, toObject), insertionTime)
        } else {
          endTimeline.add(gsap.to(`${animation.externalTarget ? '' : target} ${animation.target}`, toObject), insertionTime)
        }
      })

      endTimeline.pause()

      ScrollTrigger.create({
        trigger: endAnimations[0].trigger,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: () => { endTimeline.duration(1.6).play(0) },
        onLeaveBack: () => { onLeaveBack(endAnimations.trigger) }
      })
    }, 1000)
  }

  render() {
    const { threshold, acceptance } = this.state

    return (
      <div className="dp-demo row">
        <div className="dpd-viz-wrap">
          <div className="dpd-viz-inner-wrap row">
            <div className="dpd-viz col-8">
              <Viz 
                className="dpd-viz-general" 
                data={generalData} 
                config={generalConfig}
                animations={generalAnimations} 
                animationTriggers={section => `#dpd-scroll-section-${section.id}  > .dpd-scroll-text-wrap`}
              />
              <div className="dpd-viz-discrepancy spread flex-center">
                <Viz 
                  className="dpd-viz-caucasian" 
                  data={caucasianData} 
                  config={caucasianConfig}
                  animations={caucasianAnimations}
                  animationTriggers={section => `#dpd-scroll-section-${section.id}  > .dpd-scroll-text-wrap`}
                  threshold={threshold.caucasian}
                  setThreshold={this.setThreshold}
                  label="Caucasian" 
                />
                <Viz 
                  className="dpd-viz-african-american" 
                  data={africanAmericanData} 
                  config={africanAmericanConfig}
                  animations={africanAmericanAnimations}
                  animationTriggers={section => `#dpd-scroll-section-${section.id}  > .dpd-scroll-text-wrap`}
                  threshold={threshold.africanAmerican}
                  setThreshold={this.setThreshold}
                  label="African-American" 
                />
              </div>
            </div>
            <div className="dpd-interactive-wrap flex-center col-4">
              <div className="dpd-interactive-prompt-wrap">
                <p className="dpd-interactive-prompt">{interactiveContent.prompt}</p>
                {interactiveContent.hints.map((hint, index) => {
                  return <p className="dpd-interactive-hint" key={index}>{hint}</p>
                })}
              </div>
              <div className="dpd-interactive-results-wrap absolute-center flex-center">
                <div className="dpd-interactive-result-wrap flex-center">
                  <div className="dpd-interactive-result-connector"></div>
                  <div className="dpd-interactive-result-acceptance-wrap">
                    <p className="dpd-interactive-label">% classified as high-risk</p>
                    <p className="dpd-interactive-acceptance quote">
                      {`${acceptance.caucasian}`}
                      <span className="dpd-interactive-acceptance-unit">%</span>
                    </p>
                  </div>
                </div>
                <div className="dpd-interactive-result-wrap flex-center">
                  <div className="dpd-interactive-result-connector"></div>
                  <div className="dpd-interactive-result-acceptance-wrap">
                    <p className="dpd-interactive-label">% classified as high-risk</p>
                    <p className="dpd-interactive-acceptance quote">
                      {`${acceptance.africanAmerican}`}
                      <span className="dpd-interactive-acceptance-unit">%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dpd-scroll-arrow-wrap flex-center">
              <svg className="dpd-scroll-arrow" width="20" height="40" viewBox="0 0 20 40">
                <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
                  <path className="svg-stroke dark" d="M10 0l0 40" />
                  <path className="svg-stroke dark" d="M0 28L10 40L20 28" />
                </g>
              </svg>
              <p className="dpd-scroll-arrow-label">Scroll to continue</p>
            </div>
          </div>
        </div>
        <div className="dpd-scroll-area">
          <div className="dpd-scroll-area-head"></div>
          <div className="dpd-scroll-area-main" style={{ height: `${scrollContent.length * 80}vh`}}>
            {scrollContent.map((section, index) => {
              return (
                <div 
                  id={`dpd-scroll-section-${section.id}`}
                  className={`dpd-scroll-section ${section.align}`} 
                  key={section.id}
                >
                  <div className={`dpd-scroll-text-wrap col-${section.width} col-${section.mobileWidth}-sm`}>
                    <p className="dpd-scroll-text">{section.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="dpd-scroll-area-tail"></div>
        </div>
      </div>
    )
  }
}

export default Demo
