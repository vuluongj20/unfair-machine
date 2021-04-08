import React, { Component } from 'react'
import './Fairness.css'

const fairnessProContent = [
  'Equal Opportunity increases outcome fairness differently from Demographic Parity. If we implement Equal Opportunity for Wichita State, then out of all those who will enroll at Wichita, African-American students will be as likely to get a positive prediction as Caucasian students. The outcome fairness comes in the form of equality of opportunity, as opposed to absolute equality in Demographic Parity. This is more appealing to many who consider Demographic Parity overly demanding or even discriminatory.',
  'Equality of opportunity differs from absolute equality in the target of equalization. Instead of saying that the outcomes should be equal, we now say that is is the opportunity to receive positive outcomes that should be equal. We tend to agree more with equality of opportunity as compared to absolute equality due to a fundamental belief in the value of effort. It would seem absurd to reward everyone equally regardless of the amount of effort they put in. Equality of opportunity in this case only requires that everyone who is worthy of receiving positive results be equally likely to receive them regardless of who their skin color, gender, or anything other sensitive attributes. ',
  'The debate surrounding Group Unawareness, Demographic Parity, and Equal Opportunity highlights the complexity that we inevitably face when applying fairness to decision-making algorithms. Our choice among these conceptions may differ. What matters here is not the correct answer - there is little consensus on what that might be - but rather the ability and willingness to closely examine our core values and effectively articulate why we believe in them.'
]

class Fairness extends Component {
  render() {
    return (
      <div className="dp-fairness article-wrap py-4 py-2-sm">
        <div className="row dp-fairness-row">
          <div className="text-wrap center">
            <div className="guf-text-wrap">
              {fairnessProContent.map((para, index) => {
                return <p className="guf-text" key={index}>{para}</p>
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Fairness
