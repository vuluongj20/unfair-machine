import React, { Component } from 'react'
import './Menu.css'

import Menu from '../../../layouts/nav/menu/Menu'

import gsap from 'gsap'

class HomeMenu extends Component {
  constructor(props) {
    super(props)
    this.pageExit = this.pageExit.bind(this)
    this.pageEntry = this.pageEntry.bind(this)
  }
  

  pageExit(background) {
    document.querySelector('.ns-background').style.background = background

    gsap.to('.ns-background-decoration-wrap', { opacity: 1, ease: 'expo.out', duration: 0.6, delay: 0.2 })
    gsap.fromTo('.nsd-cross-s-1', { rotate: 0 }, { rotate: 180, ease: 'none', duration: 0.6, repeat: -1 })
    gsap.fromTo('.nsd-cross-s-2', { rotate: 90 }, { rotate: 270, ease: 'none', duration: 1.2, repeat: -1 })

    const nsdCrossLOffset = Math.random() * 90
    gsap.fromTo('.nsd-cross-l-1', { rotate: nsdCrossLOffset }, { rotate: nsdCrossLOffset + 180, ease: 'none', duration: 8, repeat: -1 })
    gsap.fromTo('.nsd-cross-l-2', { rotate: nsdCrossLOffset + 90 }, { rotate: nsdCrossLOffset + 270, ease: 'none', duration: 16, repeat: -1 })

    gsap.to('.ns-background', { 
      scaleX: 1, ease: 'expo.out', duration: 1.2, overwrite: true,
      onComplete: () => {
        document.querySelector('.ns-background-wrap').style.pointerEvents = 'initial'
      }
    })
  }

  pageEntry() {
    const images = []
    let imageCounter = 0

    for (let image of document.images) {
      if (image.classList.contains('must-load')) {
        images.push(image)
      }
    }

    const showPage = (timedOut = false) => {
      setTimeout(() => {
        if (!timedOut) {
          this.mediaLoaded = true
        }

        document.querySelector('.ns-background').style.transformOrigin = 'right'

        setTimeout(() => {
          const event = new Event('media-loaded')
          document.dispatchEvent(event)
        }, 800)

        gsap.to('.ns-background-decoration-wrap', 
          { 
            opacity: 0, ease: 'expo.out', duration: 0.6, delay: 0.6,
            onComplete: () => {
              gsap.killTweensOf(['.nsd-cross-s-1', '.nsd-cross-s-2'])
        }})

        gsap.to('.ns-background', {
          scaleX: 0,
          duration: 1.6,
          ease: 'expo.inOut',
          overwrite: true,
          onComplete: () => {
            document.querySelector('.ns-background').style.transformOrigin = 'left'
            document.querySelector('.ns-background-wrap').style.pointerEvents = 'none'
          }
        })
      }, 0)
    }

    setTimeout(() => {
      if (!this.mediaLoaded) {
        showPage(true)
      } else {
        this.mediaLoaded = false
      }
    }, 5000)

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
    const { location } = this.props
    return (
      <div className="home-menu-wrap py-4">
        <div className="home-menu-inner-wrap">
          <Menu 
            location={location}
            className="home-menu"
            showMenu={true}
            pageEntry={this.pageEntry} 
            pageExit={this.pageExit} 
          />
        </div>
      </div>
    )
  }
}

export default HomeMenu
