import React, { Component } from 'react'

import SEO from '../components/seo'
import EqualOpportunity from '../components/equal-opportunity/EqualOpportunity'

const seo = {
  title: 'Equal Opportunity',
  description: 'Equalizing the true positive rate among all groups.'
}

class Opportunity extends Component {
  render() {
    const { location } = this.props
    return (
      <div className="equal-opportunity-page-wrap">
        <SEO {...seo} />
        <EqualOpportunity location={location} />
      </div>
    )
  }
}

export default Opportunity
