import React, { Component } from 'react'
import { globalHistory } from '@reach/router'
import './index.scss'
import './utils.scss'
import Nav from './nav/Nav'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import whatInput from 'what-input'

gsap.registerPlugin(ScrollTrigger)

const styles = {
  '--background': '#1A1A1A',
  '--surface': '#212121',
  '--dark': '#fff6e0',
  '--medium': '#f5ecd6',
  '--light': 'rgba(241, 229, 198, 0.5)',
  '--line': 'rgba(241, 229, 198, 0.15)',
  '--border': 'rgba(241, 229, 198, 0.05)',
  '--red': '#FF0048',
  '--red-light': 'rgba(255, 0, 72, 0.4)',
  '--blue': '#fff6e0',
  '--blue-light': 'rgba(255, 246, 224, 0.4)',
  '--surface-blue': '#F0F4FF'
}

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showGrid: false
    }
  }

  componentDidMount() {
    if (window) {
      const DrawSVG = require('../resources/DrawSVG')
      gsap.registerPlugin(DrawSVG)
    }

    globalHistory.listen(({ action }) => {
      if (action === 'POP') {
        setTimeout(() => {
          const event = new Event('media-loaded')
          document.dispatchEvent(event)
        }, 400)
      }
    })

    const showPage = (timedOut = false) => {
      setTimeout(() => {
        const event = new Event('media-loaded')
        document.dispatchEvent(event)

        if (!timedOut) {
          this.mediaLoaded = true
        }
        
      }, 400)
    }

    setTimeout(() => {
      if (!this.mediaLoaded) {
        showPage(true)
      } else {
        this.mediaLoaded = false
      }
    }, 5000)

    const images = []
    let imageCounter = 0

    for (let image of document.images) {
      if (image.classList.contains('must-load')) {
        images.push(image)
      }
    }

    const incrementImageCounter = () => {
      imageCounter += 1
      if (imageCounter === images.length) {
        showPage()
      }
    }

    if (images.length === 0) {
      imageCounter = -1
      incrementImageCounter()
    }
    for (let image of images) {
      if (image.complete) {
        incrementImageCounter()
      } else {
        image.addEventListener('load', incrementImageCounter)
      }
    }
  }

  render() {
    const { children, theme, location } = this.props
    const { showGrid } = this.state
    return (
      <div
        id="app-content"
        style={{
          ...styles,
          '--theme': `var(--${theme})`,
          '--theme-light': `var(--${theme}-light)`
        }}
      >
        <Nav location={location} />
        <main className="app-content-wrapper">
          <div className="container">
            {children}
            {showGrid && (
              <div className="app-grid-wrap">
                <div className="app-grid-inner-wrap container">
                  <div className="row">
                    {[...Array(12)].map((_, index) => {
                      return <div className="app-grid-line col-1" key={index}></div>
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    )
  }
}

Layout.defaultProps = {
  theme: 'blue'
}

export default Layout
