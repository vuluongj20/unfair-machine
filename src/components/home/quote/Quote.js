import React, { Component } from 'react'
import './Quote.css'

const quotes = [
  'Advanced computer algorithms have helped facilitate and automate human decision-making in recent years. Algorithms can now predict, with varying degrees of accuracy, the likelihood of a loan applicant paying off their loan, a criminal defendant reoffending, a college applicant performing well in class if given admission, and much more.',
  'The consequential nature of the decisions involved raises important moral questions: what responsibilities do we have with these algorithms? What are the requirements of fairness when it comes to automated decision-making? This series explores some of the proposed requirements and compares them with one another. There is no single answer. People disagree. But that\'s what makes it so intriguing.',
]

class Quote extends Component {
  render() {
    return (
      <div className="article-section by py-4">
        <div className="container">
          {quotes.map((quote, index) => {
            return (
              <p 
                id={`home-quote-${index}`} 
                className="quote home-quote" 
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
