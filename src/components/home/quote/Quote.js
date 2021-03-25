import React, { Component } from 'react'
import './Quote.css'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const illustration = {
  src: '/images/global/times.svg',
  alt: 'Cross'
}

const quotes = [
  'Advanced computer algorithms have helped facilitate and automate human decision-making in recent years. Algorithms can now predict, with varying degrees of accuracy, the likelihood of a loan applicant paying off their loan, a criminal defendant reoffending, a college applicant performing well in class if given admission, and much more.',
  'The consequential nature of the decisions involved raises important moral questions: what responsibilities do we have with these algorithms? What are the requirements of fairness when it comes to automated decision-making? This series explores some of the proposed requirements and compares them with one another. There is no single answer. People disagree. But that\'s what makes it so intriguing.',
]

class Quote extends Component {
  stInstances = []

  componentDidMount() {
    quotes.forEach((_, index) => {
      this.stInstances.push(
        ScrollTrigger.create({
          trigger: `#home-quote-${index}`,
          start: 'top bottom',
          end: 'top center',
          scrub: 0.4,
          animation: gsap.fromTo(`#home-quote-${index}`, { opacity: 0 }, 
            { opacity: 1, ease: 'expo.out', duration: 1 })
        })
      )
    })
  }

  componentWillUnmount() {
    this.stInstances.forEach(instance => instance.kill())
  }

  render() {
    return (
      <div className="article-section py-4 py-2-sm">
        {quotes.map((quote, index) => {
          return (
            <p 
              id={`home-quote-${index}`} 
              className="quote home-quote col-10" 
              key={index}
            >
              {quote}
            </p>
          )
        })}
      </div>
    )
  }
}

export default Quote
