import React, { Component, Fragment } from "react"

import "./references.css"

export class ReferenceItem extends Component {
	render() {
		const { ind, title, link, info, doi } = this.props

		return (
			<div id={`reference-link-${ind}`} className="ref-item-wrap mb-1">
				<p className="ref-item-index">{ind && `${ind}.`}</p>
				<div className="ref-item-content">
					{link ? (
						<a className="ref-item-title" href={link}>
							{title}
						</a>
					) : (
						<p className="ref-item-title">{title}</p>
					)}
					<p className="ref-item-info">
						{info}
						{doi && (
							<Fragment>
								&nbsp;
								<a href={`https://doi.org/${doi}`} className="ref-item-doi">
									DOI: {doi}
								</a>
							</Fragment>
						)}
					</p>
				</div>
			</div>
		)
	}
}

export class ReferencesSection extends Component {
	render() {
		const { references, dataSource } = this.props

		return (
			<div className="ref-section-wrap text-wrap center my-4">
				<p className="ref-subsection-title mb-1">References</p>
				{references.map(ref => (
					<ReferenceItem key={ref.ind} {...ref} />
				))}
				{dataSource && (
					<Fragment>
						<p className="ref-subsection-title mt-2">Data</p>
						<ReferenceItem {...dataSource} />
					</Fragment>
				)}
			</div>
		)
	}
}

class ReferenceLink extends Component {
	render() {
		const { ind } = this.props

		return (
			<sup className="reference-link-sup">
				<a className="reference-link" href={`#reference-link-${ind}`}>
					[{ind}]
				</a>
			</sup>
		)
	}
}

const footnoteRegEx = new RegExp(/(\[\d\])/g)

export const parseReferenceLinks = bodyText => {
	const spans = bodyText.split(footnoteRegEx)
	return spans.map((span, i) => {
		if (span.match(footnoteRegEx)) {
			const ind = span.substring(1, 2)

			return <ReferenceLink key={i} ind={ind} />
		}
		return <span key={i}>{span}</span>
	})
}
