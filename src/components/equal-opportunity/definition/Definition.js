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

const body = [
  'The third conception of fairness - Equality of Opportunity - would require that we equalize the true positive rates between the two groups. Similar to Equality of Outcome, this involves modifying the thresholds to equalize a specific quantity. Here, instead of the overall prediction rate, that quantity is the true positive rate.',
  'The model below has been modified to always equalize true positive rates among groups. Move one of the thresholds up or down and see how the other also moves to satisfy the equality requirement.'
]

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
      <div className="eo-definition article-wrap mt-4">
        <div className="heading-wrap center">
          <div className="heading-inner-wrap">
            <h1 className="heading-number">1.</h1>
            <h2 className="heading">True Positivity</h2>
            <div className="heading-quote-wrap mt-2">
              <div className="heading-quote-line" />
            </div>
          </div>
        </div>
        <div className="text-wrap center my-3">
          <p className="eo-def-description">{body[0]}</p>
          <p className="eo-def-description">{body[1]}</p>
        </div>
        <div className="eo-def-interactive-wrap flex-center flex-col py-2 surface by">
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
    )
  }
}

export default Definition
