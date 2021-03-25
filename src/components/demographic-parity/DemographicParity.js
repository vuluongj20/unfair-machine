import React, { Component } from 'react'
import './DemographicParity.css'

import Hero from './hero/Hero'
import Demo from './demo/Demo'
import Definition from './definition/Definition'
import Fairness from './fairness/Fairness'
import Footer from '../../layouts/footer/Footer'

import gsap from 'gsap'

class DemographicParity extends Component {
  render() {
    return (
      <div>
        <Hero />
        <hr />
        <Demo />
        <hr />
        <Definition />
        <hr />
        <Fairness />
        <Footer />
      </div>
    )
  }
}

export default DemographicParity
