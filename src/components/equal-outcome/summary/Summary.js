import React, { Component } from "react"
import "./Summary.css"

const headingQuote =
  "Equality of Outcome is an equality-based conception of fairness, but there are concerns about its rather stringent requirements."
const body = [
  "Outcome-equal models prioritize outcome fairness over procedural fairness. The quantity of equalization - the prediction rate - is a simple yet effective one. However, there are concerns about its effects on the models' accuracy, and whether it is the right quantity to equalize in the first place.",
  "In the next chapter, we will explore Equality of Opportunity, another conception of fairness that works with a different, potentially more appealing quantity of equalization.",
]

class Summary extends Component {
  render() {
    return (
      <div className="gu-fairness article-wrap my-4">
        <div className="heading-wrap center mt-3">
          <div className="heading-inner-wrap">
            <h1 className="heading-number">4.</h1>
            <h2 className="heading">In a Nutshell</h2>
            <div className="heading-quote-wrap mt-2">
              <div className="heading-quote quote-small mb-2">
                {headingQuote}
              </div>
              <div className="heading-quote-line mb-2" />
            </div>
          </div>
        </div>
        <div className="text-wrap center mt-2">
          {body.map((content, index) => {
            return (
              <p className="guf-text" key={index}>
                {content}
              </p>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Summary
