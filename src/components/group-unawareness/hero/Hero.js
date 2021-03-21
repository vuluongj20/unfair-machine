import React, { Component } from 'react'
import './Hero.css'

import gsap from 'gsap'

const illustration = {
  src: '/images/group-unawareness/illustration.svg',
  alt: 'Blue eyes with a slash'
}

class Hero extends Component {
  componentDidMount() {
    document.addEventListener('media-loaded', () => {
      gsap.fromTo('.article-title-span', 
        { y: '1.5em' },
        { y: 0, ease: 'expo.out', duration: 1.6, stagger: 0.08 })
      gsap.fromTo('.article-hero-illustration', 
        { scale: 0.5, opacity: 0, rotate: -20 },
        { scale: 1, opacity: 1, rotate: 30, ease: 'expo.out', duration: 1.6 })
    }, { once: true })
  }

  render() {
    return (
      <div className="gu-hero article-hero-wrap row">
        <img 
          className="article-hero-illustration" 
          src={illustration.src} 
          alt={illustration.alt} 
        />
        <h1 className="article-title">
          <span className="article-title-span-wrap">
            <span className="article-title-span">GROUP</span>
          </span>
          <span className="article-title-span-wrap">
            <span className="article-title-span">UNAWARENESS</span>
          </span>
        </h1>
      </div>
    )
  }
}

export default Hero
