import React, { Component } from 'react'
import './Viz.scss'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import * as d3 from 'd3'

class Viz extends Component {
  constructor(props) {
    super(props)
    this.createViz = this.createViz.bind(this)
    this.bindAnimations = this.bindAnimations.bind(this)
    this.stInstances = []
  }

  createViz(data, config, target) {
    const { width, height, className } = config
    const margin = {
      top: height * 0.075,
      bottom: height * 0.1,
      left: width * 0.075,
      right: width * 0.075
    }
    const innerHeight = height - margin.top - margin.bottom
    const innerWidth = width - margin.left - margin.right
    const svg = d3.select(target)
      .insert('svg', ':first-child')
        .attr('preserveAspectRatio', 'xMidYMid meet')
        .attr('viewBox', `0 0 ${width} ${height}`)
        .attr('width', width)
        .attr('height', height)
        .attr('class', className)


    // X-AXIS
    const xScale = d3.scaleBand()
      .domain(data.xScale)
      .range([0, innerWidth])

    const xAxis = d3.axisBottom(xScale)
      .ticks((data.xScale[1] - data.xScale[0]) / 2)
      .tickSizeInner(-height)
      .tickSizeOuter(0)

    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(${margin.left} ${height - margin.bottom})`)
      .call(xAxis)


    // Y-AXIS
    const yScale = d3.scaleLinear()
      .domain(data.yScale)
      .range([innerHeight, 0])

    const yAxis = d3.axisRight(yScale)
      .ticks(4)
      .tickSizeInner(width)
      .tickSizeOuter(0)
      .tickFormat(d3.format(".0\%"))

    svg.append('g')
      .attr('class', 'y-axis')
      .attr('transform', `translate(0 ${margin.top})`)
      .call(yAxis)


    // BARS
    if (config.drawBars) {
      svg.append('g')
        .attr('class', 'bars')
        .attr('transform', `translate(${margin.left + xScale.bandwidth() * 0.1} ${margin.top})`)
        .selectAll('.bar')
        .data(data.content)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('rx', 4)
        .attr('x', d => xScale(d.x))
        .attr('y', d => yScale(d.y))
        .attr('width', xScale.bandwidth() * 0.8)
        .attr('height', d => innerHeight - yScale(d.y))
        .attr('transform-origin', d => `0 ${innerHeight - yScale(d.y)}`)
    }


    // FIT CURVE
    if (config.drawFitCurve) {
      svg.append('path')
        .attr('class', 'fit-curve')
        .attr('transform', `translate(${margin.left + xScale.bandwidth() / 2} ${margin.top})`)
        .datum(data.content)
        .attr('d', d3.line()
          .curve(d3.curveBasis)
          .x(d => xScale(d.x))
          .y(d => yScale(d.y)))
    }

    if (config.drawMean) {
      const xScaleLinear = d3.scaleLinear()
        .domain([data.xScale[0], data.xScale[data.xScale.length - 1] + 1])
        .range([0, innerWidth])

      const meanGroup = svg.append('g')
        .attr('class', 'mean-g')
        .attr('transform', `translate(${margin.left + xScale.bandwidth() / 2 + xScaleLinear(data.mean)} 0)`)

      meanGroup.append('path')
        .attr('class', 'mean-path')
        .attr('d', `M0 0l0 ${height}`)

      meanGroup.append('text')
        .attr('class', 'mean-text')
        .text(`Mean: ${data.mean}`)
    }

    // THRESHOLD SHAPE
    if (config.drawThreshold) {
      const { threshold } = this.props

      const xScaleLinear = d3.scaleLinear()
        .domain([data.xScale[0], data.xScale[data.xScale.length - 1] + 1])
        .range([0, innerWidth])

      this.xScaleLinear = xScaleLinear

      const thresholdGroup = svg.append('g')
        .attr('class', 'threshold-g')
        .attr('transform', `translate(${margin.left + xScale.bandwidth() / 2} 0)`)

      const path = d => `${d3.line()
          .curve(d3.curveBasis)
          .x(d => xScale(d.x))
          .y(d => yScale(d.y))(d)}l0 ${innerHeight - yScale(data.content[data.content.length - 1].y) - 2}l${-innerWidth + xScale.bandwidth()} 0Z`

      svg.append('defs')
        .append('mask')
        .attr('id', `${className}-threshold-mask`)
        .attr('transform', `translate(${margin.left + xScale.bandwidth() / 2} ${margin.top})`)
        .append('rect')
        .attr('class', 'threshold-mask-rect')
        .attr('width', innerWidth - xScale.bandwidth())
        .attr('height', innerHeight)
        .attr('transform-origin', `${innerWidth - xScale.bandwidth()} 0`)
        .attr('fill', 'white')

      const thresholdShape = thresholdGroup.append('path')
        .attr('class', 'threshold-shape')
        .attr('transform', `translate(0 ${margin.top})`)
        .attr('mask', `url(#${className}-threshold-mask)`)
        .datum(data.content)
        .attr('d', path)

      const thresholdLineGroup = thresholdGroup.append('g')
        .attr('class', 'threshold-line-g')
        .attr('transform', `translate(${xScaleLinear(threshold)} 0)`)

      thresholdLineGroup.append('rect')
        .attr('class', 'threshold-handle-rect')
        .attr('width', 40)
        .attr('height', 24)
        .attr('rx', 12)
        .attr('tabindex', 0)
        .attr('aria-label', 'Handle')
        .attr('transform-origin', '20 12')
        .attr('transform', `translate(-20 ${innerHeight / 2})`)

      thresholdLineGroup.append('path')
        .attr('class', 'threshold-handle-arrow')
        .attr('d', 'M0 0l4 5l-4 5')
        .attr('transform', `translate(8 ${innerHeight / 2 + 7})`)

      thresholdLineGroup.append('path')
        .attr('class', 'threshold-handle-arrow')
        .attr('d', 'M0 0l-4 5l4 5')
        .attr('transform', `translate(-8 ${innerHeight / 2 + 7})`)

      thresholdLineGroup.append('path')
        .attr('class', 'threshold-line')
        .attr('d', `M0 0l0 ${height}`)

      thresholdLineGroup.append('rect')
        .attr('class', 'threshold-label-rect')
        .attr('width', 110)
        .attr('height', 24)
        .attr('rx', 4)

      thresholdLineGroup.append('text')
        .attr('class', 'threshold-label-text')
        .text('Threshold: 5.0')

      // Drag
      const dragStart = () => {
        thresholdLineGroup.classed('active', true)
        gsap.to('.dpd-interactive-prompt-wrap', { opacity: 0, ease: 'expo.out', duration: 0.8 })
        gsap.to('.dpd-interactive-results-wrap', { opacity: 1, ease: 'expo.out', delay: 0.2, duration: 0.8 })
        gsap.to('.dpd-scroll-arrow', { opacity: 1, ease: 'expo.out', delay: 0.2, duration: 0.8 })
        gsap.to('.dpd-scroll-arrow-label', { opacity: 1, ease: 'expo.out', delay: 0.2, duration: 0.8 })
      }
      const dragged = e => {
        const { setThreshold } = this.props
        const newX = Math.max(Math.min(e.x, innerWidth - xScale.bandwidth()), 0)
        const newThreshold = d3.format('0.1f')(xScaleLinear.invert(newX))

        setThreshold(config.id, newThreshold)
      }
      const dragEnd = () => {
        thresholdLineGroup.classed('active', false)
      }

      const drag = d3.drag()
        .on('start', dragStart)
        .on('drag', e => dragged(e, target))
        .on('end', dragEnd);
      thresholdLineGroup.call(drag)
    }
  }

  bindAnimations(animations, target, getTriggers, overrides = {}) {
    animations.forEach(section => {
      const timeline = gsap.timeline().set({}, {}, 1)

      section.animations.forEach(animation => {
        const toObject = Object.assign({
          ease: animation.ease || 'expo.out',
          duration: animation.duration || 0.5,
          stagger: animation.stagger ? 0.02 : 0,
          delay: animation.delay || 0
        }, animation.to)
        const insertionTime = animation.location === 'start' ? 0 : 0.5

        if (animation.from) {
          timeline.add(gsap.fromTo(`${target} ${animation.target}`, animation.from, toObject), insertionTime)
        } else {
          timeline.add(gsap.to(`${target} ${animation.target}`, toObject), insertionTime)
        }
      })

      timeline.pause()

      const trigger = getTriggers(section)

      const stInstance = ScrollTrigger.create({
        trigger,
        start: overrides.start || 'top bottom',
        end: overrides.end || 'bottom top',
        scrub: overrides.scrub || 0.2,
        animation: timeline
      })

      this.stInstances.push(stInstance)
    })
  }

  componentDidMount() {
    const { className, data, config, animations, animationTriggers, animationOverrides } = this.props

    this.createViz(data, config, `.${className}`)
    animations && this.bindAnimations(animations, `.${className}`, animationTriggers, animationOverrides)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.threshold !== this.props.threshold) {
      const { className, threshold } = this.props
      const newX = this.xScaleLinear(threshold)

      d3.select(`.${className} .threshold-label-text`)
        .text(`Threshold: ${d3.format('0.1f')(threshold)}`)

      gsap.to(`.${className} .threshold-line-g`, { x: newX, duration: 0.1 })
      gsap.to(`.${className} .threshold-mask-rect`, { scaleX: 1 - (threshold - 1) / 9, duration: 0.1 })
    }
  }

  componentWillUnmount() {
    this.stInstances.forEach(instance => instance.kill())
  }

  render() {
    const { className, label } = this.props
    return (
      <div className={`dpd-viz ${className} flex-center`}>
        {label && <p className="dpd-viz-label">{label}</p>}
      </div>
    )
  }
}

export default Viz
