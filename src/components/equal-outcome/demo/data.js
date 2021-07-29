export const scrollContent = [
  {
    id: 'topic',
    text: 'In 2012, the Wisconsin Department of Corrections began using COMPAS - software that predicts a defendant\'s likelihood of reoffending - for making sentencing decisions.',
    width: 6,
    mobileWidth: 12,
    align: 'center'
  },
  {
    id: 'score-system',
    text: 'Each defendant was assigned a score from 1 to 10, with 1 being the least likely to reoffend and 10 being the most likely.',
    width: 4,
    mobileWidth: 12,
    align: 'right'
  },
  {
    id: 'distribution',
    text: 'Here\'s the overall score distribution. The x-axis is the score and the y-axis is the percentage of defendants who were assigned that score.',
    width: 4,
    mobileWidth: 12,
    align: 'right'
  },
  {
    id: 'distribution-2',
    text: 'Most of the scores are in the low end of the spectrum.',
    width: 4,
    mobileWidth: 12,
    align: 'right'
  },
  {
    id: 'discrepancy',
    text: 'However, there is a significant discrepancy between racial groups. The most noticeable is between Caucasian and African-American defendants.',
    width: 4,
    mobileWidth: 12,
    align: 'right'
  },
  {
    id: 'discrepancy-2',
    text: 'The average scores are 3.1 for Caucasian defendants and 4.3 for African-Americans. The score distribution for African-Americans leans more toward the right compared to that for Caucasian defendants.',
    width: 4,
    mobileWidth: 12,
    align: 'right'
  },
  {
    id: 'threshold',
    text: 'Now, to make a simple classification of a defendant\'s risk of reoffending, we use a threshold. If the defendant\'s score is above that threshold, then we label them as \"high-risk\".',
    width: 4,
    mobileWidth: 12,
    align: 'right'
  }
]

export const generalConfig = { 
  width: 600, height: 400, 
  target: '.dpd-viz-general',
  drawBars: true,
  drawFitCurve: true
}

export const generalData = {
  xScale: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  yScale: [0, 0.4],
  content: [{x:1,y:0.304},{x:2,y:0.151},{x:3,y:0.14},{x:4,y:0.088},{x:5,y:0.079},{x:6,y:0.071},{x:7,y:0.055},{x:8,y:0.046},{x:9,y:0.039},{x:10,y:0.027}]
}

export const generalAnimations = [
  {
    id: 'score-system',
    animations: [
      {
        target: '',
        from: { opacity: 0 },
        to: { opacity: 1 },
        location: 'start'
      },
      {
        target: '.x-axis > .domain',
        from: { drawSVG: '0%' },
        to: { drawSVG: '100%' },
        location: 'start'
      },
      {
        target: '.x-axis > .tick > text',
        from: { opacity: 0 },
        to: { opacity: 0.3 },
        location: 'start',
        stagger: true
      }
    ]
  },
  {
    id: 'distribution',
    animations: [
      {
        target: '.y-axis > .tick > text',
        from: { opacity: 0 },
        to: { opacity: 0.3 },
        location: 'start',
        stagger: true
      },
      {
        target: '.y-axis > .tick > line',
        from: { drawSVG: '0%' },
        to: { drawSVG: '100%' },
        location: 'start',
        stagger: true
      },
      {
        target: '.bars > .bar',
        from: { scaleY: 0 },
        to: { scaleY: 1 },
        location: 'start',
        stagger: true
      }
    ]
  },
  {
    id: 'distribution-2',
    animations: [
      {
        target: '.bars > .bar',
        from: { opacity: 1 },
        to: { opacity: 0.06 },
        location: 'start',
        stagger: true
      },
      {
        target: '.fit-curve',
        from: { drawSVG: '0%' },
        to: { drawSVG: '100%' },
        location: 'start'
      },
      {
        target: '',
        from: { opacity: 1 },
        to: { opacity: 0 },
        location: 'end'
      }
    ]
  }
]

export const caucasianConfig = { 
  id: 'caucasian',
  width: 600, height: 300, 
  target: '.dpd-viz-caucasian',
  drawBars: true,
  drawFitCurve: true,
  drawMean: true,
  drawThreshold: true
}

export const caucasianData = {
  id: 'caucasian',
  xScale: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  yScale: [0, 0.4],
  mean: 3.1,
  content: [{x:1,y:0.368},{x:2,y:0.161},{x:3,y:0.14},{x:4,y:0.083},{x:5,y:0.072},{x:6,y:0.058},{x:7,y:0.042},{x:8,y:0.033},{x:9,y:0.027},{x:10,y:0.016}]
}

export const africanAmericanConfig = { 
  id: 'africanAmerican',
  width: 600, height: 300, 
  target: '.dpd-viz-african-american', className: 'dpd-svg-african-american',
  drawBars: true,
  drawFitCurve: true,
  drawMean: true,
  drawThreshold: true
}

export const africanAmericanData = {
  id: 'africanAmerican',
  xScale: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  yScale: [0, 0.4],
  mean: 4.3,
  content: [{x:1,y:0.207},{x:2,y:0.133},{x:3,y:0.138},{x:4,y:0.096},{x:5,y:0.094},{x:6,y:0.091},{x:7,y:0.075},{x:8,y:0.067},{x:9,y:0.059},{x:10,y:0.042}]
}

const discrepancyFadeInAnimations = [
  {
    target: '',
    from: { opacity: 0 },
    to: { opacity: 1 },
    location: 'start'
  },
  {
    target: '.x-axis > .domain',
    from: { drawSVG: '0%' },
    to: { drawSVG: '100%' },
    location: 'start'
  },
  {
    target: '.x-axis > .tick > text',
    from: { opacity: 0 },
    to: { opacity: 0.3 },
    location: 'start',
    stagger: true
  },
  {
    target: '.y-axis > .domain',
    from: { drawSVG: '0%' },
    to: { drawSVG: '100%' },
    location: 'start'
  },
  {
    target: '.y-axis > .tick > text',
    from: { opacity: 0 },
    to: { opacity: 0.3 },
    location: 'start',
    stagger: true
  },
  {
    target: '.bars > .bar',
    from: { scaleY: 0, opacity: 1 },
    to: { scaleY: 1, opacity: 1 },
    location: 'start',
    stagger: true
  }
]

const discrepancyHighlightAnimations = [
  {
    target: '.bars > .bar',
    from: { opacity: 1 },
    to: { opacity: 0.06 },
    location: 'start',
    stagger: true
  },
  {
    target: '.fit-curve',
    from: { drawSVG: '0%' },
    to: { drawSVG: '100%' },
    location: 'start'
  },
  {
    target: '.mean-g > .mean-path',
    from: { opacity: 0 },
    to: { opacity: 1 },
    location: 'start'
  },
  {
    target: '.mean-g > .mean-text',
    from: { opacity: 0 },
    to: { opacity: 1 },
    location: 'start'
  }
]

export const discrepancyThresholdAnimations = [
  {
    target: '.bars > .bar',
    from: { opacity: 0.06 },
    to: { opacity: 0 },
    duration: 0.25,
    location: 'start'
  },
  {
    target: '.mean-g',
    from: { opacity: 1 },
    to: { opacity: 0 },
    duration: 0.25,
    location: 'start'
  },
  {
    target: '.threshold-g > .threshold-line-g',
    from: { x: 102, opacity: 0 },
    to: { x: 204, opacity: 1 },
    location: 'start',
    stagger: true
  },
  {
    target: '.threshold-g > .threshold-shape',
    from: { opacity: 0 },
    to: { opacity: 1 },
    location: 'start',
    stagger: true
  },
  {
    target: 'defs .threshold-mask-rect',
    from: { scaleX: 0.78 },
    to: { scaleX: 0.56 },
    location: 'start',
    stagger: true
  },
  {
    target: '.y-axis > .tick > text',
    from: { opacity: 0.3 },
    to: { opacity: 0 },
    location: 'start',
    stagger: true
  }
]

export const caucasianAnimations = [
  {
    id: 'discrepancy',
    animations: discrepancyFadeInAnimations
  },
  {
    id: 'discrepancy-2',
    animations: discrepancyHighlightAnimations
  },
  {
    id: 'threshold',
    animations: discrepancyThresholdAnimations
  }
]

export const africanAmericanAnimations = [
  {
    id: 'discrepancy',
    animations: discrepancyFadeInAnimations
  },
  {
    id: 'discrepancy-2',
    animations: discrepancyHighlightAnimations
  },
  {
    id: 'threshold',
    animations: discrepancyThresholdAnimations
  }
]

export const endAnimations = [
  {
    trigger: '.dpd-scroll-area-tail',
    animationsOnEnter: true,
    animations: [
      {
        externalTarget: true,
        target: '.dpd-interactive-prompt-wrap',
        from: { opacity: 0, scale: 0.8, y: '+=4em' },
        to: { opacity: 1, scale: 1, y: 0 },
        location: 'start'
      },
      {
        target: '.threshold-g > .threshold-line-g > .threshold-label-rect',
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
        location: 'start'
      },
      {
        target: '.threshold-g > .threshold-line-g > .threshold-label-text',
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
        location: 'start'
      },
      {
        target: '.threshold-g > .threshold-line-g > .threshold-handle-rect',
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
        location: 'start'
      },
      {
        target: '.threshold-g > .threshold-line-g > .threshold-handle-arrow',
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
        location: 'start'
      }
    ]
  }
]

export const interactiveContent = {
  prompt: 'How would you set the thresholds?',
  hints: ['Drag the handles on the left to move the thresholds.', 'Records show that on average 24% of defendents reoffend. You can use the same threshold for both groups, or different thresholds for each group.']
}
