import React, { Component } from 'react'
import './DemographicParity.css'

import Hero from './hero/Hero'
import Demo from './demo/Demo'
import Definition from './definition/Definition'
import Fairness from './fairness/Fairness'
import InternalMenu from '../../layouts/nav/internal-menu/InternalMenu'
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
        <hr />
        <div className="article-next-chapter-wrap py-4">
          <p className="artcile-next-chapter-prompt mi-label fw-medium fc-dark mb-2">Read Chapter 3</p>
          <div className="article-next-chapter-inner-wrap">
            <InternalMenu location={location} showOnly={['chap-3']} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default DemographicParity
