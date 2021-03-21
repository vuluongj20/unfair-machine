import React, { Component } from 'react'
import './EqualOpportunity.css'

import Hero from './hero/Hero'
import Demo from './demo/Demo'
import Definition from './definition/Definition'

import gsap from 'gsap'

class EqualOpportunity extends Component {
  render() {
    return (
      <div>
        <Hero />
        <hr />
        <Demo />
        <hr />
        <Definition />
      </div>
    )
  }
}

export default EqualOpportunity
