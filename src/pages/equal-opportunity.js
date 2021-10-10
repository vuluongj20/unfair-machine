import React, { Component } from "react"

import SEO from "../components/seo"
import EqualOpportunity from "../components/equal-opportunity/EqualOpportunity"

const seo = {
  title: "Equal Opportunity",
  description:
    "An account of Equal Opportunity - a proposed conception of fairness in machine learning",
}

class EqualOpportunityPage extends Component {
  render() {
    const { location } = this.props
    return (
      <div className="equal-opportunity-page-wrap">
        <SEO {...seo} />
        <EqualOpportunity location={location} />
      </div>
    )
  }
}

export default EqualOpportunityPage
