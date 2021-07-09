import React, { Component } from 'react'
import './Definition.css'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const bodyTop = ['The removal of one or more of the attributes above, especially the sensitive demographic information like race and gender, is a common and intuitive way to make algorithmic models more fair. This technique is called blinding (or group unawareness in academic writings). The idea is that if a model M is blind, i.e. has no access, to certain sensitive attributes, then M cannot discriminate against anyone based on those attributes.']

const tableColumns = [ 'C. GAIN', 'AGE', 'SEX', 'RACE', 'EDU.', 'OCC.' ]
const tableSVGs = {
  head: {
    src: '/images/blinding/table-head.svg',
    alt: 'Blue squiggly line'
  },
  body: {
    src: '/images/blinding/table-body.svg',
    alt: 'Gray squiggly line'
  }
}
const tableColsToDropInMobile = [1, 2, 5]

class Definition extends Component {
  stInstances = []

  toggleColumn(index, to) {
    gsap.to([`#gud-column-${index} .gud-head`, `#gud-column-${index} .gud-body-svg`],
      { opacity: to ? 1 : 0, ease: 'expo.inOut', duration: 0.8 })
    document.querySelector(`#gud-column-${index}`).style.pointerEvents = to ? 'initial' : 'none'
  }

  componentDidMount() {
    this.stInstances.push(
      ScrollTrigger.create({
        trigger: '.gud-table',
        start: 'top bottom',
        end: 'top 70%',
        animation: gsap.timeline().add(
          gsap.to(['#gud-column-2 .gud-head', '#gud-column-2 .gud-body-svg'],
            { opacity: 0, ease: 'expo.out', duration: 1 }), 0
        ),
        scrub: 0.4 
      })
    )

    this.stInstances.push(
      ScrollTrigger.create({
        trigger: '.gud-table',
        start: 'top 70%',
        end: 'top 50%',
        animation: gsap.timeline().add(
          gsap.to(['#gud-column-3 .gud-head', '#gud-column-3 .gud-body-svg'],
            { opacity: 0, ease: 'expo.out', duration: 1 }), 0
        ),
        scrub: 0.4 
      })
    )

    this.stInstances.push(
      ScrollTrigger.create({
        trigger: '.gud-table',
        start: 'top 50%',
        end: 'top 30%',
        animation: gsap.timeline().add(
          gsap.to(['#gud-column-5 .gud-head', '#gud-column-5 .gud-body-svg'],
            { opacity: 0, ease: 'expo.out', duration: 1 }), 0
        ),
        scrub: 0.4 
      })
    )
  }

  componentWillUnmount() {
    this.stInstances.forEach(instance => instance.kill())
  }

  render() {
    return (
      <div className="gu-definition article-wrap my-4">
        <div className="heading-wrap center mt-3">
          <div className="heading-inner-wrap">
            <h1 className="heading-number">1.</h1>
            <h2 className="heading">Intentional Unawareness</h2>
            <div className="heading-quote-wrap mt-2">
              <div className="heading-quote-line" />
            </div>
          </div>
        </div>
        {bodyTop.map((para, ind) => {
          return (
            <div key={ind} className="text-wrap center mt-2">
              <p>{para}</p>
            </div>
          )
        })}
        <div className="quote-wrap center no-border">
          <div className="gud-table mt-3">
            {[...Array(6)].map((_, index) => {
              return (
                <div 
                  id={`gud-column-${index}`}
                  className={`gud-column ${tableColsToDropInMobile.includes(index) ? 'hide-in-mobile' : ''}`}
                  key={index}
                >
                  <div className="gud-head-wrap flex-center">
                    <p className="gud-head fw-bold ff-founders-grotesk fc-dark">{tableColumns[index]}</p>
                  </div>
                  <div className="gud-body-wrap">
                    {[...Array(4)].map((_, index) => {
                      return (
                        <img 
                          key={index}
                          className="gud-body-svg" 
                          src={tableSVGs.body.src}
                          alt={tableSVGs.body.alt}
                        />
                      )
                    })}
                  </div>
                  <div className="gud-column-background spread"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Definition
