import React, { Component } from 'react'
import './Hero.css'

import gsap from 'gsap'

const illustration = {
  src: '/images/global/times.svg',
  alt: 'Cross'
}

class Hero extends Component {
  componentDidMount() {
    document.addEventListener('media-loaded', () => {
      gsap.fromTo('.article-title-span', 
        { y: '1.5em' },
        { y: 0, ease: 'expo.out', duration: 1.6, stagger: 0.08 })
      gsap.fromTo('.home-hero-illustration', 
        { scale: 0.5, opacity: 0, y: '6em', rotate: -25 },
        { scale: 1, opacity: 1, y: 0, rotate: 5, ease: 'expo.out', duration: 1.4, delay: 0.2 })
    }, { once: true })
  }

  render() {
    return (
      <div className="home-hero">
        <div className="home-hero-inner-wrap start">
          <h1 className="home-hero-title article-hero-title">
            <span className="article-title-span-wrap">
              <span className="article-title-span">MACHINE</span>
            </span>
            <span className="article-title-span-wrap">
              <span className="article-title-span">LEARNING</span>
            </span>
          </h1>
        </div>
        <img 
          className="home-hero-illustration my-2" 
          src={illustration.src} 
          alt={illustration.alt} 
        />
        <div className="home-hero-inner-wrap end">
          <h1 className="home-hero-title article-hero-title">
            <span className="article-title-span-wrap">
              <span className="article-title-span">FAIRNESS</span>
            </span>
          </h1>
        </div>
      </div>
    )
  }
}

export default Hero
