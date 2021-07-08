import React, { Component } from 'react'
import './Fairness.css'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const headingQuote = 'Blinded algorithms are more procedurally fair as opposed to non-blinded versions.'
const body = [
  'Fairness as a concept can be largely divided into two types: procedural and outcome fairness. These two exist independently: the satisfaction of one does not guarantee that of the other. An action or event A is procedurally fair if the process leading to or involved in it is fair. For example, a coin toss is considered procedurally fair because the toss itself is impartial, unbiased.',
  'On the other hand, we judge outcome fairness based on the results and consequences that come from the action A, not A itself. For example, an equitable housing approval process that takes affirmative steps to accommodate low-income families may satisfy some form of outcome fairness, because the resulting housing distribution is more equitable.',
  'It is important to separate procedural from outcome fairness as they are separate concepts that may come into conflict in some cases. The equitable housing approval process is conceivably fair outcome-wise but not so procedure-wise (it is aware of and treats applicants differently based on their demographic identity). Conversely, blinded algorithmic models are more fair procedure-wise - they have no access to sensitive demographic information - but not much so in terms of the outcomes. That is due to a puzzling phenomenon called information leakage.'
]

class Fairness extends Component {
  render() {
    return (
      <div className="gu-fairness article-wrap my-4">
        <div className="heading-wrap center mt-3">
          <div className="heading-inner-wrap">
            <h1 className="heading-number">2.</h1>
            <h2 className="heading">Procedural Fairness</h2>
            <div className="heading-quote-wrap mt-2">
              <div className="heading-quote quote-small mb-2">{headingQuote}</div>
              <div className="heading-quote-line mb-2" />
            </div>
          </div>
        </div>
        <div className="text-wrap center mt-2">
          {body.map((content, index) => {
            return <p className="guf-text" key={index}>{content}</p>
          })}
        </div>
      </div>
    )
  }
}

export default Fairness
