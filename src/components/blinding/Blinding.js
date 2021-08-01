import React, { Component } from 'react'
import * as tf from '@tensorflow/tfjs'
import './Blinding.css'

import Demo from './demo/Demo'
import Hero from './hero/Hero'
import Definition from './definition/Definition'
import Fairness from './fairness/Fairness'
import Redundancy from './redundancy/Redundancy'
import Summary from './summary/Summary'
import Footer from '../../layouts/footer/Footer'
import InternalMenu from '../../layouts/nav/internal-menu/InternalMenu'

const datasets = {
  prod: {
    train: 'https://res.cloudinary.com/vuluongj20/raw/upload/v1605146921/unfair-machine/datasets/adult-train2.csv',
    test: 'https://res.cloudinary.com/vuluongj20/raw/upload/v1605146919/unfair-machine/datasets/adult-test.csv'
  },
  dev: {
    train: '/datasets/adult-train.csv',
    test: '/datasets/adult-test.csv'
  }
}

const columnNames =  [
  'age',
  'workclass',
  'fnlwgt',
  'education',
  'education-num',
  'marital-status',
  'occupation',
  'relationship',
  'race',
  'sex',
  'capital-gain',
  'capital-loss',
  'hours-per-week',
  'native-country',
  'income'
]

const columnConfigs = {
  income: {
    isLabel: true
  }
}

class Blinding extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        train: null,
        test: null
      }
    }
  }

  fetchData(url, columnNames, columnConfigs) {
    return tf.data.csv(url, {
      columnNames,
      columnConfigs
    }).take(1000)
  }

  componentDidMount() {
    const dataURL = datasets[process.env.environment === 'development' ? 'dev' : 'prod']
    this.setState({
      data: this.fetchData(dataURL.train, columnNames, columnConfigs)
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
        <div className="article-next-chapter-wrap container pt-4 pb-4">
          <p className="artcile-next-chapter-prompt fc-dark fw-medium">Read Chapter 2</p>
          <div className="article-next-chapter-inner-wrap">
            <InternalMenu location={location} showOnly={['chap-2']} centerText />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Blinding
