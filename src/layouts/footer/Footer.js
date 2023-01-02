import React, { Component } from "react"
import "./Footer.css"

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer-text">(Un)Fair Machine</p>
        <p className="footer-text">
          Made by&nbsp;
          <a href="https://www.vuluong.dev" target="_blank" rel="noreferrer">
            Vu Luong
          </a>
        </p>
      </footer>
    )
  }
}

export default Footer
