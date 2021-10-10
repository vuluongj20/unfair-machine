import React, { Component } from "react"
import "./Viz.css"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import binarySearch from "binary-search"
import BetaPDF from "../../../resources/BetaPDF"

class Viz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      positivePoints: [],
      negativePoints: [],
      threshold: 50,
      thresholdHover: false,
      truePositiveRate: null,
      falsePositiveRate: null,
      hello: "",
    }
    this.bindAnimations = this.bindAnimations.bind(this)
    this.stInstances = []
  }

  bindAnimations(animations, target, getTriggers, overrides = {}) {
    animations.forEach(section => {
      const timeline = gsap.timeline().set({}, {}, 1)

      section.animations.forEach(animation => {
        const toObject = Object.assign(
          {
            ease: animation.ease || "expo.out",
            duration: animation.duration || 0.5,
            stagger: animation.stagger
              ? animation.microStagger
                ? 0.0002
                : 0.02
              : 0,
            delay: animation.delay || 0,
          },
          animation.to
        )
        const insertionTime = animation.location === "start" ? 0 : 0.5

        if (animation.from) {
          timeline.add(
            gsap.fromTo(
              animation.targetOutside
                ? animation.target
                : `${target} ${animation.target}`,
              animation.from,
              toObject
            ),
            insertionTime
          )
        } else {
          timeline.add(
            gsap.to(
              animation.targetOutside
                ? animation.target
                : `${target} ${animation.target}`,
              toObject
            ),
            insertionTime
          )
        }
      })

      timeline.pause()

      const trigger = getTriggers(section)

      const stInstance = ScrollTrigger.create({
        trigger,
        start: overrides.start || "top bottom",
        end: overrides.end || "bottom top",
        scrub: overrides.scrub || 0.2,
        animation: timeline,
        onUpdate: self => {
          section.onUpdate && section.onUpdate({ self, vizRef: this, target })
        },
        onLeaveBack: self => {
          section.onLeaveBack &&
            section.onLeaveBack({ self, vizRef: this, target })
        },
      })

      this.stInstances.push(stInstance)
    })
  }

  setThreshold(e) {
    const { setThreshold } = this.props
    const vizBBox = e.currentTarget.getBoundingClientRect()
    const mouseX = e.clientX - vizBBox.left

    const threshold = Math.max(Math.min((mouseX / vizBBox.width) * 100, 100), 0)

    setThreshold(threshold)
  }

  setThresholdHover(e) {
    const vizBBox = e.currentTarget.getBoundingClientRect()
    const mouseX = e.clientX - vizBBox.left
    this.setState({
      thresholdHover: Math.max(
        Math.min((mouseX / vizBBox.width) * 100, 100),
        0
      ),
    })
  }

  toggleThresholdHover(to) {
    this.setState({
      thresholdHover: to,
    })
  }

  updateRates(threshold) {
    const { data } = this.props
    const positiveIndex = binarySearch(
      data.positive,
      threshold / 100,
      (element, needle) => element.x - needle
    )
    const negativeIndex = binarySearch(
      data.negative,
      threshold / 100,
      (element, needle) => element.x - needle
    )

    const truePositiveRate = (
      (data.positive.length + positiveIndex + 1) /
      data.positive.length
    ).toFixed(2)
    const falsePositiveRate = (
      (data.negative.length + negativeIndex + 1) /
      data.negative.length
    ).toFixed(2)

    this.setState({
      threshold,
      truePositiveRate,
      falsePositiveRate,
    })
  }

  componentDidMount() {
    const {
      data,
      distributions,
      className,
      animations,
      animationTriggers,
      animationOverrides,
      threshold,
    } = this.props
    this.updateRates(threshold)
    animations &&
      this.bindAnimations(
        animations,
        `.${className}`,
        animationTriggers,
        animationOverrides
      )
  }

  componentDidUpdate(prevProps) {
    const { threshold } = this.props
    if (threshold && threshold !== prevProps.threshold) {
      this.updateRates(threshold)
    }
  }

  componentWillUnmount() {
    this.stInstances.forEach(instance => instance.kill())
  }

  render() {
    const { data, className, label, options } = this.props
    const { threshold, thresholdHover, truePositiveRate, falsePositiveRate } =
      this.state

    return (
      <div className={`eo-viz ${className} flex-centers spread`}>
        <div
          className="eov-inner-wrap"
          onClick={e => options.showThreshold && this.setThreshold(e)}
          onMouseMove={e => options.showThreshold && this.setThresholdHover(e)}
          onMouseLeave={e =>
            options.showThreshold && this.toggleThresholdHover(false)
          }
        >
          <div className="eov-points-wrap">
            {[...data.positive, ...data.negative].map((point, index) => {
              if (point.positive) {
                return (
                  <div
                    key={index}
                    className={
                      "eov-point" +
                      (threshold && point.x * 100 > threshold
                        ? " active"
                        : "") +
                      (threshold && point.x * 100 > 20 ? " above-20" : "") +
                      (threshold && point.x * 100 > 50 ? " above-50" : "")
                    }
                    style={{
                      bottom: `${point.y * 100}%`,
                      left: `${point.x * 100}%`,
                    }}
                  ></div>
                )
              }
              return (
                <div
                  className={
                    "eov-cross-wrap" +
                    (threshold && point.x * 100 > threshold ? " active" : "") +
                    (threshold && point.x * 100 > 20 ? " above-20" : "") +
                    (threshold && point.x * 100 > 50 ? " above-50" : "")
                  }
                  key={index}
                  style={{
                    bottom: `${point.y * 100}%`,
                    left: `${point.x * 100}%`,
                  }}
                >
                  <div className="eov-cross-line eov-cross-line-1"></div>
                  <div className="eov-cross-line eov-cross-line-2"></div>
                  {options.showDummyPoints && (
                    <div className="eov-point dummy absolute-center"></div>
                  )}
                </div>
              )
            })}
          </div>
          <div className="eov-x-axis">
            <div className="eov-x-axis-line"></div>
            {[...Array(11)].map((_, index) => {
              return (
                <div className="eov-x-axis-tick" key={index}>
                  <p className="eov-x-axis-tick-label">{index * 10}</p>
                </div>
              )
            })}
          </div>
          {options.showThreshold && (
            <div
              className="eov-threshold-hover"
              style={{
                opacity: thresholdHover ? 1 : 0,
                left: `${thresholdHover}%`,
              }}
            >
              <div className="eov-threshold-hover-line"></div>
            </div>
          )}
          {options.showThreshold && (
            <div
              className="eov-threshold"
              style={{
                opacity: threshold ? 1 : 0,
                left: `${threshold}%`,
              }}
            >
              <div className="eov-threshold-line"></div>
              <div className="eov-threshold-label">
                <p className="eov-threshold-label-text">{`Threshold: ${threshold.toFixed(
                  1
                )}`}</p>
              </div>
            </div>
          )}
          {options.showLegend && (
            <div className="eov-legend">
              <p className="eov-legend-label eov-legend-el">Outcome:</p>
              <div className="eov-legend-inner-wrap">
                <div className="eov-legend-item eov-legend-el">
                  <div className="eov-legend-item-container flex-center">
                    <div className="eov-cross-wrap">
                      <div className="eov-cross-line eov-cross-line-1"></div>
                      <div className="eov-cross-line eov-cross-line-2"></div>
                    </div>
                  </div>
                  <p className="eov-legend-item-label">Dropped out</p>
                </div>
                <div className="eov-legend-item eov-legend-el">
                  <div className="eov-legend-item-container flex-center">
                    <div className="eov-point"></div>
                  </div>
                  <p className="eov-legend-item-label">Finished degree</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="eov-rates flex-center">
          <p className="eov-rates-text true-positive">{`True positive rate: ${truePositiveRate}`}</p>
          <p className="eov-rates-text false-negative">{`False positive rate: ${falsePositiveRate}`}</p>
        </div>
        {label && <p className="eo-viz-label">{label}</p>}
      </div>
    )
  }
}

export default Viz
