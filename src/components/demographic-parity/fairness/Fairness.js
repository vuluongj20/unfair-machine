import React, { Component } from 'react'
import './Fairness.css'

const fairnessProQuote = 'Demographic parity ensures strong outcome equality. However, it is difficult to justify the fairness of its stringent requirements.'
const fairnessProContent = [
  'As we saw in chapter 1, while group-unaware algorithms are procedurally fair (since their decision-making procedure does not involve access to any sensitive attributes), they do not result in substantially more equal or equitable outcomes. Demographic parity is a direct response to this. It sacrifices procedural fairness in favor of outcome equality.',
  'However, there is strong criticism that demographic parity unfairly disadvantages certain groups. The debate is, in principle, similar to that on affirmative action in college admissions. In both, the threshold for admissions is raised or lowered in order to accept fewer or more people from certain groups. If we were to practice demographic parity in the case of criminal risk prediction, then the bar for a \'high-risk\' classification would be lower for Caucasian defendants and higher for African-Americans, thus putting Caucasian defendants at a disadvantage. As a result, Caucasian defendants may reasonably protest this treatment. To them, it is a clear case of discrimination based of racial identity: they are now more likely to be classified as \'high-risk\' than they would have been if we didn\'t apply demographic parity. This begs the question: how might we justify demographic parity\'s disparate, potentially discriminatory, treatment?',
  'We can respond by recontextualizing the debate and shifting the focus toward corrective justice. We admit that yes, taken out of context, such a strategy is unfair. However, it is permissible, or even ethically required, to employ such a strategy because it corrects past injustices. Corrective justice is the main force behind state-sanctioned punishment when a crime has been committed. In the case of decision-making algorithms, the injustice would be past discrimination and mistreatment based on race, sex, sexual orietation, and other sensitive attributes. For example, African-American defendants have historically been more likely to be apprehended and convicted due to discriminatory policies like the war of drugs. As such, they deserve affirmative and restorative policies, like demographic parity, to correct for the injustices committed.'
]

class Fairness extends Component {
  render() {
    return (
      <div className="dp-fairness article-wrap py-4 py-2-sm">
        <div className="row dp-fairness-row">
          <div className="padding col-2 flex-center"></div>
          <div className="col-6">
            <p className="quote">{fairnessProQuote}</p>
          </div>
        </div>
        <div className="row dp-fairness-row pb-4">
          <div className="padding col-3 flex-center"></div>
          <div className="col-6">
            <div className="guf-text-wrap">
              {fairnessProContent.map((para, index) => {
                return <p className="guf-text" key={index}>{para}</p>
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Fairness
