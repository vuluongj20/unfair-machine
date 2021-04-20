import React, { Component } from 'react'
import './Definition.css'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const quote = 'We say that a model satisfies group unawareness if it has no access to protected attributes like race and sex.'
const body = 'Here is the core idea: if a model is blind to sensitive attributes, then it will not be able discriminate based on those attributes. The algorithmic blindfolding occurs during the training period, as we feed data into the model to help it learn how to make good predictions. If the input does not include sensitive attributes, and the model subsequently doesn\'t use those attributes for making predictions, then it is group-unaware.'

const tableColumns = [ 'C. GAIN', 'AGE', 'SEX', 'RACE', 'EDU.', 'OCC.' ]
const tableSVGs = {
  head: {
    src: '/images/group-unawareness/table-head.svg',
    alt: 'Blue squiggly line'
  },
  body: {
    src: '/images/group-unawareness/table-body.svg',
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
          gsap.to(['#gud-column-3 .gud-head', '#gud-column-3 .gud-body-svg'],
            { opacity: 0, ease: 'expo.out', duration: 1 }), 0
        ),
        scrub: 0.4 
      })
    )

    this.stInstances.push(
      ScrollTrigger.create({
        trigger: '.gud-table',
        start: 'top 70%',
        end: 'top 55%',
        animation: gsap.timeline().add(
          gsap.to(['#gud-column-5 .gud-head', '#gud-column-5 .gud-body-svg'],
            { opacity: 0, ease: 'expo.out', duration: 1 }), 0
        ),
        scrub: 0.4 
      })
    )

    this.stInstances.push(
      ScrollTrigger.create({
        trigger: '.gud-table',
        start: 'top 55%',
        end: 'top 40%',
        animation: gsap.timeline().add(
          gsap.to(['#gud-column-2 .gud-head', '#gud-column-2 .gud-body-svg'],
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
      <div className="gu-definition article-wrap mt-4">
        <div className="quote-wrap center no-bt">
          <p className="quote">{quote}</p>
        </div>
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
        <div className="text-wrap center mt-3">
          <p>{body}</p>
        </div>
      </div>
    )
  }
}

export default Definition
