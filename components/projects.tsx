import { projectsData } from '@/lib/data'
import SectionHeading from './section-heading'
import React from 'react'
import Project from './project'

export default function Projects() {
	return (
		<section id='projects' className='scroll-mt-28'>
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
