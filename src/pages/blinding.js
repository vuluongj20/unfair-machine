import React, { Component } from 'react'

import SEO from '../components/seo'
import Blinding from '../components/blinding/Blinding'

const seo = {
  title: 'Blinding',
  description: 'An account of Blinding - a proposed strategy to satisfy procedural fairness in machine learning'
}

class BlindingPage extends Component {
  render() {
    const { location } = this.props
    return (
      <div className="group-unawareness-page-wrap">
        <SEO {...seo} />
        <Blinding location={location} />
      </div>
    )
  }
}

export default BlindingPage
