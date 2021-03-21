import React, { Component } from 'react'
import './Definition.css'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const definition = 'An algorithm satisfies group unawareness if it doesn’t have access to protected attributes like race and sex.'
const tableColumns = [ 'C. GAIN', 'C. LOSS', 'AGE', 'SEX', 'RACE', 'EDU.', 'MARITAL', 'OCC.' ]
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
const tableColsToDropInMobile = [1, 2, 6, 7]

class Definition extends Component {
  toggleColumn(index, to) {
    gsap.to([`#gud-column-${index} .gud-head`, `#gud-column-${index} .gud-body-svg`],
      { opacity: to ? 1 : 0, easE: 'expo.out', duration: 0.4 })
    document.querySelector(`#gud-column-${index}`).style.pointerEvents = to ? 'initial' : 'none'
  }

  componentDidMount() {
    ScrollTrigger.create({
      id: 'gu-definition-column-1',
      trigger: '.gud-table',
      start: 'top bottom',
      end: 'top 70%',
      onLeave: () => this.toggleColumn(4, false),
      onEnterBack: () => this.toggleColumn(4, true)
    })
    ScrollTrigger.create({
      id: 'gu-definition-column-2',
      trigger: '.gud-table',
      start: 'top 70%',
      end: 'top 55%',
      onLeave: () => this.toggleColumn(7, false),
      onEnterBack: () => this.toggleColumn(7, true)
    })
    ScrollTrigger.create({
      id: 'gu-definition-column-3',
      trigger: '.gud-table',
      start: 'top 55%',
      end: 'top 40%',
      onLeave: () => this.toggleColumn(3, false),
      onEnterBack: () => this.toggleColumn(3, true)
    })
  }

  componentWillUnmount() {
    ScrollTrigger.getById('gu-definition-column-1').kill()
    ScrollTrigger.getById('gu-definition-column-2').kill()
    ScrollTrigger.getById('gu-definition-column-3').kill()
  }

  render() {
    return (
      <div className="gu-definition article-wrap py-4 py-2-sm row">
        <div className="padding col-2"></div>
        <div className="col-10">
          <p className="quote">{definition}</p>
          <div className="gud-table mt-3">
            {[...Array(8)].map((_, index) => {
              return (
                <div 
                  id={`gud-column-${index}`}
                  className={`gud-column ${tableColsToDropInMobile.includes(index) ? 'hide-in-mobile' : ''}`}
                  onClick={() => this.toggleColumn(index)}
                  key={index}
                >
                  <div className="gud-head-wrap flex-center">
                    <p className="gud-head fw-bold ff-founders-grotesk fc-dark">{tableColumns[index]}</p>
                  </div>
                  <div className="gud-body-wrap">
                    {[...Array(5)].map((_, index) => {
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
