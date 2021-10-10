import React, { Component } from "react"
import "./Desert.css"

const body = [
  "The conceptual difference between outcomes and opportunity touches at the oft-discussed idea of moral desert. We say that a student who works hard deserves high grades and acceptance into good schools. Likewise, a person who commits a crime deserve proportional punishment for that crime. Equality of Opportunity distinguishes itself by asserting that the model should only give out positive predictions to those who deserve them.",
  'However, "A deserves X" is usually a blanket statement that warrant further exploration and justification. How exactly is A entitled to X? What theoretical framework could underlie such entitlement?',
  "One way to approach this is to take the perspective of the decision-makers. Admissions officers want to admit students who are likely to enroll and likely to succeed at their school. Banks want to give out loans to those who are likely to pay off those loans. Decision-makers get to decide who is deserving of the benefits that they want to distribute. This approach works for cases where the decision-maker has an unbiased interest in who to select. However, it fails to offer a substantive account of desert. Rather, it offers a purely descriptive criterion: whoever the decision-maker thinks is worthy or deserving of X is in fact worthy or deserving of it.",
  'Another more substantive approach explores the "good" nature of moral, intellectual, and physical excellence. A virtuous citizen deserves praise and respect because we need to promote virtues and moral discipline. The need for such promotion may derive from the intrinsically "good" nature of virtues or the utilitarian need for social order. A hard-working student deserves high grades because high grades help promote intellectual excellence, which is desirable at educational institutions. The promotion of excellence is a more substantive account of desert. Still, it opens up a host of other, more tricky questions, such as what constitutes goodness and why it is desirable. This by no means undermines the excellence approach. Rather, it is an inevitable consequence of a substantive inquiry into what we often assume to the true.',
  "Many share the intuition that Equality of Opportunity is a better conception of fairness than Equality of Outcome because it takes into account the idea of moral desert. We want to give positive predictions only to those who deserve them, not everyone. However, if our discussion on the nature of moral desert has shown anything, it's that we need to put more thought into systemizing and verifying our initial intuitions about what is fair and what is good.",
]

class Desert extends Component {
  render() {
    return (
      <div className="dp-fairness article-wrap my-4">
        <div className="heading-wrap center mt-3">
          <div className="heading-inner-wrap">
            <h1 className="heading-number">3.</h1>
            <h2 className="heading">Moral Desert</h2>
            <div className="heading-quote-wrap mt-2">
              <div className="heading-quote-line" />
            </div>
          </div>
        </div>
        <div className="row dp-fairness-row mt-2">
          <div className="text-wrap center">
            <div className="guf-text-wrap">
              {body.map((para, index) => {
                return (
                  <p className="guf-text" key={index}>
                    {para}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Desert
