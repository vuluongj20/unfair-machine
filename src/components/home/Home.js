import React, { Component } from "react"
import "./Home.css"

import gsap from "gsap"
import * as THREE from "three"
import windowResize from "window-resize"

import Hero from "./hero/Hero"
import Quote from "./quote/Quote"
import InternalMenu from "../../layouts/nav/internal-menu/InternalMenu"
import Footer from "../../layouts/footer/Footer"

class Home extends Component {
  render() {
    const { location } = this.props
    return (
      <div>
        <Hero />
        <Quote />
        <div className="home-menu-wrap container py-4">
          <p className="home-menu-label ta-center fc-dark fw-medium">
            Start reading
          </p>
          <div className="home-menu-inner-wrap">
            <InternalMenu location={location} showChapterLabel />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
