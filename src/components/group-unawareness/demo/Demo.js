import React, { Component } from 'react'
import './Demo.css'

import Model from '../model/Model'

const introContent = {
  intro: (direction) => `Imagine: you\'re a machine learning engineer at a commercial bank. One day, your manager gives you a large dataset and asks you to build an algorithm that classifies potential clients into two groups: those who earn more than $50K/year, and those who earn less. You have access to the attributes ${direction}. Which of those attributes would you use?`,
  introLabel: cta => `${cta.charAt(0).toUpperCase() + cta.slice(1)} on attributes to select/deselect them. When you're done, ${cta} \'Run model\' to start.`
}

class Demo extends Component {
  render() {
    const { data } = this.props

    return (
        <div className="article-section no-padding row">
          <Model id="gud" data={data} introContent={introContent} />
        </div>
    )
  }
}

export default Demo
