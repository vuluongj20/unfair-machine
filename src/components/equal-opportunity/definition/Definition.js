import React, { Component } from 'react'
import './Definition.css'

import Viz from '../viz/Viz'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import binarySearch from 'binary-search'

import {
  caucasianOptions,
  africanAmericanOptions,
} from './data'

import {
  dataPoints
} from '../demo/data'

const quote = 'What if we equalized the true positive rate? If we did so, then the algorithm would satisfy \'equal opportunity\' - another important conception of fairness for decision-making algorithms.'

const description = 'As the name suggests, equal opportunity derives from the egalitarian idea of equality of opportunity. Instead of demanding that the outcomes are equal, here we only require that everyone is given the same opportunity to thrive. If a student will enroll, then the algorithm will not discriminate against them based on their demographic identity.'

const caption = 'Move any of the thresholds and see how the other one also moves in order to maintain roughly the same true positive rates.'

class Definition extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        general: null,
        caucasian: null,
        africanAmerican: null
      },
      thresholds: {
        caucasian: 50,
        africanAmerican: 50
      }
    }
    this.setThreshold = this.setThreshold.bind(this)
    this.caucasianVizRef = React.createRef()
    this.africanAmericanVizRef = React.createRef()
    this.stInstances = []
  }

  getTruePositiveRate(id, threshold) {
    const data = this.state.data[id]
    if (data) {
      const positiveIndex = binarySearch(data.positive, threshold / 100, (element, needle) => element.x - needle)
      const truePositiveRate = ((data.positive.length + positiveIndex + 1) / data.positive.length).toFixed(2)
      return truePositiveRate
    } 
    return null
  }

  getThreshold(id, truePositiveRate) {
    const data = this.state.data[id]

    if (data) {
      const thresholds = Array.from(Array(400).keys())
      const comparisonFunction = (element, needle) => {
        return needle - this.getTruePositiveRate(id, element / 4)
      }
      const thresholdIndex = binarySearch(thresholds, truePositiveRate, comparisonFunction)

      return Math.max(Math.min((Math.abs(thresholdIndex) - 1) / 4, 100), 0)
    }
    return null
  }

  setThreshold(id, threshold) {
    const { thresholds } = this.state

    const truePositiveRate = this.getTruePositiveRate(id, threshold)
    const newThresholds = {}

    Object.keys(thresholds).forEach(el => {
      if (el !== id) {
        newThresholds[el] = this.getThreshold(el, truePositiveRate)
      } else {
        newThresholds[el] = threshold
      }
    })

    this.setState({
      thresholds: newThresholds
    })
  }

  componentDidMount() {
    const caucasianData = dataPoints.filter(el => el.group === 'caucasian')
    const africanAmericanData = dataPoints.filter(el => el.group === 'african-american')

    this.setState({
      data: {
        caucasian: {
          positive: caucasianData.filter(el => el.positive),
          negative: caucasianData.filter(el => !el.positive)
        },
        africanAmerican: {
          positive: africanAmericanData.filter(el => el.positive),
          negative: africanAmericanData.filter(el => !el.positive)
        }
      }
    }, () => {
      this.setThreshold('caucasian', 50)
    })

    this.stInstances.push(ScrollTrigger.create({
      trigger: '.eo-definition .eo-def-quote',
      start: 'top bottom',
      end: 'top top',
      scrub: 0.4,
      animation: gsap.timeline()
        .add(gsap.fromTo('.eo-definition .eo-def-quote', 
          { opacity: 0 }, { opacity: 1, ease: 'expo.out', duration: 1 }), 0)
    }))

    this.stInstances.push(ScrollTrigger.create({
      trigger: '.eo-definition .eo-def-description',
      start: 'top bottom',
      end: 'top top',
      scrub: 0.4,
      animation: gsap.timeline()
        .add(gsap.fromTo('.eo-definition .eo-def-description', 
          { opacity: 0 }, { opacity: 1, ease: 'expo.out', duration: 1 }), 0)
    }))

    this.stInstances.push(ScrollTrigger.create({
      trigger: '.eo-def-interactive-wrap',
      start: 'top bottom',
      end: 'top top',
      scrub: 0.4,
      animation: gsap.timeline()
        .add(gsap.fromTo('.eo-def-interactive-wrap', 
          { opacity: 0 }, { opacity: 1, ease: 'expo.out', duration: 1 }), 0)
    }))
  }

  componentWillUnmount() {
    this.stInstances.forEach(instance => instance.kill())
  }

  render() {
    const { data, thresholds } = this.state

    return (
      <div className="eo-definition article-wrap py-4 py-2-sm row">
        <div className="col-12">
          <div className="text-wrap center">
            <p className="quote eo-def-quote">{quote}</p>
            <p className="eo-def-description">{description}</p>
          </div>
          <div className="eo-def-interactive-wrap flex-center flex-col mt-2 row">
            <div className="eo-def-interactive-caption-wrap mt-2 mb-2 col-8">
              <p className="eo-def-interactive-caption text-wrap">{caption}</p>
            </div>
            <div className="eo-def-interactive-inner-wrap flex-center col-8">
              {data.caucasian && (
                <Viz
                  className="eo-def-caucasian"
                  ref={this.caucasianVizRef}
                  data={data.caucasian}
                  options={caucasianOptions}
                  threshold={thresholds.caucasian}
                  setThreshold={(threshold) => this.setThreshold('caucasian', threshold)}
                  label="Caucasian" 
                />
              )}
            </div>
            <div className="eo-def-interactive-inner-wrap flex-center col-8">
              {data.africanAmerican && (
                <Viz
                  className="eo-def-african-american"
                  ref={this.africanAmericanVizRef}
                  data={data.africanAmerican}
                  options={africanAmericanOptions}
                  threshold={thresholds.africanAmerican}
                  setThreshold={(threshold) => this.setThreshold('africanAmerican', threshold)}
                  label="African-American" 
                />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Definition
