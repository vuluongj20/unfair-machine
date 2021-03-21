import React, { Component } from 'react'

import SEO from '../components/seo'
import GroupUnawareness from '../components/group-unawareness/GroupUnawareness'

const seo = {
  title: 'Group Unawareness',
  description: 'Group unawareness means that the algorithm does not have access to sensitive attributes like gender, race when it is trained.'
}

class Unawareness extends Component {
  render() {
    return (
      <div className="group-unawareness-page-wrap">
        <SEO {...seo} />
        <GroupUnawareness />
      </div>
    )
  }
}

export default Unawareness
