import React, { Component } from 'react'

import SEO from '../components/seo'
import GroupUnawareness from '../components/group-unawareness/GroupUnawareness'

const seo = {
  title: 'Group Unawareness',
  description: 'An explanation of Group Unawareness - a proposed conception of fairness in machine learning, as part of a larger series about Machine Learning Fairness'
}

class Unawareness extends Component {
  render() {
    const { location } = this.props
    return (
      <div className="group-unawareness-page-wrap">
        <SEO {...seo} />
        <GroupUnawareness location={location} />
      </div>
    )
  }
}

export default Unawareness
