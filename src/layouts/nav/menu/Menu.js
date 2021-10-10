import React, { Component } from "react"
import "./Menu.css"

import TransitionLink from "gatsby-plugin-transition-link"
import gsap from "gsap"

const pages = [
  {
    id: "chap-1",
    label: "Chapter 1",
    title: "Blinding",
    href: "/blinding",
    background: "#212121",
  },
  {
    id: "chap-2",
    label: "Chapter 2",
    title: "Equality of Outcome",
    href: "/equal-outcome",
    background: "#212121",
  },
  {
    id: "chap-3",
    label: "Chapter 3",
    title: "Equality of Opportunity",
    href: "/equal-opportunity",
    background: "#1A1A1A",
  },
]

class Menu extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.showMenu && this.props.showMenu) {
      const { className } = this.props
      gsap.fromTo(
        `.${className} .menu-item`,
        { opacity: 0, y: "6em" },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.04,
          ease: "expo.out",
          overwrite: true,
        }
      )
      gsap.to(`.${className} .menu-background`, {
        opacity: 1,
        duration: 0.6,
        ease: "expo.out",
        overwrite: true,
      })
    } else if (prevProps.showMenu && !this.props.showMenu) {
      const { className } = this.props
      gsap.fromTo(
        `.${className} .menu-item`,
        { opacity: 1 },
        { opacity: 0, duration: 0.8, ease: "expo.out", overwrite: true }
      )
      gsap.to(`.${className} .menu-background`, {
        opacity: 0,
        duration: 0.8,
        ease: "expo.out",
        overwrite: true,
      })
    }
  }

  componentDidMount() {
    const { showMenu, className } = this.props
    if (showMenu) {
      gsap.set(`.${className} .menu-item`, { opacity: 1, y: 0 })
      gsap.set(`.${className} .menu-background`, { opacity: 1 })
    }
  }

  render() {
    const {
      location,
      className,
      showOnly,
      showChapterLabel,
      centerText,
    } = this.props
    const { showMenu, pageEntry, pageExit, toggleHam } = this.props
    const currentPage = location && location.pathname.split("/")[1]

    return (
      <div
        className={`${className}${showMenu ? " on" : ""} menu-wrap flex-center`}
      >
        <div className="menu-background spread"></div>
        <div>
          {pages.map((page, index) => {
            if (showOnly && !showOnly.includes(page.id)) {
              return null
            }

            return (
              <TransitionLink
                key={page.href}
                className={`menu-item row py-2 py-1-sm no-tap-highlight flex-col ${
                  centerText ? "flex-center" : ""
                }`}
                tabIndex={showMenu && currentPage !== page.href ? 0 : -1}
                to={page.href}
                onClick={e => {
                  if (currentPage === page.href.split("/")[1]) {
                    toggleHam()
                    e.preventDefault()
                  }
                }}
                exit={{
                  length: 1.3,
                  trigger: () => pageExit(page.background),
                }}
                entry={{
                  length: 1.7,
                  delay: 1.3,
                  trigger: () => pageEntry(),
                }}
              >
                {showChapterLabel && (
                  <p className="mi-label fc-dark fw-medium">{page.label}</p>
                )}
                <h2 className="mi-title">{page.title}</h2>
              </TransitionLink>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Menu
