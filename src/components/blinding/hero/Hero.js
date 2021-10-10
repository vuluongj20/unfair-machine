import React, { Component } from "react"
import "./Hero.css"

import gsap from "gsap"

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
      },
      { once: true }
    )
  }

  render() {
    return (
      <div className="article-hero-wrap">
        <div className="gu-hero container">
          <h1 className="article-title">
            <span className="article-title-span-outer-wrap">
              <span className="article-title-span-wrap">
                <span className="article-title-span">Blinding</span>
              </span>
              <div className="article-title-underline horizontal"></div>
              <div className="article-title-underline vertical"></div>
            </span>
          </h1>
        </div>
      </div>
    )
  }
}

export default Hero
