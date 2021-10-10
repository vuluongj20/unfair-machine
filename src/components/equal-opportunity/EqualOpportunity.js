import React, { Component } from "react"
import "./EqualOpportunity.css"

import Hero from "./hero/Hero"
import Demo from "./demo/Demo"
import Definition from "./definition/Definition"
import Fairness from "./fairness/Fairness"
import Desert from "./desert/Desert"
import Summary from "./summary/Summary"
import Footer from "../../layouts/footer/Footer"
import { ReferencesSection } from "../../utils/references"

import ScrollTrigger from "gsap/ScrollTrigger"

import gsap from "gsap"

const references = [
  {
    ind: 1,
    title: "Equality of Opportunity in Supervised Learning",
    link:
      "https://proceedings.neurips.cc/paper/2016/file/9d2682367c3935defcb1f9e247a97c0d-Paper.pdf",
    info:
      "Hardt, M., Price, E., Srebro, N., 2016. Proceedings of the 30th Conference on Neural Information Processing Systems (NIPS 2016).",
  },
  {
    ind: 2,
    title: "Attacking discrimination with smarter machine learning",
    link:
      "https://research.google.com/bigpicture/attacking-discrimination-in-ml/",
    info:
      "Wattenberg, M., Viégas, F., Hardt, M., 2016. People + AI Research, Google.",
  },
  {
    ind: 3,
    title: "Desert",
    link: "https://plato.stanford.edu/entries/desert/",
    info:
      "Feldman, F., 2020. The Stanford Encyclopedia of Philosophy (Winter 2020 Edition), Edward N. Zalta (ed.).",
  },
  {
    ind: 4,
    title: "Fairness in Machine Learning: Lessons from Political Philosophy",
    link: "https://arxiv.org/abs/1712.03586v3",
    info:
      "Binns, R., 2021. Proceedings of Machine Learning Research 81:149-159, 2018 Conference on Fairness, Accountability, and Transparency. arXiv:1712.03586",
  },
]

class EqualOpportunity extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Demo />
        <Definition />
        <Fairness />
        <hr />
        <Desert />
        <hr />
        <Summary />
        <hr />
        <ReferencesSection references={references} />
        <Footer />
      </div>
    )
  }
}

export default EqualOpportunity
