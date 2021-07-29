import React, { Component } from 'react'
import './Fairness.css'

const body = [
  'Equality of outcome, as the name suggests, adopts a specific conception of outcome fairness. It considers an algorithmic model M to be fair if the model makes predictions at similar rates across all demographic groups.',
  '"Rate" here refers to the prediction rate. For binary models, where the algorithm chooses between two options, the prediction rate is simply the rate at which the algorithm chooses one option instead of the other. In the defendant classification model above, the prediction rate is simply the number of times the model classifies a defendant as "high-risk", as opposed to "not high-risk". We can generalize this to multi-class, non-binary models, where the algorithm chooses between more than two options. Here, for the sake of simplicity, we will stick to the binary model.',
  'Equality of outcome is a straightforward conception of outcome fairness. When we think of fairness in terms of outcomes, one of the first criteria we think of is equality. Most think of equality as the duty to treat people the same regardless of their age, sex, race, or other arbitrary attributes that are not in their control. Given this basic understanding, we musk ask further: equality in terms of what? What exactly is the quantity that we must equalize among all demographic groups?',
  'Equality of outcome offers a compelling answer to this question: in terms of the final outcomes themselves, or more specifically in the case of decision-making algorithms, in terms of the prediction rates. It does not require that everyone get the same outcomes. Each person must still put in the effort to reap the rewards. Rather, the equality requirement is aggregative: on average, no demographic group should be more likely to get positive predictions than others.',
  'Such aggregative criterion of outcome fairness is based on luck-egalitarianism. This view is concerned with equality given the arbitrariness of certain human attributes, like race and sex. No one has control over the attributes with which they are born. As such, no one should be more or less likely to succeed based on their gender or race. In an ideal world, when considering predictive algorithms, we should see no significant difference in prediction rates among demographic groups. This drives the equalization of prediction rates as proposed by equality of outcome.'
]

class Fairness extends Component {
  render() {
    return (
      <div className="dp-fairness article-wrap my-4">
        <div className="heading-wrap center mt-3">
          <div className="heading-inner-wrap">
            <h1 className="heading-number">2.</h1>
            <h2 className="heading">Outcome Fairness</h2>
            <div className="heading-quote-wrap mt-2">
              <div className="heading-quote-line" />
            </div>
          </div>
        </div>
        <div className="text-wrap center mt-2">
          <div className="guf-text-wrap">
            {body.map((para, index) => {
              return <p className="guf-text" key={index}>{para}</p>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Fairness
