import React, { Component } from 'react'
import './Fairness.css'

const quote = 'Demographic parity results in strong outcome equality. However, it is difficult to justify its stringent requirements.'
const body = [
  'As we saw in chapter 1, while group-unaware algorithms are more fair in the procedural sense, they do not result in substantially more equal or equitable outcomes. Demographic parity is a direct response to this weakness. It sacrifices procedural fairness in favor of outcome equality. The latter constitute the core requirement of demographic parity.',
  'However, there is strong criticism that demographic parity unfairly disadvantages certain groups. The debate is, in principle, similar to that on affirmative action in college admissions. In both, the threshold for admissions is raised or lowered in order to accept fewer or more people from certain groups. If we were to practice demographic parity in the case of criminal risk prediction, then the bar for a \"high-risk\" classification would be lower for Caucasian defendants and higher for African-Americans, thus putting Caucasian defendants at a disadvantage. As a result, Caucasian defendants may protest this disparate treatment. To them, it is a clear case of discrimination based of racial identity: they are now more likely to be classified as \"high-risk\" than they would have been if we didn\'t apply demographic parity. This begs the question: how might we justify demographic parity\'s potentially discriminatory treatment?',
  'One way to respond is to recontextualize the debate and shift the focus toward corrective justice. We admit that yes, taken out of context, such a strategy is unfair. However, it is permissible, or even ethically required, to employ such a strategy because it corrects past injustices. Corrective justice is the main force behind state-sanctioned punishment when a crime has been committed. In the case of decision-making algorithms, the injustice would be past discrimination and mistreatment based on race, sex, sexual orietation, and other sensitive attributes. For example, African-American defendants have historically been more likely to be apprehended and convicted due to discriminatory policies like the war of drugs. As such, they deserve affirmative and restorative policies, like demographic parity, to correct for the injustices committed.',
  'Still, many remain unconvinced. In the next chapter, we will explore equal opportunity, another conception of fairness that is in many ways less demanding than demographic parity.'
]

class Fairness extends Component {
  render() {
    return (
      <div className="dp-fairness article-wrap my-3">
        <div className="quote-wrap center no-bt">
          <p className="quote">{quote}</p>
        </div>
        <div className="text-wrap center mt-3">
          <div className="guf-text-wrap">
            {body.map((para, index) => {
              return <p className="guf-text" key={index}>{para}</p>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Fairness
