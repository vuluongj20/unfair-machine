import React, { Component } from 'react'
import './Fairness.css'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const fairnessQuote = 'The main stength of group unawareness is that it makes decision-making algorithms more procedurally fair.'
const fairnessContent = [
  'We can split fairness into two categories: procedural fairness and outcome fairness. An action or event A is procedurally fair if the process involved in it is fair. For example, an impartial jury is a necessary (but not sufficient) condition for a procedurally fair trial. On the other hand, we judge outcome fairness based on the consequences that arise from A, not A itself. For example, an equitable housing approval process that takes affirmative steps to accommodate low-income families satisfies outcome fairness, because the resulting housing distribution is more equitable.',
  'It is easy to see how group-unaware algorithms are more procedurally fair. Since the decision-makers and the algorithm itself don\'t know about the demographic identities of the applicants, they cannot actively discriminate against any specific demographic group. This makes them impartial (at least when it comes to the protected attributes that were left out), which is an important criterion for procedural fairness.'
]
const star = {
  src: '/images/group-unawareness/star.svg',
  alt: 'Blue asterisk'
}

class Fairness extends Component {
  stInstances = []

  componentDidMount() {
    this.stInstances.push(
      ScrollTrigger.create({
        trigger: '.gu-fairness.article-wrap',
        start: 'top bottom',
        end: 'bottom top',
        animation: gsap.to('.guf-star', { rotate: 60, duration: 1 }),
        scrub: 0.5
      })
    )
  }

  componentWillUnmount() {
    this.stInstances.forEach(instance => instance.kill())
  }

  render() {
    return (
      <div className="gu-fairness article-wrap py-4 py-2-sm row">
        <div className="col-8">
          <p className="quote">{fairnessQuote}</p>
          <div className="guf-text-wrap mt-2 text-col-2">
            {fairnessContent.map((content, index) => {
              return <p className="guf-text" key={index}>{content}</p>
            })}
          </div>
        </div>
        <div className="guf-star-wrap padding col-4 flex-center">
          <img 
            className="guf-star"
            src={star.src} 
            alt={star.alt} 
          />
        </div>
      </div>
    )
  }
}

export default Fairness
