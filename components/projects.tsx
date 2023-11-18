import { projectsData } from '@/lib/data'
import SectionHeading from './section-heading'
import React from 'react'

export default function Projects() {
	return (
		<section>
			<SectionHeading>My Projects</SectionHeading>
			<div>
				{projectsData.map((project, i) => (
					<React.Fragment key={i}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	)
}

function Project({ title, description, tags, imageUrl }) {
	return <div>{title}</div>
}
