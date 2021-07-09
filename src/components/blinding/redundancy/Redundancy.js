import React, { Component } from 'react'
import './Redundancy.css'

import Model from '../model/Model'
import whatInput from 'what-input'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const bodyTop = [
  'Intuitively, we expect that if an algorithm has no access to any sensitive attributes, then its predictions will be more equal or equitable among protected groups. This turns out not to be the case. Try it with the sandbox below.'
]
const introFunctions = {
  intro: 'Train the model with and without the attribute \"Sex\". Take note of the positive prediction rate for male and female applicants in both cases.',
  introLabel: cta => `${cta.charAt(0).toUpperCase() + cta.slice(1)} on attributes to select/deselect them. When you're done, ${cta} \"Run model\" to start.`
}
const bodyMid = [
  'The positive prediction rates among male and female applicants are roughly the same whether we use the attribute "Sex" or not. In either case, male applicants receive positive predictions more frequently than female applicants. The ratio between male and female applicants remain roughly the same.',
  'So, why does this happen? The answer is that we haven\'t fully removed information on the applicants\' sex from the dataset. It still exists among the remaining attributes, in a phenomenon called information leakage. Men have historically had higher income than women. A large part of this is due to unequal division of labor and stigma against women in the workplace. This means that if an applicant has a high income, then they are more likely to be male than female. As such, in a dataset, information on an applicant\'s sex is partially embedded in their income.'
]
const illustration = {
  variables: [ 'C. GAIN', 'AGE', 'SEX', 'RACE', 'EDU.', 'OCC.' ],
  circle: 2,
  arrows: [[2, 0], [2, 4], [2, 5]]
}
const bodyBottom = [
  'Now, there is not a definite relationship between these two variables - many women still have higher income than the average for men. Still, given this and many other correlational relationships (e.g. the fact that men have historically had a higher level of education than women, due to unequal access to education), we can indeed build a decently well-performing model that can predict an applicant\'s sex based on other, non-sensitive attributes like income and education level.',
  'Such leakage is difficult to remove. First, there is no easy way to find out where the sensitive information is hiding among non-sensitive attributes, especially for large and complex datasets. Second, even if we could do so in a quantitative way and successfully removed the sensitive information, the remaining dataset would still not be a good representation of the sample population. For example, in order to remove the correlation between sex and education, we would have to modify values in the education column. Such tampering of the input data risks creating new, unintentional biases, which defeats the point of blinding in the first place.'
]
const bodyConclusion = ['In the end, group unawareness is an effective way to make a model more fair in the procedural sense, but it has little effect on the model\'s outcome fairness. For some algorithm designers, this is a fatal weakness. In the next chapter, we will explore demographic parity, a different conception of fairness that sacrifices procedural fairness for much stronger outcome fairness.']

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
