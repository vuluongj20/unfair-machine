import React, { Component } from "react"
import "./EqualOutcome.css"

import Hero from "./hero/Hero"
import Demo from "./demo/Demo"
import Definition from "./definition/Definition"
import Fairness from "./fairness/Fairness"
import Responses from "./responses/Responses"
import Summary from "./summary/Summary"

import InternalMenu from "../../layouts/nav/internal-menu/InternalMenu"
import Footer from "../../layouts/footer/Footer"
import { ReferencesSection } from "../../utils/references"

import gsap from "gsap"

const references = [
  {
    ind: 1,
    title: "Machine Bias",
    link:
      "https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing",
    info: "Angwin, J., Larson, J., Mattu, S., Kirchner, L., 2016. ProPublica.",
  },
  {
    ind: 2,
    title: "Building classifiers with independency constraints",
    link: "https://doi.org/10.1109/ICDMW.2009.83",
    info:
      "Calders, T., Kamiran, F., Pechenizkiy, M., 2009. In Proc. IEEE International Conference on Data Mining Workshops, 2009.",
    doi: "10.1109/ICDMW.2009.83",
  },
  {
    ind: 3,
    title: "Conceptions of Distributive Equality: Equality of What?",
    link: "https://plato.stanford.edu/entries/equality/#ConcDistEquaEquaWhat",
    info:
      "Gosepath, S., 2021. Equality. The Stanford Encyclopedia of Philosophy (Summer 2021 Edition), Edward N. Zalta (ed.).",
  },
  {
    ind: 4,
    title: "Fairness in Machine Learning: Lessons from Political Philosophy",
    link: "https://arxiv.org/abs/1712.03586v3",
    info:
      "Binns, R., 2021. Proceedings of Machine Learning Research 81:149-159, 2018 Conference on Fairness, Accountability, and Transparency. arXiv:1712.03586",
  },
  {
    ind: 5,
    title:
      "On the relation between accuracy and fairness in binary classification",
    link: "https://arxiv.org/abs/1505.05723",
    info: "Žliobaitė, I., 2015. arXiv:1505.05723",
  },
]

const dataSource = {
  title: "COMPAS Recidivism Risk Score Data and Analysis",
  link:
    "https://www.propublica.org/datastore/dataset/compas-recidivism-risk-score-data-and-analysis",
  info: 'Data and analysis for the ProPublica story "Machine Bias".',
}

class EqualOutcome extends Component {
  render() {
    const { location } = this.props

    return (
      <div>
        <Hero />
        <Demo />
        <Definition />
        <Fairness />
        <hr />
        <Responses />
        <hr />
        <Summary />
        <hr />
        <ReferencesSection references={references} dataSource={dataSource} />
        <hr />
        <div className="article-next-chapter-wrap container pt-4 pb-4">
          <p className="artcile-next-chapter-prompt fc-dark fw-medium">
            Read Chapter 3
          </p>
          <div className="article-next-chapter-inner-wrap">
            <InternalMenu
              location={location}
              showOnly={["chap-3"]}
              centerText
            />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default EqualOutcome
