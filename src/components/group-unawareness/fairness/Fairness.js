import React, { Component } from 'react'
import './Fairness.css'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const fairnessQuote = 'There are two types of fairness: procedural and outcome fairness. Group unwareness can help achieve the former.'
const fairnessContent = [
  'Procedural fairness is fundamentally different from outcome fairness. An action or event A is procedurally fair if the process involved in it is fair. For example, an impartial jury is a necessary (but not sufficient) condition for a procedurally fair trial. On the other hand, we judge outcome fairness based on the results and consequences that come from A, not A itself. For example, an equitable housing approval process that takes affirmative steps to accommodate low-income families satisfies outcome fairness, because the resulting housing distribution is more equitable.',
  'Group-unaware algorithms are more fair in the procedural sense. Since the algorithm itself has no access to sensitive attributes, they cannot actively discriminate against any specific, protected group based on those attributes. This makes them impartial (at least when it comes to the omitted attributes), which is an important criterion for procedural fairness.'
]

class Fairness extends Component {
  render() {
    return (
      <div className="gu-fairness article-wrap mt-3">
        <div className="quote-wrap center">
          <p className="quote">{fairnessQuote}</p>
        </div>
        <div className="text-wrap center mt-3">
          {fairnessContent.map((content, index) => {
            return <p className="guf-text" key={index}>{content}</p>
          })}
        </div>
      </div>
    )
  }
}

export default Fairness
