import React, { Component } from "react"

import SEO from "../components/seo"
import EqualOutcome from "../components/equal-outcome/EqualOutcome"

const seo = {
  title: "Equal Outcome",
  description:
    "An account of Equal Outcome - a proposed conception of fairness in machine learning",
}

class EqualOutcomePage extends Component {
  render() {
    const { location } = this.props
    return (
      <div className="demographic-parity-page-wrap">
        <SEO {...seo} />
        <EqualOutcome location={location} />
      </div>
    )
  }
}

export default EqualOutcomePage
