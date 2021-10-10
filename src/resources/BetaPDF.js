const gamma = require("gamma")
const lngamma = gamma.log

const lnBetaPDF = (x, a, b) => {
  const betaInv = lngamma(a + b) - lngamma(a) - lngamma(b)
  return betaInv + (a - 1) * Math.log(x) + (b - 1) * Math.log(1 - x)
}

export default (x, a, b) => {
  return Math.exp(lnBetaPDF(x, a, b))
}
