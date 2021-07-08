import React, { Component } from 'react'
import './Redundancy.css'

import Model from '../model/Model'
import whatInput from 'what-input'

const contentTop = [
  'Intuitively, we expect that if an algorithm has no access to any sensitive attributes, then its predictions will be more equal or equitable among protected groups. This turns out not to be the case. Try it with the sandbox below.'
]
const introFunctions = {
  intro: 'Train the model with and without the attribute \"Sex\". Take note of the positive prediction rate for male and female applicants in both cases.',
  introLabel: cta => `${cta.charAt(0).toUpperCase() + cta.slice(1)} on attributes to select/deselect them. When you're done, ${cta} \"Run model\" to start.`
}
const contentBottom = [
  'The positive prediction rates among male and female applicants are roughly the same whether we use the attribute "Sex" or not. In either case, male applicants receive positive predictions more frequently than female applicants. The ratio between male and female applicants remain roughly the same.',
  'So, why does this happen? The answer is that we haven\'t fully removed information on the applicants\' sex from the dataset. It still exists among the remaining attributes, in a phenomenon called information leakage. Men have historically had higher income than women. A large part of this is due to unequal division of labor and stigma against women in the workplace. This means that if an applicant has a high income, then they are more likely to be male than female. As such, in a dataset, information on an applicant\'s sex is partially embedded in their income.',
  'Now, there is not a definite relationship between these two variables - many women still have higher income than the average for men. Still, given this and many other correlational relationships (e.g. the fact that men have historically had a higher level of education than women, due to unequal access to education), we can indeed build a decently well-performing model that can predict an applicant\'s sex based on other, non-sensitive attributes like income and education level.',
  'Such leakage is difficult to remove. First, there is no easy way to find out where the sensitive information is hiding among non-sensitive attributes, especially for large and complex datasets. Second, even if we could do so in a quantitative way and successfully removed the sensitive information, the remaining dataset would still not be a good representation of the sample population. For example, in order to remove the correlation between sex and education, we would have to modify values in the education column. Such tampering of the input data risks creating new, unintentional biases, which defeats the point of blinding in the first place.',
  'In the end, group unawareness is an effective way to make a model more fair in the procedural sense, but it has little effect on the model\'s outcome fairness. For some algorithm designers, this is a fatal weakness. In the next chapter, we will explore demographic parity, a different conception of fairness that sacrifices procedural fairness for much stronger outcome fairness.'
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
      <div className="gu-fairness article-wrap my-4">
        <div className="heading-wrap center mt-3">
          <div className="heading-inner-wrap">
            <h1 className="heading-number">3.</h1>
            <h2 className="heading">Information Leakage</h2>
            <div className="heading-quote-wrap mt-2">
              <div className="heading-quote-line mb-2" />
            </div>
          </div>
        </div>
        <div className="text-wrap center mb-3">
          {contentTop.map((para, index) => {
            return (
              <p className="guf-text" key={index}>
                {para}
              </p>
            )
          })}
        </div>
        <div className="surface by">
          <div className="container">
            <Model id="gur" data={data} intro={this.getIntro()} />
          </div>
        </div>
        <div className="text-wrap center my-3">
          {contentBottom.map((para, index) => {
            return (
              <p className="guf-text" key={index}>
                {para}
              </p>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Redundancy
