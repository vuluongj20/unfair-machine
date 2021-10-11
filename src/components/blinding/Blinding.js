import React, { Component } from "react"
import * as tf from "@tensorflow/tfjs"
import "./Blinding.css"

import Demo from "./demo/Demo"
import Hero from "./hero/Hero"
import Definition from "./definition/Definition"
import Fairness from "./fairness/Fairness"
import Redundancy from "./redundancy/Redundancy"
import Summary from "./summary/Summary"

import InternalMenu from "../../layouts/nav/internal-menu/InternalMenu"
import Footer from "../../layouts/footer/Footer"
import { ReferencesSection } from "../../utils/references"

const datasets = {
  prod: {
    train:
      "https://res.cloudinary.com/vuluongj20/raw/upload/v1605146921/unfair-machine/datasets/adult-train2.csv",
    test:
      "https://res.cloudinary.com/vuluongj20/raw/upload/v1605146919/unfair-machine/datasets/adult-test.csv",
  },
  dev: {
    train: "/datasets/adult-train.csv",
    test: "/datasets/adult-test.csv",
  },
}

const columnNames = [
  "age",
  "workclass",
  "fnlwgt",
  "education",
  "education-num",
  "marital-status",
  "occupation",
  "relationship",
  "race",
  "sex",
  "capital-gain",
  "capital-loss",
  "hours-per-week",
  "native-country",
  "income",
]

const columnConfigs = {
  income: {
    isLabel: true,
  },
}

const references = [
  {
    ind: 1,
    title: "Procedural versus Substantive Justice",
    link: "https://plato.stanford.edu/entries/justice/#ProcVersSubsJust",
    info:
      "Miller, D., 2021. Justice. The Stanford Encyclopedia of Philosophy (Fall 2021 Edition), Edward N. Zalta (ed.).",
  },
  {
    ind: 2,
    title:
      "Beyond Distributive Fairness in Algorithmic Decision Making: Feature Selection for Procedurally Fair Learning",
    link: "https://www.aaai.org/ocs/index.php/AAAI/AAAI18/paper/view/16523",
    info:
      "Grgić-Hlača, N., Zafar, M. B., Gummadi, K., Weller, A., 2018. The Thirty-Second AAAI Conference on Artificial Intelligence (AAAI-18).",
  },
  {
    ind: 3,
    title:
      "Awareness in Practice: Tensions in Access to Sensitive Attribute Data for Antidiscrimination",
    link: "https://doi.org/10.1145/3351095.3372877",
    info:
      "Bogen, M., Rieke, A., Ahmed, S., 2020. Proceedings of the 2020 Conference on Fairness, Accountability, and Transparency.",
    doi: "10.1145/3351095.3372877",
  },
  {
    ind: 4,
    title: "Discrimination-aware data mining",
    link: "https://doi.org/10.1145/1401890.1401959",
    info:
      "Pedreshi, D., Ruggieri, S., Turini, F., 2008. Proceedings of the 14th ACM SIGKDD international conference on Knowledge discovery and data mining.",
    doi: "10.1145/1401890.1401959",
  },
]

const dataSource = {
  title: "Adult Income",
  link: "https://archive.ics.uci.edu/ml/datasets/adult",
  info:
    "Dua, D., Graff, C., 2019. UCI Machine Learning Repository [http://archive.ics.uci.edu/ml]. Irvine, CA: University of California, School of Information and Computer Science.",
}

class Blinding extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        train: null,
        test: null,
      },
    }
  }

  fetchData(url, columnNames, columnConfigs) {
    return tf.data
      .csv(url, {
        columnNames,
        columnConfigs,
      })
      .take(1000)
  }

  componentDidMount() {
    const dataURL =
      datasets[process.env.environment === "development" ? "dev" : "prod"]
    this.setState({
      data: this.fetchData(dataURL.train, columnNames, columnConfigs),
    })
  }

  render() {
    const { location } = this.props
    const { data } = this.state

    return (
      <div>
        <Hero />
        <Demo data={data} />
        <Definition />
        <hr />
        <Fairness />
        <hr />
        <Redundancy data={data} />
        <hr />
        <Summary />
        <hr />
        <ReferencesSection references={references} dataSource={dataSource} />
        <hr />
        <div className="article-next-chapter-wrap container pt-4 pb-4">
          <p className="artcile-next-chapter-prompt fc-dark fw-medium">
            Read Chapter 2
          </p>
          <div className="article-next-chapter-inner-wrap">
            <InternalMenu
              location={location}
              showOnly={["chap-2"]}
              centerText
            />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Blinding
