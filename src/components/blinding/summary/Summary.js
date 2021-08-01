import React, { Component } from 'react'
import './Summary.css'

const headingQuote = 'Blinding is an intuitive strategy that helps improve a model\'s procedural fairness, but it has little effect on the outcome distribution.'
const body = ['The existence of information leakages and our inability to completely remove those leakages mean that blinded models are not much more fair outcome-wise than their non-blinded counterparts. Some algorithm designers consider this a fatal flaw. They take equality or equity as an essential requirement for fairness. In the next chapter, we will explore a different strategy - equality of outcome - that satisfies just that.']

class Summary extends Component {
  render() {
    return (
      <div className="gu-fairness article-wrap my-4">
        <div className="heading-wrap center mt-3">
          <div className="heading-inner-wrap">
            <h1 className="heading-number">4.</h1>
            <h2 className="heading">In the End</h2>
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

export default Summary
