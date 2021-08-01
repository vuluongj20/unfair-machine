import React, { Component } from 'react'
import './Redundancy.css'

import Model from '../model/Model'
import whatInput from 'what-input'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const bodyTop = [
  'Normally, we would expect that if an algorithmic model has no access to sensitive information, then its predictions will be more equal or equitable. This turns out not to be the case. Try it with the model below.'
]
const introFunctions = {
  intro: 'Run the model with the variable Sex, and then without. Take note of the positive prediction rate for male and female applicants in both cases.',
  introLabel: cta => `${cta.charAt(0).toUpperCase() + cta.slice(1)} on variables to select/deselect them. When you're done, ${cta} \"Run model\" to start.`
}
const bodyMid = [
  'The positive prediction rates among male and female applicants are roughly the same whether we use Sex or not. In both cases, male applicants receive positive predictions more frequently than female applicants, at approximately the same ratios.',
  'This happens because of an unexpected leakage. When we removed the variable Sex from the model, information on the applicants\' sex wasn\'t fully removed. It still exists within the remaining variables, like Capital Gain and Education. We say that information has \"leaked\" from Sex into Capital Gain, Education, and Occupation.'
]
const illustration = {
  variables: [ 'C. GAIN', 'AGE', 'SEX', 'RACE', 'EDU.', 'OCC.' ],
  circle: 2,
  arrows: [[2, 0], [2, 4], [2, 5]]
}
const bodyBottom = [
  'This leakage happens due to correlational relationships between variables. For example, men have historically had higher incomes than women. A large part of this is due to unequal divisions of labor and existing stigma against women in the workplace. This means that if an applicant has a high income, they are more likely to be male than female. As such, in a dataset, information on an applicant\'s sex is partially embedded in their income, in this case the Capital Gain variable. The same goes for other variables like Education and Occupation.',
  'Now, there is not a definite relationship between Sex and these other variables. Many women still have higher levels of income than the male median. Many are accomplished academics with high-paying, respectable jobs. The information leakage that we see here is an aggregative phenomenon. It only arises in large datasets where we often lose sight of individual cases and only consider the overall population\'s statistics. The leakage is of concern in this case because algorithmic models do learn from these population statistics. If there is some bias in the statistics, then the models will also reflect those biases in their predictions.',
  'It is difficult, sometimes impossible, to effectively remove information leakages. First, there is no easy way to find out where sensitive information might be hiding among non-sensitive variables, especially in large and complex datasets. Second, even if we could do so, successfully removing all of the sensitive information, the remaining dataset would not be a good representation of the sample population. For example, to remove the correlation between Sex and Education, we would have to modify values in the Education column. Such tampering of the input data risks creating new, unintentional biases, defeating the point of blinding in the first place.'
]

const isBrowser = typeof window !== "undefined"

class Redundancy extends Component {
  stInstance = null

  constructor(props) {
    super(props)
    this.state = {
      wrapWidth: null
    }
    this.updateWrapWidth = this.updateWrapWidth.bind(this)
  }
  getIntro() {
    if (isBrowser) {
      return {
        intro: introFunctions.intro,
        introLabel: introFunctions.introLabel(whatInput.ask() === 'mouse' ? 'click' : 'tap')
      }
    } else {
      return null
    }
  }
  updateWrapWidth() {
    const quoteWrap = document.getElementById('gur-illustration-wrap')
    quoteWrap && this.setState({
      wrapWidth: quoteWrap.getBoundingClientRect().width
    })
  }
  componentDidMount() {
    this.updateWrapWidth()
    window.addEventListener('resize', this.updateWrapWidth)

    setTimeout(() => {
      if (window) {
        const DrawSVG = require('../../../resources/DrawSVG')
        gsap.registerPlugin(DrawSVG)
      }
      this.stInstance = ScrollTrigger.create({
        trigger: '.gur-illustration-wrap',
        start: 'top bottom',
        end: 'top center',
        scrub: 0.4,
        animation: gsap.timeline()
          .add(gsap.fromTo('.gur-illustration-circle-path', 
            { drawSVG: 0 }, { drawSVG: `100%`, ease: 'expo.out', duration: 0.6 }), 0)
          .add(gsap.fromTo('.gur-illustration-arrow-line', 
              { drawSVG: 0 }, { drawSVG: `100%`, ease: 'expo.out', duration: 0.8, stagger: 0.05 }), 0)
          .add(gsap.fromTo('.gur-illustration-arrow-head', 
              { drawSVG: 0 }, { drawSVG: `100%`, ease: 'expo.out', duration: 0.4, stagger: 0.05 }), 0.4)
      })
    }, 0)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWrapWidth)
  }

  render() {
    const { data } = this.props
    const { wrapWidth } = this.state

    return (
      <div className="gu-fairness article-wrap my-4">
        <div className="heading-wrap center mt-3">
          <div className="heading-inner-wrap">
            <h1 className="heading-number">3.</h1>
            <h2 className="heading">Information Leakage</h2>
            <div className="heading-quote-wrap mt-2">
              <div className="heading-quote-line mb-2" />
            </div>
          </div>
        </div>
        <div className="text-wrap center mb-3">
          {bodyTop.map((para, index) => {
            return (
              <p className="guf-text" key={index}>
                {para}
              </p>
            )
          })}
        </div>
        <div className="surface by">
          <div className="container">
            <Model id="gur" data={data} intro={this.getIntro()} />
          </div>
        </div>
        <div className="text-wrap center my-3">
          {bodyMid.map((para, index) => {
            return (
              <p className="guf-text" key={index}>
                {para}
              </p>
            )
          })}
        </div>
        <div 
          className="quote-wrap no-bt no-bb center mt-3 gur-illustration-wrap"
          id="gur-illustration-wrap"
        >
          <div className="gur-illustration-padding" />
          <div className="gur-illustration-inner-wrap">
            {illustration.variables.map((variable, ind) => {
              const arrowIndices = illustration.arrows.filter(el => el[0] === ind)
              return (
                <div key={ind} className="gur-variable-wrap">
                  {ind === illustration.circle && (
                    <svg 
                      width="73" 
                      height="37" 
                      viewBox="0 0 73 37" 
                      fill="none"
                      className="gur-illustration-circle absolute-center"
                    >
                      <path 
                        d="M34.0005 8.00021C49.5005 1.50021 67.8005 7.50031 71.0005 17.5003C75.0005 30.0003 45.5002 39.0005 19.0003 34.9998C-6.36862 31.1699 -3.99965 3.49945 26.0005 1.50021C42.5 0.400669 55.1667 7.16663 60.5 12" 
                        stroke="#FFF6E0" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        className="gur-illustration-circle-path"
                      />
                    </svg>
                  )}
                  {wrapWidth && arrowIndices.map((arrow, ind) => {
                    const arrowWidth = wrapWidth / (illustration.variables.length - 1) * Math.abs(arrow[1] - arrow[0]) - 32
                    const flipped = arrow[1] - arrow[0] < 0
                    return (
                      <div 
                        key={ind} 
                        className={`gur-illustration-arrow-wrap ${flipped ? 'flipped' : ''}`}
                      >
                        <svg
                          width={arrowWidth} 
                          height="120"
                          viewBox={`0 0 ${arrowWidth} 120`} 
                          fill="none"
                          className="gur-illustration-arrow"
                          stroke="#FFF6E0" 
                          strokeWidth="2" 
                          strokeLinecap="round"
                        >
                          <path 
                            d={`M2 120C1 -32 ${arrowWidth} -32 ${arrowWidth - 2} 120`} 
                            className="gur-illustration-arrow-line"
                          />
                          <path 
                            d={`M${arrowWidth - 8} 114L${arrowWidth - 2} 120L${arrowWidth + 4} 114`} 
                            className="gur-illustration-arrow-head"
                          />
                        </svg>
                      </div>
                    )
                  })}
                  <p className="gud-head fw-bold ff-founders-grotesk fc-dark">{variable}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="text-wrap center my-3">
          {bodyBottom.map((para, index) => {
            return (
              <p className="guf-text" key={index}>
                {para}
              </p>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Redundancy
