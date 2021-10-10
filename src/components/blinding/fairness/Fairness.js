import React, { Component } from "react"
import "./Fairness.css"

const headingQuote =
  "Blinded models are more procedurally fair compared to similar non-blinded ones."
const body = [
  "Fairness can be largely divided into two broad types: procedural and outcome fairness. These exist independently: the satisfaction of one does not guarantee that of the other. A decision or event is procedurally fair if the process leading to or involved in it is fair. For example, an unbiased coin toss is considered procedurally fair because the toss itself is impartial, not biased toward any particular side.",
  "On the other hand, we judge a decision's outcome fairness based on its results. For example, a  housing approval process that takes affirmative steps to accommodate low-income families may satisfy some conception of outcome fairness if the resulting housing distribution is more equal or equitable.",
  "It is necessary to separate procedural from outcome fairness because they are independent concepts that may sometimes be in conflict. The equitable housing approval process is conceivably fair outcome-wise but not much so procedure-wise. It is aware of and treats applicants differently based on their demographic identity. In this way, it sacrifices procedural fairness for more outcome fairness, specifically housing equitability.",
  "Blinded algorithmic models, on the other hand, suffer from the opposite dichotomy in terms of fairness. They exhibit a higher level of procedural fairness by virtue of not explicitly using any sensitive demographic information. Nonetheless, they still fail to guarantee outcome fairness. This is due to a puzzling phenomenon called information leakage.",
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

export default Fairness
