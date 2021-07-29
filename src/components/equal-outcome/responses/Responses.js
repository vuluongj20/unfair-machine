import React, { Component } from 'react'
import './Responses.css'

const headingQuote = 'Some stakeholders may object to using equality of outcome in decison-making models. There are two that warrant further discussion.'

const accuracyBody = [
  'Algorithm designers are concerned with the effect of rate equalization on model accuracy. Changing the acceptance thresholds on any given model will also change its accuracy. In essence, the thresholds determine who gets classified as what (higher thresholds mean fewer people will get classified as "high-risk"). Changing the thresholds most often changes the number of misclassifications, resulting in different accuracy scores.',
  'This is a valid concern, but not a fatal flaw that precludes the use of outcome-equal models. Since the thresholds are often continuous and movable, there may be an acceptable level that strikes a balance between performance and equity/equality among demographic groups. This is a decision that algorithm designers must make on a case-by-case basis, with careful consideration of the model\'s architecture, the data it uses, and the history that is reflected in that data.'
]

const treatmentBody = [
  'Members of demographic groups that have historically been favored by decision-making algorithms, such as Caucasian defendants in the risk model above, may reject equality of outcome because they think that it discriminates against them. From their perspective, equality of outcome makes it more likely that they will be classified as "high-risk".',
  'In many ways, this is similar to the case of affirmative action in university admissions. Groups that are historically overrepresented at higher-education institutions, like Asian students, may object to the placement of race-based quotas during the admissions process. These quotas, similar to the "high-risk" threshold in our case with the defendants, restrict the number of people being admitted based on their racial identity.',
  'Both of these cases touch on equality of outcome\'s singular weakness: its procedurally unfair requirements. Outcome-equal models must necessary be aware of each individual\'s demographic identity and make different sets of predictions based on this information. Such disparate treatment based on demographics makes these models procedurally unfair. While the intent is not to discriminate (but rather to promote some form of outcome fairness), the procedure itself is inherently discriminatory.',
  'We may respond to such fairness complaints in two ways. First, we can accept equality of outcome\'s inherently discriminatory nature but still reason that its potential benefits outweigh the harms. This approach emphasizes outcomes  over procedural nature. For example, affirmative action creates diverse campuses where students with various backgrounds, beliefs and values can mingle and exchange ideas. This leads to a rich and challenging learning environment, which is immensely beneficial for students.',
  'Second, we can argue that the disparate treatment is justified because it serves to correct past injustices, in an approach called corrective justice. Most of us generally accept that disciplinarian measures and imprisonment are justified against proven criminals as long as the measures are proportional to the crime. There are many ways to justify such measures, one of which is the belief that criminals forgo certain rights and privileges (e.g. the freedom of movement) the moment they commit the crime. The justifications for measures against criminal fall under the scope of corrective justice.',
  'Now, we can also extend corrective justice to the case of defendant risk assessment. We may reason that African-American defendants have been more likely to reoffend due to an unjust legal and social system. Released African-American prisoners face prejudice from parole officers and overwhelming stigma within society. As such, they are more likely than Caucasian ex-prisoners to break parole or reoffend. This is an injustice that requires some corrective measures. From this, we may reason that outcome-equal decision-making models will be justified in extending disparate treatment to different racial groups, precisely because such treatment helps correct past injustices. It is important to note that corrective justice is not an "eye for an eye" approach. Rather, the aim is to rebalance the scale, to help amend the harm and inequality that result from past injustices. It emphasizes healing and reconciliation, not retribution.'
]

class Responses extends Component {
  render() {
    return (
      <div className="dp-fairness article-wrap my-4">
        <div className="heading-wrap center mt-3">
          <div className="heading-inner-wrap">
            <h1 className="heading-number">3.</h1>
            <h2 className="heading">A Couple of Responses</h2>
            <div className="heading-quote-wrap mt-2">
              <div className="heading-quote quote-small mb-2">{headingQuote}</div>
              <div className="heading-quote-line mb-2" />
            </div>
          </div>
        </div>
        <div className="text-wrap center mt-2">
          <h3 className="mt-2">Model accuracy</h3>
          <div className="guf-text-wrap mt-1">
            {accuracyBody.map((para, index) => {
              return <p className="guf-text" key={index}>{para}</p>
            })}
          </div>
          <h3 className="mt-2">Disparate treatment</h3>
          <div className="guf-text-wrap mt-1">
            {treatmentBody.map((para, index) => {
              return <p className="guf-text" key={index}>{para}</p>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Responses
