import React, { Component } from 'react'
import * as tf from '@tensorflow/tfjs'
import './Model.css'

import gsap from 'gsap'
import windowResize from 'window-resize'

const content = {
  trainButton: 'Run model',
  logs: {
    epoch: 'Epoch',
    accuracy: 'Accuracy',
    validation: 'Validation'
  },
  acceptanceRates: (male, female) => {
    const maleFormatted = `${(male * 100).toLocaleString('en-US', { maximumFractionDigits: 2 })}%`
    const femaleFormatted = `${(female * 100).toLocaleString('en-US', { maximumFractionDigits: 2 })}%`
    return `Your model gave positive predictions (income >50K) for ${maleFormatted} of male applicants and ${femaleFormatted} of female applicants.`
  },
  failureMessages: {
    'low-acc': 'Your model\'s accuracy score is too low. Adding more variables, or choosing a different set of variables, may help fix the problem.'
  }
}

const attributes = [
  { id: 'capital-gain', name: 'Capital gain' },
  { id: 'capital-loss', name: 'Capital loss' },
  { id: 'age', name: 'Age' },
  { id: 'sex', name: 'Sex' },
  { id: 'race', name: 'Race' },
  { id: 'education', name: 'Education' },
  { id: 'marital-status', name: 'Marital status' },
  { id: 'occupation', name: 'Occupation' },
  { id: 'hours-per-week', name: 'Hours/week' }
]

const columnsToEncode = [
  'workclass',
  'education',
  'marital-status',
  'occupation',
  'relationship',
  'race',
  'sex',
  'native-country'
]
const columnsToRenormalize = [
  'fnlwgt',
  'age',
  'education-num',
  'capital-gain',
  'capital-loss',
  'hours-per-week'
]

class Model extends Component {
  constructor(props) {
    super(props)
    this.state = {
      attributeSelection: attributes.reduce((acc, cur) => Object.assign(acc, { [cur.id]: true }), {}),
      attributeSelected: true,
      training: true,
      trainingLogs: null,
      oneHotIndices: {},
      sex: {},
      done: false,
      acceptanceRates: {
        sex: {
          male: 0,
          female: 0
        }
      },
      failure: false,
      failureReason: null
    }
  }

  async preprocessData(data) {
    const { attributeSelection } = this.state
    const columnsToUse = Object.keys(attributeSelection).filter(key => attributeSelection[key])
    let newXs
    let newYs
    await data
      .batch(1000, false)
      .forEachAsync(el => {
        const { xs, ys } = el
        const columns = []
        const oneHotIndices = {}

        const sexIndices = {}
        let sexEncoded = null

        for (const key in xs) {
          if (columnsToUse.includes(key) && columnsToEncode.includes(key)) {
            const values = xs[key].unique().values
            const indices = xs[key].unique().indices
            columns.push(tf.oneHot(indices, values.shape[0]))
            for (const value of values.arraySync()) {
              oneHotIndices[`${key}-${value.trim().toLowerCase()}`] = Object.keys(oneHotIndices).length
            }
            if (key === 'sex') {
              sexEncoded = tf.oneHot(indices, values.shape[0])
              for (const [index, value] of values.arraySync().entries()) {
                sexIndices[value.trim().toLowerCase()] = index
              }
            } 
          } else if (key === 'sex') {
            const values = xs[key].unique().values
            const indices = xs[key].unique().indices
            sexEncoded = tf.oneHot(indices, values.shape[0])
            for (const [index, value] of values.arraySync().entries()) {
              sexIndices[value.trim().toLowerCase()] = index
            }
          } else if (columnsToUse.includes(key) && columnsToRenormalize.includes(key)) {
            const colData = xs[key]
            const range = colData.max().sub(colData.min())
            columns.push(xs[key].sub(colData.min()).div(range).reshape([-1, 1]))
            oneHotIndices[key] = Object.keys(oneHotIndices).length
          }
        }
        this.setState({
          oneHotIndices,
          sex: {
            encodedData: sexEncoded,
            indices: sexIndices
          }
        })
        newXs = tf.concat(columns, 1)
        newYs = tf.oneHot(ys.income.unique().indices, 2).slice([0, 0], [-1, 1])
      })
    return { xs: newXs, ys: newYs }
  }

  trainModel(input, label) {
    const { id } = this.props
    const model = tf.sequential()
    model.add(tf.layers.dense({
      inputShape: [input.shape[1]],
      units: 1,
      activation: 'relu',
      useBias: true,
      kernelInitializer: tf.initializers.glorotNormal({ seed: 40 })
    }))
    model.add(tf.layers.dense({
      units: 1,
      activation: 'sigmoid',
      useBias: true,
      kernelInitializer: tf.initializers.glorotNormal({ seed: 40 })
    }))
    model.compile({
      optimizer: tf.train.adam(0.1),
      loss: 'binaryCrossentropy',
      metrics: ['accuracy']
    })

    model.fit(
      input,
      label,
      {
        epochs: 11,
        shuffle: false,
        callbacks: {
          onEpochEnd: (epoch, logs) => {
            this.setState({
              trainingLogs: {
                epoch,
                logs
              }
            })
            const percentage = epoch * 10 + Math.round(Math.random() * 4)
            gsap.to(`#${id} .gud-progress-number`, { 
              innerText: percentage, 
              duration: 0.8, 
              overwrite: true,
              modifiers: {
                innerText: i => Math.round(i)
              }
            })
            gsap.to(`#${id} #gud-progress-line`, { 
              strokeDashoffset: 100 - percentage, 
              duration: 0.8, 
              overwrite: true
            })
          }
        }
      }
    ).then(async () => {
      const box = document.querySelector(`#${id} .gud-box-status`)
      if (box) {
        box.innerText = 'Done!'
      }
      const { xs_test, ys_test } = this.state.data
      const acc = await model.evaluate(xs_test, ys_test)[1].array()
      if (acc > 0.75) {
        this.modelCallbackSuccess(model)
      } else {
        this.modelCallbackFailure('low-acc')
      }
    })
    return model
  }

  runModel() {
    this.setState({
      training: true
    }, () => {
      setTimeout(() => {
        const { id } = this.props
        gsap.to(`#${id} .gud-intro-wrap`, {
          opacity: 0,
          zIndex: 0,
          duration: 0.8,
          ease: 'expo.in'
        })
        gsap.to(`#${id} .gud-model-wrap`, {
          y: '-=43em',
          duration: 1.6,
          ease: 'expo.inOut',
          onComplete: async () => {
            const { data } = this.props
            const { xs, ys } = await this.preprocessData(data)
            const xs_train = xs.slice(0, 700)
            const xs_test = xs.slice(700, -1)
            const ys_train = ys.slice(0, 700)
            const ys_test = ys.slice(700, -1)
            this.setState({
              data: {
                xs_test,
                ys_test
              }
            }, () => this.trainModel(xs_train, ys_train))
          }
        })
        gsap.to(`#${id} .gud-training-wrap`, {
          opacity: 1,
          zIndex: 2,
          duration: 0.6,
          delay: 0.4,
          ease: 'expo.in'
        })
      }, 0)
    })
  }

  async modelCallbackSuccess(model) {
    const { xs_test } = this.state.data
    const { sex } = this.state
    const preds = model.predict(xs_test)

    const maleAcceptance = await preds.greater(0.5).where(sex.encodedData.gather(sex.indices['male'], 1).slice(700, -1).equal(1), tf.zeros([300, 1])).sum().div(300).data()
    const femaleAcceptance = await preds.greater(0.5).where(sex.encodedData.gather(sex.indices['female'], 1).slice(700, -1).equal(1), tf.zeros([300, 1])).sum().div(300).data()

    const vizCeilPercentage = Math.ceil(Math.max(maleAcceptance, femaleAcceptance) * 10) * 10

    this.setState({
      training: false,
      done: true,
      acceptanceRates: {
        sex: {
          male: maleAcceptance,
          female: femaleAcceptance
        },
        viz: {
          ceilPercentage: vizCeilPercentage,
          numTicks: vizCeilPercentage / 10 + 1
        }
      }
    }, () => {
      setTimeout(() => {
        const { id } = this.props
        gsap.set(`#${id} .gud-training-wrap`,
          { zIndex: 0 })
        gsap.fromTo(`#${id} .gud-result-wrap`,
          { opacity: 0 },
          { opacity: 1, zIndex: 2, ease: 'expo.out', duration: 1.2 })
        gsap.fromTo(`#${id} .gud-result-viz-bar.men`, 
          { width: 0 }, 
          { width: `${maleAcceptance * 100 / vizCeilPercentage * 100}%`, ease: 'expo.out', duration: 1.2 })
        gsap.fromTo(`#${id} .gud-result-viz-bar.women`, 
          { width: 0 }, 
          { width: `${femaleAcceptance * 100 / vizCeilPercentage * 100}%`, ease: 'expo.out', duration: 1.2 })
        gsap.fromTo(`#${id} .gud-attribute-wrap`, 
          { opacity: 1 }, 
          { opacity: 0, ease: 'expo.out', duration: 0.8 })
      }, 0)
    })
  }

  async modelCallbackFailure(failureReason) {
    this.setState({
      training: false,
      done: true,
      failure: true,
      failureReason
    }, () => {
      setTimeout(() => {
        const { id } = this.props
        gsap.set(`#${id} .gud-training-wrap`,
          { zIndex: 0 })
        gsap.fromTo(`#${id} .gud-result-wrap`,
          { opacity: 0 },
          { opacity: 1, zIndex: 2, ease: 'expo.out', duration: 0.8 })
        gsap.fromTo(`#${id} .gud-attribute-wrap`, 
          { opacity: 1 }, 
          { opacity: 0, ease: 'expo.out', duration: 0.8 })
      }, 0)
    })
  }

  retry() {
    const { id } = this.props
    gsap.to(`#${id} .gud-model-wrap`, {
      y: '+=42.6em',
      duration: 1.6,
      ease: 'expo.inOut'
    })
    gsap.to(`#${id} .gud-result-wrap`, {
      opacity: 0,
      zIndex: 0,
      duration: 0.6,
      ease: 'power2.in',
      onComplete: () => {
        this.setState({
          training: false,
          trainingLogs: null,
          oneHotIndices: {},
          sex: {},
          done: false,
          acceptanceRates: {
            sex: {
              male: 0,
              female: 0
            }
          },
          failure: false,
          failureReason: null
        }, () => {
          gsap.to(`#${id} .gud-intro-wrap`, {
            opacity: 1,
            zIndex: 2,
            delay: 0.2,
            duration: 1.4,
            ease: 'expo.out'
          })
          gsap.to(`#${id} .gud-training-wrap`, {
            opacity: 0,
            zIndex: 0,
            duration: 0.6,
            ease: 'expo.out'
          })
          gsap.to(`#${id} .gud-attribute-wrap`, { 
            opacity: 1, 
            ease: 'expo.out', 
            duration: 0.6 
          })
        })
      }
    })
  }

  toggleAttribute(attribute) {
    const { attributeSelection } = this.state
    this.setState({
      attributeSelection: {
        ...attributeSelection,
        [attribute]: !attributeSelection[attribute]
      }
    }, () => {
      const { attributeSelection } = this.state
      const attributeSelected = Object.keys(attributeSelection).findIndex(key => attributeSelection[key]) !== -1
      this.setState({
        attributeSelected
      })
    })
  }

  keyboardSelectorListener(e) {
    if (e.key === 'Enter') {
      this.runModel()
    }
  }

  componentDidMount() {
    this.setState({
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth
    })
    windowResize.add(() => {
      this.setState({
        screenHeight: window.innerHeight,
        screenWidth: window.innerWidth
      })
    })
  }

  componentWillUnmount() {
    windowResize.clear()
  }

  render() {
    const { id, intro, outro } = this.props
    const {
      attributeSelection,
      attributeSelected,
      training,
      trainingLogs,
      screenHeight,
      screenWidth,
      done,
      acceptanceRates,
      failure, 
      failureReason
    } = this.state
    let cta = 'click'

    return (
      <div className="gu-demo-wrap" id={id}>
        <div className="gud-model-outer-wrap">
          <div className="gud-model-wrap">
            {attributes.map((attribute, index) => {
              const lineHeightRatio = screenWidth > 768 ? (1 - index * 42 / 740) : (1 - index * 42 / 910)
              if (lineHeightRatio) {
                return (
                  <button
                    className={`gud-attribute-wrap no-tap-highlight${attributeSelection[attribute.id] ? ' active' : ''}`}
                    key={attribute.id}
                    onClick={() => this.toggleAttribute(attribute.id)}
                  >
                    <p className="gud-attribute-name">{attribute.name}</p>
                    <div className="gud-attribute-radio flex-center">
                      <svg
                        width="140"
                        height="700"
                        fill="none"
                        viewBox="0 0 140 700"
                        className="gud-attribute-curve"
                        preserveAspectRatio="xMinYMin"
                        style={{ '--index': index }}
                      >
                        <path
                          stroke="#BBBBBB"
                          strokeWidth="1.2"
                          d={`M70 1c27 0 77.5 ${26.2 * lineHeightRatio} 77.5 ${117.7 * lineHeightRatio}C138 ${270.1 * lineHeightRatio} 76.5 ${473.4 * lineHeightRatio} 1 ${700 * lineHeightRatio}`}
                        />
                      </svg>
                      <div className="gud-attribute-radio-box" />
                      <svg
                        width="20"
                        height="18"
                        fill="none"
                        viewBox="0 0 20 18"
                        className="gud-attribute-check"
                      >
                        <path
                          className="svg-stroke background"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M1.5 11L8 16.5 18.5 2"
                        />
                      </svg>
                    </div>
                  </button>
                )
              }
              return null
            })}
            <div className="gud-box-wrap">
              <div className="gud-box flex-center">
                <p className="gud-box-status">{training && !trainingLogs ? 'Starting…' : 'Training…'}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="gud-content-wrap">
          <div className="gud-intro-wrap absolute-center">
            {intro && intro.intro && (
              <p className="gud-explanation">
                {intro.intro}
              </p>
            )}
            {intro && intro.introLabel && (
              <p className="gud-explanation-label">
                {intro.introLabel}
              </p>
            )}
            <button
              className="gud-train-button"
              onClick={() => this.runModel()}
              disabled={!attributeSelected}
            >
              {content.trainButton}
            </button>
          </div>
          <div className="gud-training-wrap absolute-center">
            {training && !trainingLogs && <p className="gud-logs">Starting…</p>}
            {training && trainingLogs && trainingLogs.logs && (
              <div className="gud-training-logs-wrap">
                <p className="gud-progress-label">
                  Training...
                </p>
                <div className="gud-progress-wrap">
                  <svg
                    width="100"
                    height="4"
                    viewBox="0 0 100 4"
                    className="gud-training-progress"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path 
                      className="svg-stroke light"
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      d="M1 2L99 2"
                    />
                    <path 
                      id="gud-progress-line"
                      stroke="#fdf3d8" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeDasharray="100 100"
                      strokeDashoffset="100"
                      d="M1 2L99 2"
                    />
                  </svg>
                  <p className="gud-progress-percent-group">
                    <span className="gud-progress-number">{0}</span>
                    <span className="gud-progress-percentage">%</span>
                  </p>
                </div>
              </div>
            )}
          </div>
          {done && (
            <div className="gud-result-wrap absolute-center">
              {!failure && (
                <div className="gud-result-success-wrap">
                  <p className="gud-result-viz-label">Positive prediction rate by sex:</p>
                  <div className="gud-result-viz">
                    <div className="gud-result-viz-ticks-wrap absolute-center">
                      {[...Array(acceptanceRates.viz.numTicks)].map((_, index) => {
                        return (
                          <div className="gud-result-viz-tick" key={index}>
                            <p className="gud-result-viz-tick-label">{`${index * 10}%`}</p>
                          </div>
                        )
                      })}
                    </div>
                    <div className="gud-result-viz-bar-wrap men">
                      <p className="gud-result-viz-bar-label">Male</p>
                      <div className="gud-result-viz-bar men">
                        <p className="gud-result-viz-bar-percentage-label">{`${Math.round(acceptanceRates.sex.male * 100)}%`}</p>
                      </div>
                    </div>
                    <div className="gud-result-viz-bar-wrap women">
                      <p className="gud-result-viz-bar-label">Female</p>
                      <div className="gud-result-viz-bar women">
                        <p className="gud-result-viz-bar-percentage-label">{`${Math.round(acceptanceRates.sex.female * 100)}%`}</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="gud-result-padding"></div>
                  <p className="gud-result-message">
                    {content.acceptanceRates(acceptanceRates.sex.male, acceptanceRates.sex.female)}
                  </p>
                  {outro && (
                    <p className="gud-result-message">
                      {outro}
                    </p>
                  )}
                  <button 
                    className="gud-result-retry" 
                    onClick={() => this.retry()}
                  >
                    Try again
                  </button>
                </div>
              )}
              {failure && (
                <div className="gud-results-failure-wrap">
                  <p className="gud-result-message">
                    {content.failureMessages[failureReason]}
                  </p>
                  <button 
                    className="gud-result-retry" 
                    onClick={() => this.retry()}
                  >
                    Try again
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Model
