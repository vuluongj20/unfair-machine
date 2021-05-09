import React, { Component } from 'react'

import SEO from '../components/seo'

import Home from '../components/home/Home'

const seo = {
  title: null,
  description: 'An interactive web series about the competing conceptions of fairness in machine learning'
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
