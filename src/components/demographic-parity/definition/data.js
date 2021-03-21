export const caucasianConfig = { 
  id: 'caucasian',
  width: 600, height: 300, 
  target: '.dp-def-viz-caucasian', className: 'dp-def-svg-caucasian',
  drawBars: false,
  drawFitCurve: true,
  drawMean: false,
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
  target: '.dp-def-viz-african-american', className: 'dp-def-svg-african-american',
  drawBars: false,
  drawFitCurve: true,
  drawMean: false,
  drawThreshold: true
}

export const africanAmericanData = {
  id: 'africanAmerican',
  xScale: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  yScale: [0, 0.4],
  mean: 4.3,
  content: [{x:1,y:0.207},{x:2,y:0.133},{x:3,y:0.138},{x:4,y:0.096},{x:5,y:0.094},{x:6,y:0.091},{x:7,y:0.075},{x:8,y:0.067},{x:9,y:0.059},{x:10,y:0.042}]
}
