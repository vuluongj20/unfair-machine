import React, { Component } from "react"
import "./Hero.css"

import gsap from "gsap"

const illustration = {
  src: "/images/global/times.svg",
  alt: "Cross",
}

class Hero extends Component {
  componentDidMount() {
    document.addEventListener(
      "media-loaded",
      () => {
        gsap.fromTo(
          ".article-title-span",
          { y: "1.5em" },
          { y: 0, ease: "expo.out", duration: 1.6, stagger: 0.08 }
        )
        gsap.fromTo(
          ".article-title-underline.horizontal",
          { scaleX: 0 },
          { scaleX: 1, ease: "expo.out", duration: 1.6, stagger: 0.08 }
        )
        gsap.fromTo(
          ".article-title-underline.vertical",
          { scaleY: 0 },
          { scaleY: 1, ease: "expo.out", duration: 1.6, stagger: 0.08 }
        )
        gsap.fromTo(
          ".home-hero-illustration",
          { scale: 0.5, opacity: 0, y: "6em", rotate: -25 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            rotate: 5,
            ease: "expo.out",
            duration: 1.4,
            delay: 0.2,
          }
        )
      },
      { once: true }
    )
  }

  render() {
    return (
      <div className="home-hero-wrap">
        <div className="home-hero container">
          <div className="home-hero-inner-wrap start">
            <h1 className="home-hero-title article-hero-title">
              <span className="article-title-span-outer-wrap">
                <span className="article-title-span-wrap">
                  <span className="article-title-span">(UN)FAIR</span>
                </span>
                <div className="article-title-underline horizontal"></div>
                <div className="article-title-underline vertical"></div>
              </span>
            </h1>
          </div>
          <div className="home-hero-inner-wrap end">
            <h1 className="home-hero-title article-hero-title">
              <span className="article-title-span-outer-wrap">
                <span className="article-title-span-wrap">
                  <span className="article-title-span">MACHINE</span>
                </span>
                <div className="article-title-underline horizontal"></div>
                <div className="article-title-underline vertical"></div>
              </span>
            </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
