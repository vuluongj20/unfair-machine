import React, { Component } from 'react'
import './Nav.css'

import TransitionLink from 'gatsby-plugin-transition-link'

import * as focusTrap from 'focus-trap'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import gsap from 'gsap'

import Menu from './menu/Menu'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false,
      transitioning: false
    }
    this.toggleHam = this.toggleHam.bind(this)
    this.pageExit = this.pageExit.bind(this)
    this.pageEntry = this.pageEntry.bind(this)
  }

  toggleHam() {
    const { showMenu, transitioning } = this.state

    if (transitioning) {
      gsap.killTweensOf(['.ns-background', '.ns-link-row', '.ns-contact-head', '.ns-contacts', '.ns-logo'])
    }
    this.setState({
      showMenu: !showMenu
    }, () => {
      if (this.state.showMenu) {
        this.focusTrap.activate()
        disableBodyScroll(document.querySelector('.nav'))
      } else {
        this.focusTrap.deactivate()
        enableBodyScroll(document.querySelector('.nav'))
      }
    })
  }

  pageExit(background) {
    this.setState({
      transitioning: true
    }, () => {
      this.focusTrap.deactivate()

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

        enableBodyScroll(document.querySelector('.nav'))

        document.querySelector('.ns-background').style.transformOrigin = 'right'

        setTimeout(() => {
          const event = new Event('media-loaded')
          document.dispatchEvent(event)
        }, 800)

        this.setState({ showMenu: false, transitioning: false }, () => {
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

  componentDidMount() {
    this.focusTrap = focusTrap.createFocusTrap('.nav');

    document.addEventListener('media-loaded', () => {
      gsap.to('.nav', { opacity: 1, ease: 'power2.out', duration: 1.4, delay: 0.1 })
    })
  }

  render() {
    const { location } = this.props
    const { showMenu } = this.state
    const currentPage = location && location.pathname.split('/')[1]

    return (
      <nav className={`nav ${showMenu ? 'on' : ''}`}>
        <div className="nav-logo-wrap absolute-center">
          <TransitionLink
            to="/"
            className="nav-logo-link"
            onClick={(e) => {
              if (!currentPage) {
                e.preventDefault()
                window.scrollTo(0, 0)
              }
            }}
            exit={{
              length: 1.3,
              trigger: () => {
                this.pageExit('#212121')
              }
            }}
            entry={{
              length: 1.7,
              delay: 1.3,
              trigger: () => {
                this.pageEntry()
              }
            }}
          >
            <p className="nav-logo-text fw-medium fc-dark">(Un)Fair Machine</p>
          </TransitionLink>
        </div>
        <div className="nav-ham-wrap">
          <button
            className="block nav-ham flex-center"
            aria-label="Menu"
            onClick={() => this.toggleHam()}
          >
            <div className="nav-ham-icon">
              <div className="nav-ham-line line-1" />
              <div className="nav-ham-line line-2" />
              <div className="nav-ham-line line-3" />
            </div>
          </button>
        </div>
        <div className="nav-menu-container flex-center">
          <div className="container">
            <Menu 
              location={location}
              className="nav-menu"
              showChapterLabel
              showMenu={showMenu} 
              pageEntry={this.pageEntry} 
              pageExit={this.pageExit} 
              toggleHam={this.toggleHam} 
            />
          </div>
        </div>
        <div className="ns-background-wrap spread">
          <div className="ns-background spread"></div>
          <div className="ns-background-decoration-wrap absolute-center">
            <div className="nsd-cross-l-1 absolute-center"></div>
            <div className="nsd-cross-l-2 absolute-center"></div>
            <div className="nsd-cross-s-1 absolute-center"></div>
            <div className="nsd-cross-s-2 absolute-center"></div>
            <div className="nsd-circ absolute-center"></div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
