import React, { Component } from 'react'

import SEO from '../components/seo'

import Home from '../components/home/Home'

const seo = {
  title: null,
  description: '(Un)Fair Machine is a '
}

class HomePage extends Component {
  render() {
    const { location } = this.props
    return (
      <div>
        <SEO {...seo} />
        <Home location={location} />
      </div>
    )
  }
}

export default HomePage
