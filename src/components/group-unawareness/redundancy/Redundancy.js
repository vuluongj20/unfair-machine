import React, { Component } from 'react'
import './Redundancy.css'

import Model from '../model/Model'
import whatInput from 'what-input'

const quote = 'However, group-unaware algorithms are not more fair outcome-wise.'
const contentTop = [
  'Intuitively, we expect that if an algorithm doesn\'t have access to information on protected groups, then it cannot discriminate with regard to those groups, thus producing predictions are are more fair. This turns out not to be the case. Try it with the sandbox below.'
]
const introFunctions = {
  intro: 'Train the model with and without the attribute \'Sex\'. Take note of the positive prediction rate for male and female applicants in both cases.',
  introLabel: cta => `${cta.charAt(0).toUpperCase() + cta.slice(1)} on attributes to select/deselect them. When you're done, ${cta} \'Run model\' to start.`
}
const contentBottom = [
  'So, why does this happen? Well, in drawing the conclusion, we assumed that the sensitive information has been completely removed. However, the truth is group unawareness doesn\'t do a very good job at this. Even after removing all of the sensitive attributes (e.g. race, sex), protected information still exists in the remaining attributes.',
  'Take \'sex\' as an example. Men have historically had higher income than women. If an applicant has a high income, it is more likely that they are male than female. As such, information on an applicant\'s income contains partial information on their sex. Now, there is not a definite relationship between income and sex - many women have higher income than the male average. Still, given this and many other correlational relationships (e.g. the fact that men have historically had a higher level of education than women, due to unequal access to education), we can indeed build a pretty good model to predict an applican\'t sex based on other non-sensitive attributes like income and education level.',
  'Now, this phenomenon - often called \"information leakage\" - is very difficult to resolve. First, there is no easy way to find out where the sensitive attribute is hiding among other non-sensitive attributes, especially for large and complex datasets. Second, even if we could do so in a quantitative way and successfully removed the sentitive information, the remaining dataset would not be a good representation of reality. For example, in order to remove the correlation between \'sex\' and \'education\', we would have to modify values in the \'education\' column. Such tampering of the input data risks creating new unintentional biases, which defeats the point of implementing group unawareness in the first place.',
  'This is a fatal weakness for some algorithm designers. In the next chapter, we will explore demographic parity, a different conception of fairness that sacrifices procedural fairness for much stronger outcome fairness.'
]
const star = {
  src: '/images/group-unawareness/star.svg',
  alt: 'Blue asterisk'
}

const isBrowser = typeof window !== "undefined"

class Redundancy extends Component {
  getIntro() {
    if (isBrowser) {
      return {
        intro: introFunctions.intro,
        introLabel: introFunctions.introLabel(whatInput.ask() === 'mouse' ? 'click' : 'tap')
      }
    } else {
      return null
    }
  }

  render() {
    const { data } = this.props

    return (
      <div className="gu-fairness article-wrap py-4 py-2-sm row">
        <div className="padding col-1"></div>
        <div className="gur-inner-wrap col-10">
          <div className="text-wrap center">
            <p className="quote">{quote}</p>
            <div className="mt-2 mb-3">
              {contentTop.map((para, index) => {
                return (
                  <p className="guf-text" key={index}>
                    {para}
                  </p>
                )
              })}
            </div>
          </div>
          <div className="surface">
            <Model id="gur" data={data} intro={this.getIntro()} />
          </div>
          <div className="text-wrap center">
            <div className="mt-3">
              {contentBottom.map((para, index) => {
                return (
                  <p className="guf-text" key={index}>
                    {para}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
        <div className="padding col-1"></div>
      </div>
    )
  }
}

export default Redundancy
