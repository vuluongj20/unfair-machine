import React, { Component } from 'react'
import './Menu.css'

import TransitionLink from 'gatsby-plugin-transition-link'
import gsap from 'gsap'

const pages = [
  // {
  //   label: 'Introduction',
  //   title: 'Introduction',
  //   href: '/introduction',
  //   background: '#1A1A1A',
  //   // hoverImg: {
  //   //   src: '/images/global/introduction.svg',
  //   //   alt: 'Introduction'
  //   // }
  // },
  {
    label: 'Chapter 1',
    title: 'Group Unawareness',
    href: '/group-unawareness',
    background: '#212121',
    hoverImg: {
      src: '/images/global/group-unawareness.svg',
      alt: 'Eye',
      size: 12
    }
  },
  {
    label: 'Chapter 2',
    title: 'Demographic Parity',
    href: '/demographic-parity',
    background: '#212121',
    hoverImg: {
      src: '/images/global/demographic-parity.svg',
      alt: 'Equality sign',
      size: 10
    }
  },
  {
    label: 'Chapter 3',
    title: 'Equal Opportunity',
    href: '/equal-opportunity',
    background: '#1A1A1A',
    hoverImg: {
      src: '/images/global/equal-opportunity.svg',
      alt: 'Equity symbol'
    }
  }
]

class Menu extends Component {
  itemMouseEnter(e) {
    const { className } = this.props
    const hoverImage = e.currentTarget.querySelector(`.${className} .mi-hover-image-wrap`)

    gsap.fromTo(hoverImage, 
      { opacity: 0, scale: 0.6 },
      { opacity: 1, scale: 1, ease: 'expo.out' })

    this.xSet = gsap.quickSetter(hoverImage, "x", "px");
    this.ySet = gsap.quickSetter(hoverImage, "y", "px");
  }

  itemMouseLeave(e) {
    const { className } = this.props
    const hoverImage = e.currentTarget.querySelector(`.${className} .mi-hover-image-wrap`)

    gsap.to(hoverImage, { opacity: 0, scale: 0.6, ease: 'expo.out' })
  }

  itemMouseMove(e) {
    const posX = e.clientX - e.currentTarget.getBoundingClientRect().left
    const posY = e.clientY - e.currentTarget.getBoundingClientRect().top

    this.mouse.x = posX
    this.mouse.y = posY
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.showMenu && this.props.showMenu) {
      const { className } = this.props
      gsap.fromTo(
        `.${className} .menu-item`,
        { opacity: 0, y: '6em' },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.04, ease: 'expo.out', overwrite: true })
      gsap.to(
        `.${className} .menu-background`,
        { opacity: 1, duration: 0.6, ease: 'expo.out', overwrite: true })
    } else if (prevProps.showMenu && !this.props.showMenu) {
      const { className } = this.props
      gsap.fromTo(
        `.${className} .menu-item`,
        { opacity: 1 },
        { opacity: 0, duration: 0.8, ease: 'expo.out', overwrite: true })
      gsap.to(
        `.${className} .menu-background`,
        { opacity: 0, duration: 0.8, ease: 'expo.out', overwrite: true })
    }
  }

  componentDidMount() {
    const hoverAnimationSpeed = 0.1
    this.pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.mouse = { x: this.pos.x, y: this.pos.y };

    this.hoverFunction = () => {
      const dt = 1.0 - Math.pow(1 - hoverAnimationSpeed, gsap.ticker.deltaRatio()); 
      
      this.pos.x += (this.mouse.x - this.pos.x) * dt;
      this.pos.y += (this.mouse.y - this.pos.y) * dt;

      this.xSet && this.xSet(this.pos.x)
      this.ySet && this.ySet(this.pos.y)
    }

    gsap.ticker.add(this.hoverFunction);

    const { showMenu, className } = this.props
    if (showMenu) {
      gsap.set(
        `.${className} .menu-item`,
        { opacity: 1, y: 0 })
      gsap.set(
        `.${className} .menu-background`,
        { opacity: 1 })
    }
  }

  render() {
    const { location, className } = this.props
    const { showMenu, pageEntry, pageExit, toggleHam } = this.props
    const currentPage = location && location.pathname.split('/')[1]

    return (
      <div className={`${className}${showMenu ? ' on' : ''} menu-wrap spread flex-center`}>
        <div className="menu-background spread"></div>
        <div className="container">
        {pages.map((page, index) => {
          return (
              <TransitionLink
                key={page.href}
                className="menu-item row py-2 no-tap-highlight"
                tabIndex={(showMenu && currentPage !== page.href) ? 0 : -1}
                to={page.href}
                onMouseEnter={e => this.itemMouseEnter(e)}
                onMouseLeave={e => this.itemMouseLeave(e)}
                onMouseMove={e => this.itemMouseMove(e)}
                onClick={(e) => {
                  if (currentPage === page.href.split('/')[1]) {
                    toggleHam();
                    e.preventDefault()
                  }
                }}
                exit={{
                  length: 1.3,
                  trigger: () => pageExit(page.background)
                }}
                entry={{
                  length: 1.7,
                  delay: 1.3,
                  trigger: () => pageEntry()
                }}
              >
                <p className="mi-label fw-medium fc-dark col-2">{page.label}</p>
                <h2 className="mi-title col-10">{page.title}</h2>
                {page.hoverImg && (<div className="mi-hover-image-wrap">
                  <img 
                    className="mi-hover-image" 
                    src={page.hoverImg.src} 
                    alt={page.hoverImg.alt} 
                    style={{ width: `${page.hoverImg.size}em` }}
                  />
                </div>)}
              </TransitionLink>
          )
        })}
        </div>
      </div>
    )
  }
}

export default Menu
