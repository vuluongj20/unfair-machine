import React, { Component } from 'react'
import './Fairness.css'

const body = [
  'Equality of Opportunity uses true positive rates as a tangible, quantifiable way to represent the somewhat abstract idea of opportunity. To calculate the true positive rate, we ask: out of all students who, if given admission, would enroll at Wichita (represented by the solid circle in the diagram below), how many were correctly predicted as so (the shaded area).',
  'The true positive rate is calculated as the number of students in the shaded area divided by the number of those in the "would enroll" area. The denominator in this fraction plays a key role in our conceptualization of opportunity. We want to equalize rates among demographic groups, but that equalization is conditioned upon the ground truth - whether or not each student would enroll if given admission. Equalization of true positive rates would mean that if a student would enroll, then they should be as likely to be predicted as so as their peers from other demographic groups. Equalization of the prediction rates, which is what Equality of Outcome requires, does the same thing but without the "if" phrase.'
]

class Fairness extends Component {
  render() {
    return (
      <div className="dp-fairness article-wrap my-4">
        <div className="heading-wrap center mt-3">
          <div className="heading-inner-wrap">
            <h1 className="heading-number">2.</h1>
            <h2 className="heading">Opportunity vs. Outcome</h2>
            <div className="heading-quote-wrap mt-2">
              <div className="heading-quote-line" />
            </div>
          </div>
        </div>
        <div className="row dp-fairness-row mt-2">
          <div className="text-wrap center">
            <div className="guf-text-wrap">
              {body.map((para, index) => {
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
