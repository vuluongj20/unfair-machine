import React, { Component } from 'react'

import SEO from '../components/seo'
import DemographicParity from '../components/demographic-parity/DemographicParity'

const seo = {
  title: 'Demographic Parity',
  // todo
  description: 'Group unawareness means that the algorithm does not have access to sensitive attributes like gender, race when it is trained.'
}

class DemographicParityPage extends Component {
  render() {
    return (
      <div className="demographic-parity-page-wrap">
        <SEO {...seo} />
        <DemographicParity />
      </div>
    )
  }
}

export default DemographicParityPage
