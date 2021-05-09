import React, { Component } from 'react'

import SEO from '../components/seo'
import DemographicParity from '../components/demographic-parity/DemographicParity'

const seo = {
  title: 'Demographic Parity',
  description: 'An explanation of Demographic Parity - a proposed conception of fairness in machine learning, as part of a larger series about Machine Learning Fairness'
}

class DemographicParityPage extends Component {
  render() {
    const { location } = this.props
    return (
      <div className="demographic-parity-page-wrap">
        <SEO {...seo} />
        <DemographicParity location={location} />
      </div>
    )
  }
}

export default DemographicParityPage
