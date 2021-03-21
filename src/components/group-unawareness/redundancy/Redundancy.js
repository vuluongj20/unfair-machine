import React, { Component } from 'react'
import './Redundancy.css'

import Sandbox from './sandbox/Sandbox';

const redundancyQuote = 'However, group-unaware algorithms are not more fair outcome-wise.'
const redundancyContentAbove = [
  'Intuitively, we expect that if an algorithm doesn\'t have access to information on protected groups, then it cannot discriminate with regard to those groups, thus producing predictions are are more fair. This turns out not to be the case. Try it with the sandbox below. First, train the model with all the available variables. Record the acceptance rates for men vs women. Then, restart, deselect Sex, and train the model again. Compare the acceptance rates now and the recorded rates from before. You should see that there is barely any change.'
]
const redundancyContentBelow = [
  'So, what\'s going on? Well, in drawing the conclusion, we assumed that the sensitive information has been completely removed. The fact is, group unawareness doesn\'t do a very good job at this. Even after removing all of the sensitive attributes (e.g. race, sex), protected information still exists in the remaining attributes. Take the example of sex. Men have historically had higher income than women. So, information on an applicant\'s sex is partially embedded in their income - if an applicant has a high income, it is more likely that they are male than female. Now, there is not a definite relationship between income and sex - many women have higher income than the male average. Still, given this and many other correlational relationships (e.g. that men have historically had a higher level of education than women, due to unequal access to education), we can indeed build a pretty good model to predict an applican\'t sex based on their income, education, occupation, etc. This phenomenon is called \"information leakage\", where information about an attribute leaks into other attributes through correlational relationships.'
]
const star = {
  src: '/images/group-unawareness/star.svg',
  alt: 'Blue asterisk'
}

class Redundancy extends Component {
  render() {
    const { data } = this.props

    return (
      <div className="gu-fairness article-wrap py-4 py-2-sm row">
        <div className="padding col-2"></div>
        <div className="col-8">
          <p className="quote">{redundancyQuote}</p>
          <div className="guf-text-wrap mt-2 mb-2">
            {redundancyContentAbove.map((para, index) => {
              return (
                <p className="guf-text" key={index}>
                  {para}
                </p>
              )
            })}
          </div>
          <hr />
          <Sandbox data={data} />
          <hr />
          <div className="guf-text-wrap mt-2 mb-4">
            {redundancyContentBelow.map((para, index) => {
              return (
                <p className="guf-text" key={index}>
                  {para}
                </p>
              )
            })}
          </div>
        </div>
        <div className="padding col-2"></div>
      </div>
    )
  }
}

export default Redundancy
