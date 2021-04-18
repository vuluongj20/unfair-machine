import React, { Component } from 'react'
import './Demo.css'

import Model from '../model/Model'
import whatInput from 'what-input'

const introFunctions = {
  intro: (direction) => `Imagine: you\'re a machine learning engineer at a commercial bank. One day, your manager gives you a large dataset and asks you to build an algorithm that classifies potential clients into two groups: those who earn more than $50K/year, and those who earn less. You have access to the attributes ${direction}. Which of those attributes would you use?`,
  introLabel: cta => `${cta.charAt(0).toUpperCase() + cta.slice(1)} on attributes to select/deselect them. When you're done, ${cta} \'Run model\' to start.`
}
const outro = 'Given the disparate set of predictions, do you think we have a responsibility to remove sex from the training process? Would doing so make the final predictions more equitable?'

const isBrowser = typeof window !== "undefined"

class Demo extends Component {
  getIntro() {
    if (isBrowser) {
      return {
        intro: introFunctions.intro(window.screenWidth > 768 ? 'on the left' : 'on top'),
        introLabel: introFunctions.introLabel(whatInput.ask() === 'mouse' ? 'click' : 'tap')
      }
    } else {
      return null
    }
  }
  render() {
    const { data } = this.props

    return (
      <div className="article-section no-padding row">
        <Model 
          id="gud" 
          data={data} 
          intro={this.getIntro()} 
          outro={outro} 
        />
      </div>
    )
  }
}

export default Demo
