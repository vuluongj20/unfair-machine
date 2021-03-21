import React, { Component } from 'react'
import './Demo.css'

import Viz from '../viz/Viz'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import {
  dataPoints,
  scrollContent,
  generalOptions,
  generalAnimations,
  caucasianOptions,
  africanAmericanOptions,
  disparityAnimations,
  interactiveContent
} from './data'

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thresholds: {
        general: 50,
        caucasian: 50,
        africanAmerican: 50
      },
      data: {
        general: null,
        caucasian: null,
        africanAmerican: null
      }
    }
    this.setThreshold = this.setThreshold.bind(this)
  }

  setThreshold(id, threshold) {
    const { thresholds } = this.state
    
    this.setState({
      thresholds: {
        ...thresholds,
        [id]: threshold
      }
    })
  }

  componentDidMount() {
    ScrollTrigger.create({
      trigger: '.eod-scroll-area',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.2,
      pin: '.eod-viz-wrap'
    })

    const caucasianData = dataPoints.filter(el => el.group === 'caucasian')
    const africanAmericanData = dataPoints.filter(el => el.group === 'african-american')

    this.setState({
      data: {
        general: {
          positive: dataPoints.filter(el => el.positive),
          negative: dataPoints.filter(el => !el.positive)
        },
        caucasian: {
          positive: caucasianData.filter(el => el.positive),
          negative: caucasianData.filter(el => !el.positive)
        },
        africanAmerican: {
          positive: africanAmericanData.filter(el => el.positive),
          negative: africanAmericanData.filter(el => !el.positive)
        }
      }
    })
  }

  render() {
    const { thresholds, data } = this.state

    return (
      <div className="eo-demo-canvas row">
        <div className="eod-viz-wrap flex-center">
          <div className="eod-interactive-wrap flex-center col-4">
            <div className="eod-interactive-prompt-wrap">
              <p className="eod-interactive-prompt">{interactiveContent.prompt}</p>
              {interactiveContent.hints.map((hint, index) => {
                return <p className="eod-interactive-hint" key={index}>{hint}</p>
              })}
            </div>
          </div>
          <div className="eod-viz-inner-wrap col-8">
            <div className="eod-viz-general-wrap absolute-center">
              {data.general && (
                <Viz 
                  className="eod-viz-general"
                  data={data.general}
                  animations={generalAnimations}
                  animationTriggers={section => `#eod-scroll-section-${section.id}  > .eod-scroll-text-wrap`}
                  options={generalOptions}
                  threshold={thresholds.general}
                  setThreshold={(threshold) => this.setThreshold('general', threshold)}
                />
              )}
            </div>
            <div className="eod-viz-specific-wrap absolute-center">
              <div className="eod-viz-caucasian-wrap">
                {data.caucasian && (
                  <Viz 
                    className="eod-viz-caucasian"
                    label="Caucasian students"
                    data={data.caucasian} 
                    animations={disparityAnimations}
                    animationTriggers={section => `#eod-scroll-section-${section.id}  > .eod-scroll-text-wrap`}
                    options={caucasianOptions}
                    threshold={thresholds.caucasian}
                    setThreshold={(threshold) => this.setThreshold('caucasian', threshold)}
                  />
                )}
              </div>
              <div className="eod-viz-african-american-wrap">
                {data.africanAmerican && (
                  <Viz 
                    className="eod-viz-african-american"
                    label="African-American students"
                    data={data.africanAmerican} 
                    animations={disparityAnimations}
                    animationTriggers={section => `#eod-scroll-section-${section.id}  > .eod-scroll-text-wrap`}
                    options={africanAmericanOptions}
                    threshold={thresholds.africanAmerican}
                    setThreshold={(threshold) => this.setThreshold('africanAmerican', threshold)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="eod-scroll-area">
          <div className="eod-scroll-area-head"></div>
          <div className="eod-scroll-area-main" style={{ height: `${scrollContent.length * 80}vh`}}>
            {scrollContent.map(section => {
              return (
                <div 
                  id={`eod-scroll-section-${section.id}`}
                  className={`eod-scroll-section ${section.align}`} 
                  key={section.id}
                >
                  <div className={`eod-scroll-text-wrap col-${section.width} col-${section.mobileWidth}-sm ${!section.text ? 'empty' : ''}`}>
                    <p className="eod-scroll-text">{section.text}</p>
                  </div> 
                </div>  
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
