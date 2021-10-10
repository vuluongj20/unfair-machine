import React, { Component } from "react"
import "./Summary.css"

import { parseReferenceLinks } from "../../../utils/references"

const body = [
  "Three chapters, three conceptions of what fairness requires. Decision-making algorithms may seem inherently impartial since fundamentally they are logical systems that behave according to predetermined rules. However, the real world is full of biases and inequalities, and those biases/inequalities may leak into even the most logical of systems. We may address this issue by enforcing a strict non-awareness protocol (Blinding), equalizing the outcomes (Equality of Outcome) or the opportunity to receive positive outcomes (Equality of Opportunity).",
  "Each conception has its pros and cons. Each touches on different theories about fairness, moral worth, and even intrinsic goodness. It is up to all stakeholders, from algorithm designers to decision makers and the people affected by those decision, to balance the performance and fairness constraints when constructing and approving a model that is suitable for their needs.",
  "The stories and discussions in the these few chapters merely serve as starting points for more critical exanimations of how algorithmic models work and how we might make them more fair. Intuitions abound. It is easy to develop an initial reaction to a proposed conception of fairness. Such reactions may be biased given our differing backgrounds and experiences. To combat this, we must ask ourselves: what principles might justify and drive one approach over another? What, in turn, makes those principles sound, desirable, and generalizable?",
]

class Summary extends Component {
  render() {
    return (
      <div className="gu-fairness article-wrap my-4">
        <div className="heading-wrap center mt-3">
          <div className="heading-inner-wrap">
            <h1 className="heading-number">4.</h1>
            <h2 className="heading">Moving Forward</h2>
            <div className="heading-quote-wrap mt-2">
              <div className="heading-quote-line mb-2" />
            </div>
          </div>
        </div>
        <div className="text-wrap center mt-2">
          {body.map((content, index) => {
            return (
              <p className="guf-text" key={index}>
                {parseReferenceLinks(content)}
              </p>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Summary
