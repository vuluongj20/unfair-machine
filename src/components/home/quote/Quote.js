import React, { Component } from "react"
import "./Quote.css"

import gsap from "gsap"

const quotes = [
  "Advanced computer algorithms have helped facilitate and automate human decision-making in recent years. Algorithms can now predict, with varying degrees of accuracy, the likelihood of a loan applicant paying off their loan, a criminal defendant reoffending, a college applicant performing well in class if given admission, and much more.",
  "The consequential nature of the decisions involved raises important moral questions: what responsibilities do we have with these algorithms? What are the requirements of fairness when it comes to automated decision-making? This series explores some of the proposed requirements and compares them with one another. There is no single answer. People disagree. But that's what makes it so fascinating.",
]

class Quote extends Component {
  componentDidMount() {
    document.addEventListener(
      "media-loaded",
      () => {
        gsap.to(".home-quote-wrap", {
          opacity: 1,
          ease: "expo.out",
          duration: 1.6,
        })
      },
      { once: true }
    )
  }

  render() {
    return (
      <div className="home-quote-wrap article-section by py-3">
        <div className="container">
          {quotes.map((quote, index) => {
            return (
              <p
                id={`home-quote-${index}`}
                className="home-quote quote"
                key={index}
              >
                {quote}
              </p>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Quote
